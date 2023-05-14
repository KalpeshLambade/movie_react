import React, { useEffect, useState } from "react";
import "./CSS/style.css";
import { useNavigate } from "react-router-dom";

const ShowsData = require("./JSON/shows.json");
const Api_key ="c45a857c193f6302f2b5061c3b85e743";

const fetchurl = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`

const Index = () => {
  const route = useNavigate();
  const [shows, setShows] = useState();

  useEffect(() => {
    fetch(fetchurl)
        .then(res => res.json())
        .then(res => setShows(res.results));

  }, []);

  console.log(shows);

  return (
    <>
      <div id="index_page">
        <div className="display">
          <article className="index_article display">
            {shows &&
              shows.map((e, i) => (
                <div key={i} className="cursor" onClick={()=>{route(`/single/${e.id}`)}}>
                  <div className="index_article_top">
                    <img src ={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="logo" className="adj-img" />
                  </div>
                  <div className="index_article_bot display">
                    <p>{e.title}</p>
                    <p>{e.release_date}</p>
                    <p>{e.vote_average}</p>
                  </div>
                </div>
              ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default Index;
