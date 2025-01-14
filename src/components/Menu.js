import "./Menu.css";
import React from "react";

export default function Menu() {
    return (
        <div className="menu">
            <div className="logo">
                <a className="horizontal_logo" href="../../public/index.html">
                    <embed className="M" type="image/png" src="../../public/img/icons/manganato_logo.png"/>
                        <div className="Manga"><h1>Manga</h1></div>
                        <div className="Nato"><h1>Nato</h1></div>
                </a>

            </div>
            <div className="menu_bar">
                <div className="border_box">
                    <ul className="horizontal">
                        <li><a id="Home" href="../../public/index.html">Home</a></li>
                        <li><a id="Recent" href="recently_updated.html">Recently Updated</a></li>
                    </ul>
                </div>
            </div>

            <div className="border">
                <a id="login" href="login_register.html">
                    <div className="login_register">
                        <h2>Login</h2>
                    </div>
                </a>
            </div>

            <div className="border">
                <a id="register" href="login_register.html">
                    <div className="login_register">
                        <h2>Register</h2>
                    </div>
                </a>
            </div>

            <div className="padding">
                <div className="border_night">
                    <a id="night-mode" href="night_mode.html">
                        <div className="night_mode">
                            <embed className="moon" type="image/png" src="../../public/img/icons/crescent.png"/>
                                <h2>Night Mode</h2>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}