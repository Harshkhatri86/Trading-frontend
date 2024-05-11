import React from 'react';
import LoginPageImage from '../../assets/Trade-Login.png'
import Input from '../../component/Input/Input';

function Login() {
    const [password, setPassword] = React.useState<string>("")
    const passwordError = "";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return <div className='flex flex-row'>
        <img src={LoginPageImage} alt="" className='h-screen w-6/12' />
        <div className='w-6/12 gap-3 border border-gray-400 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='w-6/12 flex flex-col gap-5'>
                <h1 className='text-4xl font-semibold'>Get Started Now</h1>
                <Input type="text"
                    placeholder="UserName"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                />
                <Input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                />
            </form>
        </div>
    </div>
}

export default Login; 