import "./MangaCard.css";
import React from "react";
import MangaCard_Back from "./MangaCard_Back"


const flip_map = new Map();

export default function MangaCard({title, alt, chapters, image, genres, index, author}) {
    return (
        <button className={"Manga_Card_Border"} onClick={() => Flip(index)}>
            <div className={'flip_card_inner'}>
                <div className={'flip_card_front'}>
                    <img className={"covers"} src={image} alt={alt}/>
                    <div className="manga_title_chapters">
                        <h2>{title}</h2>
                        <p>{chapters[0]}</p>
                        <p>{chapters[1]}</p>
                        <p>{chapters[2]}</p>
                        <p>{chapters[3]}</p>
                        <p>{chapters[4]}</p>
                    </div>
                </div>

                <div className={'flip_card_back'}>
                    <div className={'cover_back'}>
                        <img className={"covers"} style={{filter:'blur(5px)'}} src={image} alt={alt}/>
                        <div className={'cover_back_text_container'}>
                            <p style={{textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff'}}>
                                Author - {author}
                            </p>
                            <p style={{textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff'}} className={'cover_back_text'}>
                                Genres - {genres[0]}, {genres[1]}
                            </p>
                            <p style={{textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff'}} className={'cover_back_text'}>
                                Views - 10.2M
                            </p>
                        </div>
                    </div>
                    <div className="manga_title_description">
                        <h2>{title}</h2>
                        <p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

function Flip(index) {
    var flip_inner = document.getElementsByClassName("flip_card_inner");

    if (flip_map.get(index) === undefined) {
        flip_map.set(index, false);
    }

    const flipped = flip_map.get(index);

    if (!flipped) flip_inner[index].style.transform = 'rotateY(180deg)';
    else flip_inner[index].style.transform = 'rotateY(0)';

    flip_map.set(index, !flipped);
}