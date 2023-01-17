import "./Menu.css";
import React from "react";
import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Creates the Nav bar! Includes the Manganato logo, Home,
// Recently Updated, Trending, Login, Register, and Night Mode Buttons
export default function Menu() {
    const [loginOpen, setLoginOpen] = useState(false);

    function openLogin() {
        setLoginOpen(true);
    }

    function closeLogin() {
        setLoginOpen(false)
    }

    function afterOpenLogin() {}

    const [registerOpen, setRegisterOpen] = useState(false);

    function openRegister() {
        setRegisterOpen(true);
    }

    function closeRegister() {
        setRegisterOpen(false)
    }

    function afterRegister() {}

    return (
        <div className="menu">
            <div className="logo">
                <a className="horizontal_logo" href="../../public/index.html">
                    <embed className="M" type={"image/png"} src={"img/icons/manganato_logo.png"}/>
                        <div className="Manga"><h1>Manga</h1></div>
                        <div className="Nato"><h1>Nato</h1></div>
                </a>

            </div>
            <div className="menu_bar">
                <div className="border_box">
                    <ul className="horizontal">
                        <li><a id="Home" href="../../public/index.html">Home</a></li>
                        <li><a id="Recent" href="recently_updated.html">Recently Updated</a></li>
                        <li><a id="Trending" href="trending.html">Trending</a></li>
                    </ul>
                </div>
            </div>

            <div className="border">
                <button id="login" onClick={openLogin}>
                    <div className="login_register">
                        <h2>Login</h2>
                    </div>
                </button>
                <Modal
                    isOpen={loginOpen}
                    onAfterOpen={afterOpenLogin}
                    onRequestClose={closeLogin}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <div className={"ModalContent"}>
                        <button className={"close"} onClick={closeLogin}>
                <span aria-hidden="true">
                  &times;
                </span>
                        </button>
                        <h1 className={"Heading"}>Log In</h1>
                    </div>
                </Modal>
            </div>

            <div className="border">
                <button id="register" onClick={openRegister}>
                    <div className="login_register">
                        <h2>Register</h2>
                    </div>
                </button>
                <Modal
                    isOpen={registerOpen}
                    onAfterOpen={afterRegister}
                    onRequestClose={closeRegister}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <div className={"ModalContent"}>
                        <button className={"close"} onClick={closeRegister}>
                <span aria-hidden="true">
                  &times;
                </span>
                        </button>
                        <h1 className={"Heading"}>Register</h1>
                    </div>
                </Modal>
            </div>

            <div className="padding">
                <div className="border_night">
                    <a id="night-mode" href="../../public/index.html">
                        <div className="night_mode">
                            <embed className="moon" type="image/png" src={"img/icons/crescent.png"}/>
                                <h2>Night Mode</h2>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}