import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
    
const Survey = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
        
    const sendSurvey = (e) => {
        e.preventDefault();
        // When the user clicks the submit input in the form, 
        //we will navigate to the "/results" path
        navigate("/results");
    }
    return (
        <form onSubmit={ sendSurvey }>
        <label>Your Name:</label>
        <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
        <label>Your Comment:</label>
        <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
        <input type="submit" value="Submit Survey" />
        </form>
    );
}
// After creating the variable navigate, we will then be able to change our location to a route like /result with navigate("/result"). We can think of navigate like a list, one that will remember where our user has been. If we wanted to we can send a user back one step with navigate(-1) or forward with navigate(1).

// Here's what navigating back one would look like in our sendSurvey function above:

 //...  
    const sendSurvey = (e) => {
        e.preventDefault();
        // When the user clicks submit, they will return to the previous page they were on.
        navigate(-1);
    }  

 //...<br>