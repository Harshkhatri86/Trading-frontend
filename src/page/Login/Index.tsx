import React from "react";
import Button from "../../component/Button/Button";
import Login from "./Login";
import LoginPageImage from '../../assets/Trade-Login.png'
import Register from "./Register";


function LoginIndex() {

    const [toggleButton, settoggleButton] = React.useState<boolean>(true);

    return <div className='flex flex-row'>
        <img src={LoginPageImage} alt="" className='h-screen w-6/12' />
        <div className='w-6/12  gap-10 border border-gray-400 flex flex-col items-center justify-center overflow-y-scroll'>
            <h1 className='text-4xl font-semibold'>Get Started Now</h1>
            <div className="flex w-4/5 ">
                <Button title="SignUp" onClick={() => settoggleButton(false)} isPrimary={toggleButton ? false : true} />
                <Button title="SignIn" onClick={() => settoggleButton(true)} isPrimary={toggleButton ? true : false} />
            </div>
            {toggleButton && <Login />}
            {!toggleButton && <Register />}
        </div></div>
}
export default LoginIndex; 