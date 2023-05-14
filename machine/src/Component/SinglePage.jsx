import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const ShowData = require("./JSON/shows.json");
const Api_key = "c45a857c193f6302f2b5061c3b85e743";

const fetchurl = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`;

const SinglePage = () => {
  const data = useParams();
  const [show, setShows] = useState();

  // console.log(data);

  useEffect(() => {
    // setShows(ShowData.filter((obj)=> obj.id == data.id))
    fetch(fetchurl)
      .then((res) => res.json())
      .then(vibha => vibha.results)
      .then((json) => json.filter((obj) => obj.id === +data.id))
      .then((data) => setShows(data[0]));
  }, []);

  console.log(show);
  return <></>;
};

export default SinglePage;
