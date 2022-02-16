import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    //set state of initial form and destruct variables
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    //set isValid state
    const [errorMessage, setErrorMessage] = useState('');

    /*function handleChange(e) {
        setFormState({...formState, name: e.target.value});
    }
    console.log(formState);*/

    function handleChange(e) {
        //add email validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            //add validation for name and message to have inputs
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        console.log('Error Message', errorMessage);
        //if no errors found, setFormState with input values from user
        if (!errorMessage) {
        //handle changes for all input fields and update one at a time based on name attribute on html
        setFormState({...formState, [e.target.name]: e.target.value})
        }

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
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange}></textarea>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;