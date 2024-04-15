import { useState } from 'react';
import './App.css'
import { Authenticate } from './components/Authenticate';
import { SignUpForm } from './components/SignUpForm'

function App() {

  const [appToken,setAppToken] = useState("");

  return (
    <>
      {
        ( appToken === "" ?
          (
            <SignUpForm setAppToken={setAppToken} />
          ) :
          (
            <Authenticate appToken={appToken}/>
          )
        )
      }

      
    </>
  )
}

export default App;
