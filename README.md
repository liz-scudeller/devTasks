# DevTasks ✅

A fullstack task manager app — fast, clean, and fully online.

![screenshot](https://via.placeholder.com/800x400.png?text=DevTasks+App+Preview)

## 🔗 Live Demo

- **Frontend (React + Vercel):** [https://dev-tasks-bew3n1r4d-liz-scudellers-projects.vercel.app/](https://dev-tasks-bew3n1r4d-liz-scudellers-projects.vercel.app/)
- **Backend (Express + Render):** [https://devtasks-backend-rytz.onrender.com/](https://devtasks-backend-rytz.onrender.com/)

---

## ✨ Features

- Create tasks
- Edit task titles with auto-focus
- Mark tasks as complete
- Delete tasks
- Filter by All | Pending | Completed
- Clean and responsive UI (pure CSS)
- Full deployment (frontend + backend + MongoDB Atlas)

---

## ⚙️ Technologies

### 🔹 Frontend
- React
- Hooks: `useState`, `useEffect`, `useRef`
- Fetch API
- Pure CSS (no Tailwind)

### 🔹 Backend
- Node.js + Express
- MongoDB + Mongoose
- Hosted on Render
- Connected to MongoDB Atlas

---

## 🚀 Getting Started (Local Development)

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Frontend
cd devtasks-frontend
npm install
npm start

# In another terminal
cd devtasks-backend
npm install
node server.js

🔐 Environment Variables
In the backend, create a .env file with:
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/devtasks?retryWrites=true&w=majority
> Replace `<USERNAME>`, `<PASSWORD>`, and `<CLUSTER>` with your MongoDB Atlas credentials.

```
👩‍💻 Author

**Liz Alvarez Scudeller**  
Frontend & Fullstack Developer  

🌐 [LinkedIn](https://www.linkedin.com/in/lizscudeller/)  
📧 lizalvarezscudeller@gmail.com

📌 Status

✅ Fully functional and deployed

🔜 Possible improvements: dark mode, authentication, animations
