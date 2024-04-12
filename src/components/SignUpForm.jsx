import { useState } from "react";

const signupAPI = "https://fsa-jwt-practice.herokuapp.com/signup"

export const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username,password);

        try {
            const response = await fetch(signupAPI,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"},
                body: JSON.stringify({username,password})
            });
            const result = await response.json();
            console.log("result",result);
        } catch (er) {
            setError(er);
            console.log(error);
        }
        
    }

     return (
        <>
            <h2>SignUp</h2>
            <form 
                onSubmit={handleSubmit}>
                <label>
                    username: <input 
                    type="text"
                    id="username"
                    placeholder="username"
                    value={username}
                    onChange={(event)=>{setUsername(event.target.value)}}/>
                </label>
                <label>
                    password: <input 
                    type="password" 
                    id="password" 
                    placeholder="password" 
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>


    )
};