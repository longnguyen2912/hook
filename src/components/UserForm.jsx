import React, {useState} from "react";

const UserForm = (props) => {
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmed,setConfirmed] = useState("");
    
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="firstname">First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name: </label>
                    <input id="lastname" type="text" onChange={(e) => setLastName(e.target.value)}  value={lastname} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label htmlFor="confirmed">Confirm Password: </label>
                    <input id="confirmed" type="password" onChange={(e) => setConfirmed(e.target.value)} value={confirmed} />
                </div>
            </form> 
            <div>
                <h3>Your form data:</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmed}</p>
            </div>
        </div>
    );
}
export default UserForm;