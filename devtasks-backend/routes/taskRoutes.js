const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks');

router.get('/', async (req,res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({error: 'Error searching tasks', err})
    }
});

router.post('/', async (req,res) => {
    try{
const newTask = new Task({ title: req.body.title });
const savedTask = await newTask.save();
res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json({error:'Error creating task'});
    }
});

router.put('/:id', async (req,res) => {
    try{
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({error:'Error updating task'});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message: 'Task deleted!'});
    } catch (err){
        res.status(500).json({error: 'Error deleting task'});
    }
});


module.exports = router;