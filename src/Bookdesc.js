import "./Bookdesc.css";
import "./App.css"
import Menu from "./components/Menu";

const Bookdesc = () => {

    return(
<div>
    <div className="menu_container">
<Menu>
    </Menu>
    </div>


    <div className="container">
        
        <div></div>
        <div className="subcontainer_book">
            <div className="button_grid">
            <a className="bookmark_button">Bookmark?</a>
            <a className="status_button">Status: Ongoing</a>
            </div>
            <img src="/img/manga_covers/chainsaw_man.jpg" className="book_pic"></img>
            <p className="book_text">Description: Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on fighting against devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim the devils stolen from her.</p>
            <ul className="book_categories">
                <li>Author: Tatsumaki Fujimoto</li>
                <li>Categories: Comedy, Drama, Action, Thriller</li>
                <li>Status: Ongoing</li>
            </ul>
            <div className="subsubcontainer_book">
                <img src="/img/icons/star_rating.jpeg" className="book_stars"></img>
            </div>

        </div>

        <div className="sidebar_manga">
        <div className="horizontal_divs">
                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/mob_psycho_cover.png" alt="Mob Psycho 100 Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Mob Psycho 100</h2>
                                    <p>Chapter 125</p>
                                    <p>Chapter 124</p>
                                    <p>Chapter 123</p>
                                </div>
                        </div>
                        </div>
                        <div className="horizontal_divs">
                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/mob_psycho_cover.png" alt="Mob Psycho 100 Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Mob Psycho 100</h2>
                                    <p>Chapter 125</p>
                                    <p>Chapter 124</p>
                                    <p>Chapter 123</p>
                                </div>
                        </div>
                        </div>
                        <div className="horizontal_divs">
                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/mob_psycho_cover.png" alt="Mob Psycho 100 Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Mob Psycho 100</h2>
                                    <p>Chapter 125</p>
                                    <p>Chapter 124</p>
                                    <p>Chapter 123</p>
                                </div>
                        </div>
                        </div>
                        </div>
    </div>

</div>
)}

export default Bookdesc;