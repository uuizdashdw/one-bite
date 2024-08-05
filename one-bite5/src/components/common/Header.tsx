import '../../css/header.css';

// Types
import { HeaderProps } from '../../types';

const Header = ({ title, leftChild, rightChild }: HeaderProps): JSX.Element => {
    return (
        <header id="header">
            <ul>
                <li className='header_left'>
                    {leftChild}
                </li>
                <li className='header_center'>
                    {title}
                </li>
                <li className='header_right'>
                    {rightChild}
                </li>
            </ul>
        </header>
    )
}

export default Header;