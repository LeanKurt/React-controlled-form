import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";



function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  }

  const EmailErrorMessage = () => {
     return (
      <p className="FieldError">Email is Invalid</p>
     );
  }

  const getIsFormValid = () => {
    // Implement this function
    return ( 
      firstName && 
      validateEmail(email) && 
      password.value.length >= 8 && 
      role !== "role" 
    ); 
  }
  const clearForm = (e) => {
    // Implement this function
    e.preventDefault();
     setFirstName("");
     setLastName("");
     setEmail({
      value : "",
      isType: null,
     });
     setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");

  };

  const handleSubmit = () => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstname" >
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" id ="firstname" value ={firstName} onChange={e => setFirstName(e.target.value)}/>
          </div>
          <div className="Field">
            <label htmlFor="lastname">Last name <sup>*</sup></label>
            <input placeholder="Last name" id ="lastname" value = {lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" id ="id" value={email} 
            onChange = {(e) => setEmail( e.target.value)}
             />
            {!validateEmail(email) ? (
               <EmailErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input 
            value={password.value} 
            type="password" 
             onChange={(e) => { 
            setPassword({ ...password, value: e.target.value }); 
            }} 
            onBlur={() => { 
            setPassword({ ...password, isTouched: true }); 
            }} 
           placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
           <PasswordErrorMessage /> 
          ) : null}      
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value ={role} onChange={e => setRole(e.target.value)}>
               <option value="role">Role</option> 
               <option value="individual">Individual</option> 
               <option value="business">Business</option> 
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App
