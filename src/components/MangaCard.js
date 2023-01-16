import "./MangaCard.css";
import React from "react";

export default function MangaCard({title, alt, chapters, image}) {
    return (
        <div className={"Manga_Card_Border"}>
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
    )
}