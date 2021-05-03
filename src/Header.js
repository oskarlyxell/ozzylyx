import React from 'react'
import { Link } from 'react-router-dom';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Welcome to my portfolio!</h1>
                <h1>I'm Oskar Lyxell and works with</h1>
                <Typed 
                className="typed-text" 
                strings={["Web Design", "Web Development", "MSSQL Databases", "Microsoft ASP .NET CORE", "HTML and CSS", "JAVA"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>                    
                <div className="links">
                    <a href="https://www.linkedin.com/in/oskar-lyxell-899455161/" class="fa fa-linkedin"></a>
                    <a href="https://www.facebook.com/oskar.lyxell" class="fa fa-facebook"></a>
                </div>
                

            </div>
        </div>
    )
}

export default Header
