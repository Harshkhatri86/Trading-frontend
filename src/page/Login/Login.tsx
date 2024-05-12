import { useState } from 'react';
import Input from '../../component/Input/Input'; // Assuming the correct path to your Input component
import Button from '../../component/Button/Button'; // Assuming the correct path to your Button component
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e : any) => {
        const { name, value } = e.target;

        // Check if the username contains whitespaces
        const hasWhitespace = /\s/.test(value);
        if (name === 'userName' && hasWhitespace) {
            setFormErrors({ ...formErrors, [name]: 'Username cannot contain whitespaces' });
        } else {
            setFormErrors({ ...formErrors, [name]: '' });
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Validate form fields
        let isValid = true;
        const newErrors = { ...formErrors };

        if (formData.userName.trim() === '') {
            newErrors.userName = 'Username is required';
            isValid = false;
        }

        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            isValid = false;
        }
        

        setFormErrors(newErrors);

        if (isValid) {
            axios.post(`${BASE_URL}/v1/auth/login`, formData, {})
                .then((response) => {
                    console.log(response);
                    navigate('/')
                    sessionStorage.setItem("UserData", JSON.stringify(response.data.data))
                })
                .catch((error: any) => {
                    console.log(`Error while Logging ${error}`)
                })
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-4/5 flex flex-col gap-6">
            <Input
                type="text"
                name="userName"
                placeholder="Username"
                value={formData.userName}
                onChange={handleChange}
                error={formErrors.userName}
                autoFocus
            />
            <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors.password}
            />
            <Button title="Sign In" isPrimary onClick={handleSubmit} />
        </form>
    );
}

export default LoginForm;
