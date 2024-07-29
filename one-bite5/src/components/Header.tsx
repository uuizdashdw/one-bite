import '../css/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/new"}>New Diary</Link>
                </li>
                <li>
                    <Link to={"/diary"}>Diaries</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;