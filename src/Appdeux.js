import "./App.css";
import Menu from "./components/Menu";

const Appdeux = () => {
    return (
        <div className="App">
            <Menu />

            <div className="body">
                <div className="Top_Chapters_Box">
                    <div className="Top_Chapters">
                        
                    </div>
                </div>

                <div className="title_chapter_description_box">
                    <a className="cover" href="manga_page.html">
                        <img className="manga_poster_img" src="/img/manga_covers/chainsaw_man.jpg" alt="chainsaw man vol 1. cover"/>
                    </a>

                    <div className="horizontal_div">
                        <div className="padding_left_arrow">
                            <div className="arrow_box">
                                <img className="arrow" src="/img/icons/left_arrow.png" alt="left_arrow"/>
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
                                <img className="manga_cover" src="/img/manga_covers/chainsaw_man.jpg" alt="Chainsaw Man Vol. 1 Cover"/>
                            </div>
                        </div>

                        <div className="padding_right_arrow">
                            <div className="arrow_box">
                                <img className="arrow" src="/img/icons/right_arrow.png" alt="right_arrow"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="Search">
                    <div className="positioning_search">
                        <div className="Search_Bar_Box">
                            <img src="/img/icons/search_icon.png" className="search_icon" alt="Search_Icon"/>
                                <div className="Search_Manga_box">
                                    <h2 className="Search_Manga">Search Manga</h2>
                                </div>

                        </div>
                    </div>

                    <div className="positioning_filter">
                        <div className="filter_box">
                            <img id="Funnel" src="/img/icons/funnel.png" alt="Funnel icon"/>
                                <p>Filter</p>
                                <img id="Down-Arrow" src="/img/icons/down_arrow.png" alt="Down Arrow icon"/>
                        </div>
                    </div>
                </div>

                <div className="Latest">
                    <div className="latest_updates_box">
                        <a id="recent_tag" href="recently_updated.html"><h2 id="latest-update-text">Recently
                            Updated</h2></a>
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

                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/jjk_cover.png" alt="Jujutsu Kaisen Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Jujutsu Kaisen</h2>
                                    <p>Chapter 156</p>
                                    <p>Chapter 155</p>
                                    <p>Chapter 154</p>
                                </div>
                        </div>

                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/haikyuu.jpg" alt="Haikyuu Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Haikyuu</h2>
                                    <p>Chapter 312</p>
                                    <p>Chapter 311</p>
                                    <p>Chapter 310</p>
                                </div>
                        </div>
                    </div>

                    <div className="horizontal_divs">
                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/onepiece_cover.jpeg" alt="One Piece Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>One Piece</h2>
                                    <p>Chapter 1062</p>
                                    <p>Chapter 1061</p>
                                    <p>Chapter 1060</p>
                                </div>
                        </div>

                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/bakuman_cover.jpeg" alt="Jujutsu Kaisen Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Bakuman</h2>
                                    <p>Chapter 156</p>
                                    <p>Chapter 155</p>
                                    <p>Chapter 154</p>
                                </div>
                        </div>

                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/demon_slayer_cover.jpeg" alt="Haikyuu Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Demon Slayer</h2>
                                    <p>Chapter 312</p>
                                    <p>Chapter 311</p>
                                    <p>Chapter 310</p>
                                </div>
                        </div>
                    </div>

                    <div className="horizontal_divs">
                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/naruto_cover" alt="Mob Psycho 100 Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Naruto</h2>
                                    <p>Chapter 125</p>
                                    <p>Chapter 124</p>
                                    <p>Chapter 123</p>
                                </div>
                        </div>

                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/trigun_cover.jpeg" alt="Jujutsu Kaisen Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Trigun</h2>
                                    <p>Chapter 156</p>
                                    <p>Chapter 155</p>
                                    <p>Chapter 154</p>
                                </div>
                        </div>

                        <div className="Manga_Card_Border">
                            <img className="covers" src="/img/manga_covers/noragami_cover.jpeg" alt="Haikyuu Vol 1. Cover"/>
                                <div className="manga_title_chapters">
                                    <h2>Noragami</h2>
                                    <p>Chapter 312</p>
                                    <p>Chapter 311</p>
                                    <p>Chapter 310</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appdeux;