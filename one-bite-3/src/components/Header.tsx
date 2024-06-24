import '../css/Header.css';

const Header = (): JSX.Element => {
    return (
        <header className="header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </header>
    )
}

export default Header;