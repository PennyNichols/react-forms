import React, { useState} from 'react'

const FormsValidation = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <form className="card card-body shadow m-5">
      <h3 className="text-center"> Login</h3>
      <div className="mb-3">
        <label htmlFor="email"> Email</label>
        <input type="text" className={ `form-control ${emailError && 'border border-danger'}` }
          name="email" id="email"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
        />
        { emailError && <small className="text-danger"> Invalid Email </small> }
      </div>

      <div className="mb-3">
        <label htmlFor="password"> Password</label>
        <input type="text" className={ `form-control ${passwordError && 'border border-danger'}` }
          name="password" id="password"
          onChange={ (e) => setPassword(e.target.value) }
          value={ password }
        />
        { passwordError && <small className="text-danger"> Invalid Password </small> }
      </div>

      <div className="text-center">
        <button className="btn btn-warning"> Login</button>
      </div>
    </form>
  )
}

export default FormsValidation