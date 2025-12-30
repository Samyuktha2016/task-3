import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const CreateTask = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'Pending',
        priority: 'Medium',
        dueDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/tasks', formData);
            navigate('/');
        } catch (error) {
            console.error("Error creating task", error);
            import('react-hot-toast').then(({ toast }) => {
                toast.error('Failed to create task. Please try again.');
            });
        }
    };

    return (
        <div className="page-container">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel"
                style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}
            >
                <h2 className="heading-gradient" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Create New Task</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Title</label>
                        <input
                            type="text"
                            name="title"
                            className="input-field"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter task title"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Description</label>
                        <textarea
                            name="description"
                            className="input-field"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Enter task description"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Status</label>
                            <select name="status" className="input-field" value={formData.status} onChange={handleChange}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Priority</label>
                            <select name="priority" className="input-field" value={formData.priority} onChange={handleChange}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Due Date</label>
                        <input
                            type="date"
                            name="dueDate"
                            className="input-field"
                            value={formData.dueDate}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="glass-button" style={{ marginTop: '1rem', width: '100%' }}>
                        Create Task
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default CreateTask;
