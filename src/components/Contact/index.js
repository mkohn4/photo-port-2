import React, {useState} from 'react';


function ContactForm() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    /*function handleChange(e) {
        setFormState({...formState, name: e.target.value});
    }
    console.log(formState);*/

    function handleChange(e) {
        //handle changes for all input fields and update one at a time based on name attribute on html
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" defaultValue={email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" defaultValue={message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;