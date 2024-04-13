import { useState } from "react";

const authenticateAPI = "https://fsa-jwt-practice.herokuapp.com/authenticate";

export const Authenticate = ({ appToken }) => {

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [resultDataFromAuthentication, setResultDataFromAuthentication] = useState(null);

    async function handleClick() {
        

        try {
            
            const response = await fetch(authenticateAPI,
            {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${appToken}`,
                }
            });

            const result = await response.json();

            if (result.message === 'jwt must be provided' ) {
                setSuccessMessage("Need to Sign Up First!");
            } else {
                setSuccessMessage(result.message);
                //const { data } = result
                setResultDataFromAuthentication(result.data.username)
            }

            console.log(result)

        } catch (err) {
            setError(err.message);
        }

    }

    return (
        <>
            <div>
                <h2>Authenticate</h2>  
                { error && (<p>{error}</p>) }
                { successMessage && (<p>{successMessage}</p>) }  
                { resultDataFromAuthentication && (<p>Hello, {resultDataFromAuthentication} !!!</p>)}         
                <button
                    onClick={handleClick}>Authenticate Token</button>
            </div>
        </>
        
    )
};