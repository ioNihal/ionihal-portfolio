import express from 'express';
import { connect, Schema, model } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

// Database Connection
const connectionString = process.env.CONNECTION_STRING;
connect(connectionString)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Schema
const ContactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = model('Contact', ContactSchema);

// Routes
app.post('/api/contact', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    newContact.save()
        .then(contact => res.json(contact))
        .catch(err => res.status(500).json({ error: 'Error saving contact information' }));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
