import LogoImg from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={LogoImg} alt="logo" />
            <h1>React quiz</h1>
        </header>
    );
}