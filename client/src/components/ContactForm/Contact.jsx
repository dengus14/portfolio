import React, { useState, useEffect } from "react"
import axios from "axios";
import './Contact.css'
import { toast } from "react-toastify";

const ContactForm = props =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        try{
            const response = await axios.post('http://localhost:4000/api/contact', formData);
            toast.success("Message sent!")
        }catch (error) {
            toast.error("Failed to send message.")
            console.log(error)
        }
    };



    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Form</h1>


        <form onSubmit={handleSubmit}>

            <label htmlFor='name'></label>
            <input 
                type='text' 
                name="name" 
                value = {formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
            /> 

            <label htmlFor='email'></label>
            <input 
                type='text' 
                name="email" 
                placeholder="Enter your email"
                value = {formData.email}
                onChange={handleChange}
            />

            <label htmlFor='subject'></label>
            <input 
                type='text' 
                name="subject" 
                value = {formData.subject}
                placeholder="Enter subject"
                onChange={handleChange}
            />

            <label htmlFor='message'></label>
            <textarea
                name="message" 
                placeholder="Enter your message"
                value = {formData.message}
                onChange={handleChange}
            />

            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default ContactForm;