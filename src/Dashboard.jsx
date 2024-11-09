
import React, { useState, useEffect } from 'react';
import AddWork from './components/admin/AddWork';
import WorkList from './components/admin/WorkList';
import './styles/Dashboard.css'

function Dashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the list of projects from the API
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            
            <section className="add-project">
                <h2>Add New Project</h2>
                <AddWork />
            </section>

            <section className="project-list">
                <h2>Manage Projects</h2>
                <WorkList projects={projects} />
            </section>
        </div>
    );
}

export default Dashboard;
