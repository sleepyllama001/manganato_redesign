import "./Bookdesc.css";
import Menu from "./components/Menu";

const Bookdesc = () => {

    return(
<div>
<Menu>
    </Menu>

    <div className="container">
        
        <div>buffer</div>
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
    </div>
</div>
)}

export default Bookdesc;