import React, { useState } from 'react'

const MoreForms = () => {
    const [firstName, setFirstName ] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [inputs, setInputs] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleError = (e) =>{

        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
        //
        // switch(e.target.id){
        //     case 'fn':
        //         setFirstName(e.target.value);
        //         if(e.target.value.length < 2 && e.target.value !== ''){
        //             setFirstNameError('First Name must be at least 2 characters');
        //         }
        //         else{
        //             setFirstNameError('');
        //         }
        //         break;
        //     case 'ln':
        //         setLastName(e.target.value);
        //         if(e.target.value.length < 2 && e.target.value !== ''){
        //             setLastNameError('Last Name must be at least 2 characters');
        //         }
        //         else{
        //             setLastNameError('');
        //         }
        //         break;
        //     case 'email':
        //         setEmail(e.target.value);
        //         if(e.target.value.length < 2 && e.target.value !== ''){
        //             setEmailError('Email must be at least 2 characters');
        //         }
        //         else{
        //             setEmailError('');
        //         }
        //         break;
        //     case 'pw':
        //         setPassword(e.target.value);
        //         if(e.target.value.length < 8 && e.target.value !== ''){
        //             setPasswordError('Password must be at least 8 characters');
        //         }
        //         else{
        //             setPasswordError('');
        //         }
        //         break;
        //     case 'cpw':
        //         setConfirmPassword(e.target.value);
        //         console.log(password)
        //         if(e.target.value != password && e.target.value !== ''){
        //             setConfirmPasswordError('Passwords must match');
        //         }
        //         else{
        //             setConfirmPasswordError('');
        //         }
        //         break;
        //     default:
        //         console.log('Why we here?')
        //}
    }

    return (
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleError } value={inputs.firstName} name='firstName'/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleError } value={inputs.lastName} name='lastName'/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleError } value={ inputs.email } name='email'/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handleError } value={ inputs.password } name='password'/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleError } value={ inputs.confirmPassword } name='confirmPassword'/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
        </form>
    )
}

export default MoreForms