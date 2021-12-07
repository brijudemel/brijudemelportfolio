import React from 'react'
import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Email,Phone,LocationOn } from '@mui/icons-material';
import { ThemeContext } from '../../provider/ThemeProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");
  const {darkMode,toggle} = useContext(ThemeContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ydh577j",
        "template_hkwhrmp",
        formRef.current,
        "user_8mwBB0P6hQUqFVmjL0gfP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setMessage("");
          setSubject("");
          setEmail("");
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <Phone fontSize="large" sx={{marginRight:20}} />
              +91 7738403064
            </div>
            <div className="c-info-item">
              <Email fontSize="large" sx={{marginRight:20}} />
              brijudemel@gmail.com
            </div>
            <div className="c-info-item">
              <LocationOn fontSize="large" sx={{marginRight:20}} />
              Chennai, TN, India.
            </div>
          </div>
          <div className="c-social">
              <a style={{color:darkMode?"white":"black"}} href="https://www.facebook.com/briju.demel.3/" target="_blank" rel="noreferrer"><FacebookIcon fontSize="small" sx={{marginRight:4}} /></a>
              <a style={{color:darkMode?"white":"black"}} href="https://twitter.com/BrijuDemel" target="_blank" rel="noreferrer"><TwitterIcon fontSize="small" sx={{marginRight:4}} /></a>
              <a style={{color:darkMode?"white":"black"}} href="https://www.linkedin.com/in/briju-demel-1074a21a7/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="small" sx={{marginRight:4}} /></a>
              <a style={{color:darkMode?"white":"black"}} href="https://www.instagram.com/brijudemel/" target="_blank" rel="noreferrer"><InstagramIcon fontSize="small" sx={{marginRight:4}} /></a>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Wanna get in touch?</b> Just fill it out below  👇 .
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <TextField color="warning" value={name} onChange={(e)=>setName(e.target.value)} InputLabelProps={{style: { color:darkMode&&'#fff' }}} sx={{input:{color:darkMode&&"white"},backgroundColor: darkMode && "#333",marginTop: 2.5,marginBottom:2.5 ,width:"50%"}} id="user_name" name="user_name" label="Name" variant="standard"/>
            <br/>
            <TextField color="warning" value={subject} onChange={(e)=>setSubject(e.target.value)} InputLabelProps={{style: { color:darkMode&&'#fff' }}} sx={{input:{color:darkMode&&"white"},backgroundColor: darkMode && "#333",marginTop: 2.5,marginBottom:2.5 ,width:"50%"}} id="user_subject" name="user_subject" label="Subject" variant="standard" />
            <br/>
            <TextField color="warning" value={email} onChange={(e)=>setEmail(e.target.value)} InputLabelProps={{style: { color:darkMode&&'#fff' }}} sx={{input:{color:darkMode&&"white"},backgroundColor: darkMode && "#333",marginTop: 2.5,marginBottom:2.5 ,width:"50%"}} id="user_email" name="user_email" label="Email" variant="standard" />
            <br/>
            <TextField
              InputLabelProps={{style: { color:darkMode&&'#fff' }}}
              color="warning"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              id="message"
              name="message"
              label="Message"
              multiline
              rows={5}
              variant="filled"
              sx={{input:{color:darkMode&&"white"},marginTop: 2.5,marginBottom:2.5,width:"50%"}}
            />
            <br/>
            <Button sx={{marginTop: 2.5,marginBottom:2.5}} type="submit" color="warning" variant="contained">Submit</Button>
            <br/>
            {done && "Thank you for your submission"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;