import React from 'react';

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="/" className="brand-logo ml-3">Avaliação de Filmes</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/">Filmes</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                    </ul>
                </div>
            </nav>
    );
}
export default Header;