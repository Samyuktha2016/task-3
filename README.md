# TaskMaster - Premium MERN Task Manager

A modern, high-performance Task Management Application built with the MERN stack (MongoDB, Express, React, Node.js). Features a stunning dark-mode UI with glassmorphism effects, smooth animations, and a seamless user experience.

## 🚀 Features

- **Standard CRUD Operations**: Create, Read, Update, and Delete tasks efficiently.
- **Premium UI/UX**:
  - Dark mode aesthetic with vibrant gradients.
  - Glassmorphic panels and inputs.
  - Smooth transitions and micro-interactions using `framer-motion`.
- **Task Organization**:
  - Categorize by Status (Pending, In Progress, Completed).
  - Prioritize tasks (Low, Medium, High) with visual indicators.
  - Due date tracking.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Real-time Feedback**: Instant toast notifications for actions and errors.

## 🛠️ Tech Stack

### Frontend
- **React (Vite)**: Fast development and optimized build.
- **Tailwind CSS** (via Custom CSS variables): For core styling structure.
- **Framer Motion**: For complex animations and layout transitions.
- **Lucide React**: Modern, consistent icon set.
- **Axios**: HTTP client for API communication.
- **React Hot Toast**: For elegant notifications.

### Backend
- **Node.js & Express**: Robust RESTful API architecture.
- **MongoDB & Mongoose**: Flexible document-based database and object modeling.
- **Cors & Dotenv**: Middleware for security and configuration.

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (Local instance or MongoDB Atlas URI)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Samyuktha2016/Task-3.git
cd task-manager
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
*Note: Replace `MONGO_URI` with your connection string if using MongoDB Atlas.*

Start the backend server:
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

Start the React development server:
```bash
npm run dev
```
The application will launch typically at `http://localhost:5173`.

## 📡 API Endpoints

- **GET** `/api/tasks` - Fetch all tasks.
- **GET** `/api/tasks/:id` - Fetch a single task.
- **POST** `/api/tasks` - Create a new task.
- **PUT** `/api/tasks/:id` - Update an existing task.
- **DELETE** `/api/tasks/:id` - Delete a task.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
Developed with ❤️ by [Your Name]
