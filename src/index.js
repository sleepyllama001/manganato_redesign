import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

// Components
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MangaCard from "./components/MangaCard";

// Data
import mangaData from "./assets/MangaInfo.json";

// Pages
import Layout from "./Layout";
import Chapter from "./Chapter";
import Login from "./Login";
import NoPage from "./NoPage";
import Bookdesc from "./Bookdesc";
import {useState} from "react";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
mangaData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

export default function Appp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<App />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="chapter" element={<Chapter />} />
            <Route path="Bookdesc" element={<Bookdesc/>} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

function App() {
    return (
        <div className="App">
            <Menu />

            <div className="body">
                <div className="Top_Chapters_Box">
                    <div className="Top_Chapters">
                        <a id="trending_tag" href="../public/trending.html"><h2>Trending this Week</h2></a>
                    </div>
                </div>

                <div className="title_chapter_description_box">
                    <a className="cover" href="../public/manga_page.html">
                        <img className="manga_poster_img" src="img/manga_covers/chainsaw_man.jpg" alt="chainsaw man vol 1. cover"/>
                    </a>

                    <div className="horizontal_div">
                        <div className="padding_left_arrow">
                            <div className="arrow_box">
                                <img className="arrow" src="img/icons/left_arrow.png" alt="left_arrow"/>
                            </div>
                        </div>

                        <div className="manga_info">
                            <div className="padding">
                                <div className="Border">
                                    <div className="Title">
                                        <h1>Chainsaw Man</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Chapter">
                                    <div className="Chapter">
                                        <h2>Chapter 110</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Description">
                                    <div className="Description">
                                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
                                            tortor. Imperdiet
                                            nulla malesuada pellentesque elit eget gravida cum. Amet venenatis urna
                                            cursus eget nunc
                                            scelerisque viverra.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="horizontal_div">
                                <div className="padding">
                                    <div className="Horror_Border">
                                        <div className="Horror">
                                            <p>Horror</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="padding">
                                    <div className="Comedy_Border">
                                        <div className="Comedy">
                                            <p>Comedy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding_manga_cover">
                            <div className="border_vol_cover">
                                <img className="manga_cover" src="img/manga_covers/chainsaw_man.jpg" alt="Chainsaw Man Vol. 1 Cover"/>
                            </div>
                        </div>

                        <div className="padding_right_arrow">
                            <div className="arrow_box">
                                <img className="arrow" src="img/icons/right_arrow.png" alt="right_arrow"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="Search">
                    <div className="positioning_search">
                        <div className="Search_Bar_Box">
                            <img src="img/icons/search_icon.png" className="search_icon" alt="Search_Icon"/>
                                <div className="Search_Manga_box">
                                    <h2 className="Search_Manga">Search Manga</h2>
                                </div>
                        </div>
                    </div>

                    <div className="positioning_filter">
                        <div className="filter_box">
                            <img id="Funnel" src="img/icons/funnel.png" alt="Funnel icon"/>
                                <p>Filter</p>
                                <img id="Down-Arrow" src="img/icons/down_arrow.png" alt="Down Arrow icon"/>
                        </div>
                    </div>
                </div>

                <div className="Latest">
                    <div className="latest_updates_box">
                        <a id="recent_tag" href="../public/recently_updated.html"><h2 id="latest-update-text">Recently
                            Updated</h2></a>
                    </div>

                    <div id={"Recently_Updated_Manga"} style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        {mangaData.map((item, _) => (
                            <div style={{paddingRight: "2vw", paddingBottom: "3vh"}}>
                                <MangaCard title={item.title} alt={item.alt} chapters={item.chapters} image={item.image}/>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const foot = ReactDOM.createRoot(document.getElementById("footer"))
root.render(<Appp /> );
foot.render(<Footer />);