import {createBrowserRouter } from 'react-router-dom' ; 
import App from './App';
import LoginIndex from './page/Login/Index';

export const router = createBrowserRouter([
    {
        path : '/', 
        element : <App/>,
        children : [

        ]
    }, {
        path: '/login', 
        element : <LoginIndex/>
    }
]) 