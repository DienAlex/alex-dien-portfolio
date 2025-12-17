import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const hasError = {
      name: name === '',
      email: email === '',
      message: message === '',
    };

    setNameError(hasError.name);
    setEmailError(hasError.email);
    setMessageError(hasError.message);

    if (!hasError.name && !hasError.email && !hasError.message) {
      // EmailJS Setup Instructions:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Add an email service (e.g., Gmail)
      // 3. Create an email template with variables: {{from_name}}, {{reply_to}}, {{message}}
      // 4. In template settings, set "Send To" email to: adien25@cmc.edu
      // 5. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
      // 6. Replace the values below with your actual EmailJS credentials

      emailjs.sendForm(
        'service_6u8niwx',      // EmailJS service ID
        'template_hdy354j',     // Replace with your EmailJS template ID from dashboard
        form.current!,
        'bpQ3AKHJKfTNRXR9S'     // EmailJS public API key
      )
      .then(() => {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('Failed to send message. Please contact directly at adien25@cmc.edu');
      });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let’s collaborate and make it happen!</p>
          <Box
            component="form"
            ref={form}
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                name="from_name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                variant="outlined"
                InputProps={{
                  style: { color: '#000000', backgroundColor: '#ffffff' }
                }}
                InputLabelProps={{
                  style: { color: '#666666' }
                }}
              />
              <TextField
                required
                name="reply_to"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                variant="outlined"
                InputProps={{
                  style: { color: '#000000', backgroundColor: '#ffffff' }
                }}
                InputLabelProps={{
                  style: { color: '#666666' }
                }}
              />
            </div>
            <TextField
              required
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter a message' : ''}
              variant="outlined"
              InputProps={{
                style: { color: '#000000', backgroundColor: '#ffffff' }
              }}
              InputLabelProps={{
                style: { color: '#666666' }
              }}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              {submitted ? 'Sent!' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
