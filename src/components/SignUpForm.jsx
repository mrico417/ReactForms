import { useState } from 'react';

const signupAPI = "https://fsa-jwt-practice.herokuapp.com/signup";

export const SignUpForm =({ setAppToken }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log(username, password);

        try {
            const response = await fetch(signupAPI, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            setAppToken(result.token);
            //console.log("result", result);
            setUsername("");
            setPassword("");
        } catch (err) {
            setError(err.message);
            console.log(error);
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            <form
                onSubmit={handleSubmit}>
                <label>
                    username: <input
                        type="text"
                        id="username"
                        placeholder="username"
                        value={username}
                        onChange={(event) => { setUsername(event.target.value); }} />
                </label>
                <label>
                    password: <input
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value); }} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>


    );
};

