import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

// Components
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MangaCard from "./components/MangaCard";
import TrendingSlideShow from "./components/TrendingSlideShow"

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
            <Route index element={<App />} />
            <Route path="chapter" element={<Chapter />} />
            <Route path="Bookdesc" element={<Bookdesc/>} />
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

                <TrendingSlideShow />

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