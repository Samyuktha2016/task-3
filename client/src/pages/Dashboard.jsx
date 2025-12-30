import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, AlertCircle, Trash2, Edit } from 'lucide-react';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/tasks');
                setTasks(res.data);
            } catch (error) {
                console.error("Error fetching tasks", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error("Error deleting task", error);
        }
    };

    const getPriorityColor = (p) => {
        switch (p) {
            case 'High': return '#ef4444';
            case 'Medium': return '#f59e0b';
            case 'Low': return '#10b981';
            default: return '#94a3b8';
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="page-container">
            <Navbar />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}
            >
                {loading ? (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>Loading tasks...</p>
                ) : tasks.length === 0 ? (
                    <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '3rem', color: 'var(--text-muted)' }}>
                        <p>No tasks found. Create one to get started!</p>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <motion.div
                            key={task._id}
                            variants={itemVariants}
                            className="glass-panel"
                            whileHover={{ scale: 1.02 }}
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                background: getPriorityColor(task.priority)
                            }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{task.title}</h3>
                                <div style={{
                                    padding: '4px 8px',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    fontSize: '0.75rem',
                                    border: `1px solid ${getPriorityColor(task.priority)}`
                                }}>
                                    {task.priority}
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-muted)', flex: 1 }}>{task.description}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem' }}>
                                    {task.status === 'Completed' ? <CheckCircle2 color="#10b981" size={16} /> :
                                        task.status === 'In Progress' ? <Clock color="#f59e0b" size={16} /> :
                                            <AlertCircle color="#94a3b8" size={16} />}
                                    <span>{task.status}</span>
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <Link to={`/edit/${task._id}`}>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                            <Edit size={18} />
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(task._id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </motion.div>
        </div>
    );
};

export default Dashboard;
