import '../css/button.css';

// Types
import { ButtonProps } from '../types';

const Button = ({ text, type, onClick }: ButtonProps): JSX.Element => {
    return (
        <button className={`btn btn_${type}`}
                onClick={onClick}>{text}</button>
    )
}

export default Button;