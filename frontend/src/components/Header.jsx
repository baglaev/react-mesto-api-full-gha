import React from 'react';
import logoHeader from '../images/logo_header.svg';
import { useLocation, useNavigate, Link} from 'react-router-dom';

function Header({email, setIsLoggedIn}) {
    const location = useLocation();
    const navigate = useNavigate();

    function signOut() {
        localStorage.removeItem("jwt");
        navigate("/signin");
        setIsLoggedIn(false);
      }

    return(
        <header className="header">
            <img src={logoHeader} alt="логотип Mesto" className="header__logo"/>
            {location.pathname === "/signin" && (
                <Link className="header__link" to="/signup">Регистрация</Link>
            )}
            {location.pathname === "/signup" && (
                <Link className="header__link" to="/signin">Вход</Link>
            )}
            {location.pathname === "/" && (
                <div className="header__about">
                    <p className="header__email">{email}</p>
                    <Link className="header__sign-out" to="/signin" onClick={signOut}>Выйти</Link>
                </div>
      )}

        </header>
    );
}

export default Header;