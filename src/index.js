import ReactDOM from "react-dom/client";
import React, {Component} from "react";
import {HashRouter, Routes, Route, RouterProvider, createBrowserRouter, BrowserRouter, Link} from "react-router-dom";

import "./index.css"

// Components
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MangaCard from "./components/MangaCard";
import TrendingSlideShow from "./components/TrendingSlideShow"
import GenreButton from "./components/Genre_Button"

// Data
import mangaData from "./assets/MangaInfo.json";
import genres from "./assets/Genres.json";

// Pages
import Chapter from "./Chapter";
import Bookdesc from "./Bookdesc";
import Trending from "./Trending";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
mangaData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

export default function Appp() {
    return (
      <HashRouter>
        <Link to='/'>a</Link>
        <Link to="/Trending">b</Link>
        <Routes>
           
            {/* <Route index Component={<App />} />
            <Route path="/manganato_redesign/App" Component={<App />} />
            <Route path="/manganato_redesign/chapter" Component={<Chapter />} />
            <Route path="/manganato_redesign/Bookdesc" Component={<Bookdesc/>} />
            <Route path="/manganato_redesign/Trending" Component={<Trending/>} /> */}
            
            <Route path="/" element={<Chapter />} />
            {/* <Route exact path="/chapter" element={<Chapter />} /> */}
            {/* <Route path="/eirik64/manganato_redesignBookdesc" element={<Bookdesc/>} /> */}
            <Route path="/trending" element={<Trending/>} />
            
           
        </Routes>
      </HashRouter>
     ///Users/robby/cs1300/ghpages_manga/manganato_redesign/src/index.js
    );
  }

  /*BELOW WORKS KINDA KEEP FOR NOW */

//   export default function Appp() {
//     return (
//       <BrowserRouter>
//         <Routes>
           
//             {/* <Route index Component={<App />} />
//             <Route path="/manganato_redesign/App" Component={<App />} />
//             <Route path="/manganato_redesign/chapter" Component={<Chapter />} />
//             <Route path="/manganato_redesign/Bookdesc" Component={<Bookdesc/>} />
//             <Route path="/manganato_redesign/Trending" Component={<Trending/>} /> */}
//             <Route index element={<App />} />
//             <Route path="/eirik64/manganato_redesign" element={<App />} />
//             <Route path="chapter" element={<Chapter />} />
//             <Route path="/eirik64/manganato_redesignBookdesc" element={<Bookdesc/>} />
//             <Route path="/eirik64/manganato_redesign/Trending" element={<Trending/>} />
           
//         </Routes>
//       </BrowserRouter>
     
//     );
//   }


// const router = createBrowserRouter([
//     {
//         path: process.env.PUBLIC_URL,
//         element: <App />,
//     },
//     {
//         path: process.env.PUBLIC_URL + "Trending",
//         element: <Trending />,
//     },
//     {
//         path: process.env.PUBLIC_URL + "chapter",
//         element: <Chapter />,
//     },
//     {
//         path: process.env.PUBLIC_URL + "Bookdesc",
//         element: <Bookdesc />,
//     },
// ]);

function App() {
    return (
        <div className="App">
            <Menu />

            <div className="body">
                <div className="Top_Chapters_Box">
                    <div className="Top_Chapters">
                        <a id="trending_tag" href={process.env.PUBLIC_URL + "/Trending"}><h2>Trending this Week</h2></a>
                    </div>
                </div>

                <TrendingSlideShow />

                <div className="Search">
                    <div className="positioning_search">
                        <div className="Search_Bar_Box">
                            <img src="img/icons/search_icon.png" className="search_icon" alt="Search_Icon"/>
                            <div className="Search_Manga_box">
                                <input type="text" id="search_input" placeholder={'Search Manga'}/>
                            </div>
                        </div>
                    </div>

                    <div className="positioning_filter">
                        <button className="filter_box" onClick={filterDropDown}>
                            <img id="Funnel" src="img/icons/funnel.png" alt="Funnel icon"/>
                            <p>Filter</p>
                            <img id="Down-Arrow" src="img/icons/down_arrow.png" alt="Down Arrow icon"/>
                        </button>
                    </div>

                    <div id={'filter_options'}>
                        <div className={'filters'} style={{display:'none', flexDirection:'row', flexWrap:'wrap'}}>
                            {genres.map((item, _) => (
                                <GenreButton genre={item.genre} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Latest">
                    <div className="latest_updates_box">
                        <a id="recent_tag" href={process.env.PUBLIC_URL + "/Trending"}><h2 id="latest-update-text">Recently
                            Updated</h2></a>
                    </div>

                    <div id={"Recently_Updated_Manga"} style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:'space-between'}}>
                        {mangaData.map((item, index) => (
                            <div style={{paddingRight: "2vw", paddingBottom: "3vh"}}>
                                <MangaCard title={item.title} alt={item.alt} chapters={item.chapters}
                                           image={item.image} author={item.author} genres={item.genres} index={index}/>
                            </div>

                        ))}
                    </div>

                    <div style={{display:'flex', justifyContent:'center'}}>
                        <a id={'more_btn'} href={process.env.PUBLIC_URL + '/Trending'} style={{textDecoration:'none'}}>
                            <p>More ></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function filterDropDown() {
    var filterOpts = document.getElementsByClassName("filters");

    if (filterOpts[0].style.display === 'flex') {
        console.log("flex");
        filterOpts[0].style.display = 'none';
    }

    else if (filterOpts[0].style.display === 'none') {
        console.log("none");
        filterOpts[0].style.display = 'flex';
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const foot = ReactDOM.createRoot(document.getElementById("footer"));
// root.render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );
root.render(<Appp />);
foot.render(<Footer />);
