import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="glass-panel" style={{
            marginBottom: '2rem',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className="heading-gradient" style={{ fontSize: '1.5rem', margin: 0 }}>
                    TaskMaster
                </h1>
            </Link>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/">
                    <button className={`glass-button ${location.pathname === '/' ? 'active' : ''}`} style={{
                        background: location.pathname === '/' ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                        boxShadow: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <LayoutDashboard size={18} />
                        Dashboard
                    </button>
                </Link>
                <Link to="/create">
                    <button className="glass-button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <PlusCircle size={18} />
                        New Task
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
