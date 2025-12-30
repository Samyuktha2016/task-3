# MERN Task Management Application

A premium, modern Task Management application built with the MERN stack (MongoDB, Express, React, Node.js). This application features a sleek dark mode UI with glassmorphism effects, smooth animations, and a robust backend for managing tasks.

## 🚀 Features

*   **MERN Stack Architecture:** Full-stack JavaScript development.
*   **CRUD Operations:** Create, Read, Update, and Delete tasks seamlessly.
*   **Premium UI/UX:**
    *   Dark mode with vibrant gradient accents.
    *   Glassmorphism design for cards and navigation.
    *   Smooth entry and exit animations using `framer-motion`.
*   **Task Management:**
    *   Categorize by Status (Pending, In Progress, Completed).
    *   Set Priorities (Low, Medium, High).
    *   Due Date tracking.
*   **Responsive Design:** Fully optimized for desktop and mobile devices.
*   **Instant Feedback:** Toast notifications for actions and errors.

## 🛠️ Tech Stack

**Frontend:**
*   React (Vite)
*   React Router DOM
*   Axios
*   Framer Motion (Animations)
*   React Hot Toast (Notifications)
*   Lucide React (Icons)
*   Vanilla CSS (Variables & Custom Styling)

**Backend:**
*   Node.js
*   Express.js
*   MongoDB (Mongoose)
*   Dotenv (Environment Variables)
*   Cors

## 📦 Installation & Setup

### Prerequisites
*   Node.js installed on your machine.
*   MongoDB installed locally or a MongoDB Atlas connection string.

### 1. Clone the Repository
```bash
git clone https://github.com/Samyuktha2016/Task-3.git
cd Task-3
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```
*Note: Replace `MONGO_URI` with your own connection string if not using local MongoDB.*

Start the backend server:
```bash
npm run dev
# Server should run on http://localhost:5000
```

### 3. Frontend Setup
Open a new terminal, navigate to the client directory and install dependencies:
```bash
cd ../client
npm install
```

Start the React development server:
```bash
npm run dev
# Client will open at http://localhost:5173 (or 5174 if 5173 is busy)
```

## 📝 Usage

1.  **Dashboard:** View all your tasks in a grid layout. The color-coded bars indicate priority.
2.  **Create Task:** Click "New Task" in the navigation bar to add a task with title, description, priority, and due date.
3.  **Edit Task:** Click the *Edit* (pencil) icon on any task card to modify its details.
4.  **Delete Task:** Click the *Trash* icon to remove a task permanently.
5.  **Status Updates:** The dashboard visually displays the status of each task.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
