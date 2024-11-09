
import React, { useState } from 'react';

function AddWork() {
    const [workMockup, setWorkMockup] = useState('');
    const [workTitle, setWorkTitle] = useState('');
    const [workDesc, setWorkDesc] = useState('');
    const [workLink, setWorkLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const projectData = { workMockup, workTitle, workDesc, workLink };

        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectData),
            });

            if (!response.ok) throw new Error('Failed to add project');
            alert('Project added successfully');
        } catch (error) {
            alert('Error adding project: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Work Mockup URL"
                value={workMockup}
                onChange={(e) => setWorkMockup(e.target.value)}
            />
            <input
                type="text"
                placeholder="Work Title"
                value={workTitle}
                onChange={(e) => setWorkTitle(e.target.value)}
            />
            <textarea
                placeholder="Work Description"
                value={workDesc}
                onChange={(e) => setWorkDesc(e.target.value)}
            />
            <input
                type="text"
                placeholder="Work Link"
                value={workLink}
                onChange={(e) => setWorkLink(e.target.value)}
            />
            <button type="submit">Add Project</button>
        </form>
    );
}

export default AddWork;
