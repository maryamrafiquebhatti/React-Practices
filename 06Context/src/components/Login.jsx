import React from 'react'
import {useState , userContext} from 'react'
import UserContext from '../context/userContext'

function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = userContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }
     

    return(
        <div>
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username' />
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password' />
            <button>Submit</button>
        </div>
    )
}
export default Login