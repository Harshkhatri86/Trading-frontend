import React from 'react';
import '../../styles/componentCSS/Input.css'

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    autoFocus?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}


const Input = ({ type, placeholder, value, onChange, error, autoFocus, startIcon, endIcon }: InputProps) => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return <div>
        <div >
            {startIcon && <div className="icon start-icon">{startIcon}</div>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ borderColor: error ? 'red' : ''}}
                ref={inputRef}
                className='w-full h-15 p-3 InputBox'
            />
            {endIcon && <div className="icon end-icon">{endIcon}</div>}
            {error && <span className="error-message">{error}</span>}
        </div>
    </div>
}

export default Input; 