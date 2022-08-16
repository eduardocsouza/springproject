import './styles.css';
import logo from '../../assets/banner.svg';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="logo-da-empresa" />
        <h1>ReactSpring</h1>
        <p>
          Desenvolvido por<a href="https://www.instagram.com/" target="_blank"> Eduardo</a>
        </p>
      </div>
    </header>
  );
}
