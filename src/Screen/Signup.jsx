import React, { useState } from 'react'
import { signupUser } from '../Config/firebase'

export default function Signup() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signupAcc = () => {
        const signup = signupUser (email, password)
        // console.log('signup',signup)
    }
    return (
        <div>
            <div>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" />
            </div>

            <div>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" />
            </div>
            <button onClick={signupAcc}>Signup</button>
        </div>
    )
}
