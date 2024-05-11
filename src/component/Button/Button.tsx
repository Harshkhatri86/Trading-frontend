import React from "react";
import './Button.css'

interface ButtonProps {
    title: string | React.ReactNode;
    isPrimary: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ title, isPrimary, onClick }: ButtonProps) {

    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const [focus, setFocus] = React.useState<boolean>()

    React.useEffect(() => {
        if ((isPrimary || focus) && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [isPrimary, focus])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
    }

    return <div>
        <button ref={buttonRef} onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            className={`w-full border text-center h-12 rounded ${isPrimary ? "Primary" : "Secondary"} ${focus ? "Focused" : ""}`}
            style={{ backgroundColor: isPrimary ? "#114388" : "" }}
            onClick={handleClick}
            type={isPrimary ? "submit" : "button"}
        >
            {title}
        </button>
    </div>
}

export default Button