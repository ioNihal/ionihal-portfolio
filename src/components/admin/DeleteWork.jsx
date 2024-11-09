
import React from 'react';

function DeleteWork({ projectId }) {
    const handleDelete = async () => {
        try {
            const response = await fetch('/api/projects', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: projectId }),
            });

            if (!response.ok) throw new Error('Failed to delete project');
            alert('Project deleted successfully');
        } catch (error) {
            alert('Error deleting project: ' + error.message);
        }
    };

    return <button onClick={handleDelete}>Delete Project</button>;
}

export default DeleteWork;
