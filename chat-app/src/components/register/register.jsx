import register from './register.module.css'
import Input from './input-field'
import { useState } from 'react'


export default function Register(){

    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');


    return (
    <div className={register.container}>

        <div className={register.form}>
            <div className={register.input}>
            <Input
            label='Username'
            value= {username}
            setValue= {setUsername}/>
            </div>

            <div className={register.input}>
            <Input
            label='Password'
            value= {password}
            setValue= {setPassword}/>


            </div>

            <button className={register.submitButton}

            >Log in</button>
            

        </div>
    </div>
    
    )
}