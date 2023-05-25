import React, { useState } from 'react'
import { sendEmail } from '../../utils/sendEmail'
import { Form } from 'react-bootstrap'

import { Input, TextArea, Button } from '../Core'


const ContactForm = ({ theme = 'dark', ...rest }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      sendEmail(formData);
    } catch (error) {
      console.error("Error executing async function:", error);
    }
  };
  
  return (
    <Form
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      {...rest}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="mt-4">
        <Input
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          name="name"
        />
      </div>
      <div className="mt-4">
        <Input
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          name="email"
        />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          name="subject"
        />
      </div>
      <div className="mt-4 ">
        <TextArea
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          required
          name="message"
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button onClick={handleSubmit} variant="primary" type="submit">
          SEND MESSAGE
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm
