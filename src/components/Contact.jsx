import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/contact', formData)
            .then(response => {
                setIsSubmitted(true);
                setError(null);
            })
            .catch(error => {
                setError('Something went wrong. Please try again later.');
                setIsSubmitted(false);
            });
    };

    return (
        <section className="contact-sec" id='contact'>
            <div className="contact-con">
                <h2>GET IN TOUCH</h2>
                {isSubmitted ? (
                    <p>Thank you for getting in touch! We will get back to you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className='first-row'>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
                {error && <p className="error">{error}</p>}
            </div>
        </section>
    );
};

export default Contact;
