
import mongoose from 'mongoose'; // Use default import


const { connect, Schema, model, connection } = mongoose;

import cors from 'cors';
import bodyParser from 'body-parser';

const corsHandler = cors({ origin: '*' });
const bodyParserHandler = bodyParser.json();

// MongoDB Connection Setup (Ensure a single connection)
const connectionString = process.env.CONNECTION_STRING;
if (connection.readyState === 0) {
    connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Failed to connect to MongoDB', err));
}

// Define Project Schema
const ProjectSchema = new Schema({
    workMockup: { type: String, required: true },
    workTitle: { type: String, required: true },
    workDesc: String,
    workLink: { type: String, required: true }
});

const Project = model('Project', ProjectSchema);

// Main handler
export default async function handler(req, res) {
    // Middleware handling
    await new Promise((resolve, reject) => {
        corsHandler(req, res, (result) => (result instanceof Error ? reject(result) : resolve(result)));
    });
    await new Promise((resolve, reject) => {
        bodyParserHandler(req, res, (result) => (result instanceof Error ? reject(result) : resolve(result)));
    });

    try {
        switch (req.method) {
            case 'GET':
                const projects = await Project.find();
                return res.status(200).json(projects);

            case 'POST':
                const { workMockup, workTitle, workDesc, workLink } = req.body;
                if (!workMockup || !workTitle || !workLink) {
                    return res.status(400).json({ error: 'Missing required fields' });
                }
                const newProject = new Project({ workMockup, workTitle, workDesc, workLink });
                const savedProject = await newProject.save();
                return res.status(201).json(savedProject);

            case 'PUT':
                const { id, ...updateData } = req.body;
                if (!id) return res.status(400).json({ error: 'Project ID is required for updating' });
                const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
                if (!updatedProject) return res.status(404).json({ error: 'Project not found' });
                return res.status(200).json(updatedProject);

            case 'DELETE':
                const { id: deleteId } = req.body;
                if (!deleteId) return res.status(400).json({ error: 'Project ID is required for deletion' });
                const deletedProject = await Project.findByIdAndDelete(deleteId);
                if (!deletedProject) return res.status(404).json({ error: 'Project not found' });
                return res.status(200).json({ message: 'Project deleted successfully' });

            default:
                return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
