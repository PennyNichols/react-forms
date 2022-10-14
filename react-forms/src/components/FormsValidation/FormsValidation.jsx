import React, { useState} from 'react'

const FormsValidation = ({ onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [emailError, setEmailError] = useState('Email Field is required !');
  // const [passwordError, setPasswordError] = useState(true);

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const passwordError = (password === '' || password.length < 5) && passwordTouched;
  const emailError = (email === '' && emailTouched)
    ? 'Email Field is required!'
    : (!email.includes('@') && emailTouched)
    ? 'Invalid Email Format'
      : null;
  
  const isFormValid = !passwordError && !emailError
  const emailHandler = (e) => { 
    const enteredEmail = e.target.value; 
    setEmail(enteredEmail);
    setEmailTouched(true);
  }

  const passwordHandler = (e) => { 
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setPasswordTouched(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin();
  }

  return (
    <form className="card card-body shadow m-5" onSubmit={submitHandler}>
      <h3 className="text-center"> Login</h3>
      <div className="mb-3">
        <label htmlFor="email"> Email</label>
        <input type="text" className={ `form-control ${emailError && 'border border-danger'}` }
          name="email" id="email"
          onChange={ emailHandler }
          onBlur={ ()=> setEmailTouched(true)}
          value={ email }
        />
        { emailError && <small className="text-danger"> { emailError} </small> }
      </div>

      <div className="mb-3">
        <label htmlFor="password"> Password</label>
        <input type="text" className={ `form-control ${passwordError&& 'border border-danger'}` }
          name="password" id="password"
          onChange={ passwordHandler }
          onBlur={ ()=> setPasswordTouched(true)}
          value={ password }
        />
        { passwordError && <small className="text-danger"> Invalid Password </small> }
      </div>

      <div className="text-center">
        <button className="btn btn-warning" disabled={ !isFormValid}> Login</button>
      </div>
    </form>
  )
}

export default FormsValidation