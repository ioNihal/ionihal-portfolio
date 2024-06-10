// /api/contact.js
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize the cors middleware
const corsHandler = cors({ origin: '*' });

// Initialize the body-parser middleware
const bodyParserHandler = bodyParser.json();

// MongoDB connection logic (consider using environment variables for your connection string)
const connectionString = process.env.CONNECTION_STRING;
connect(connectionString);

// Schema
const ContactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = model('Contact', ContactSchema);

// The main handler function
export default async function handler(req, res) {
    // Run the middleware
    await new Promise((resolve, reject) => {
        corsHandler(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });

    await new Promise((resolve, reject) => {
        bodyParserHandler(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });

    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Create a new contact instance
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    // Save the new contact
    try {
        const contact = await newContact.save();
        return res.status(200).json(contact);
    } catch (err) {
        return res.status(500).json({ error: 'Error saving contact information' });
    }
}
