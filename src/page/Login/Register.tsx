import React from 'react';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';

export interface RegisterDataProps{
    userName : string; 
    password : string ; 
    email : string ; 
    phoneNo : string ; 
    checkbox : boolean ; 
}

function Register() {
    const passwordError = "";
    const [registerFormData , setRegisterFormdata] = React.useState<RegisterDataProps>({
        userName :"" , 
        password :"" , 
        email: "" , 
        phoneNo :"", 
        checkbox: false
    })


    const handleSubmit = (e: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("handleSubmit")
    }

    const handleRegisterData = ( key : string , value : string | boolean) =>{
        setRegisterFormdata({...registerFormData , [key] : value}) ; 
    }

    return <form onSubmit={handleSubmit} className='w-4/5 flex flex-col gap-6'>
        <Input type="text"
            placeholder="UserName"
            value={registerFormData.userName}
            name='userName'
            onChange={(e) => handleRegisterData('userName', e.target.value)}
            error={passwordError}
        />
        <Input type="password"
            placeholder="Password"
            name='password'
            value={registerFormData.password}
            onChange={(e) => handleRegisterData('password', e.target.value)}
            error={passwordError}
        />
        <Input type="text"
            placeholder="Email"
            name='email'
            value={registerFormData.email}
            onChange={(e) => handleRegisterData('email', e.target.value)}
            error={passwordError}
        />
        <Input type="text"
            placeholder="Phone No"
            name='phoneNo'
            value={registerFormData.phoneNo}
            onChange={(e) => handleRegisterData('phoneNo', e.target.value)}
            error={passwordError}
        />
        <span><input type='checkbox' onClick={() => handleRegisterData('checkbox' , true)} /><span>&nbsp; I agree to terms and policy</span></span>
        <Button title="Sign In" isPrimary={true} onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)} />
    </form>
}

export default Register; 