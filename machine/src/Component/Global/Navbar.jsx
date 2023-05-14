import React, { useEffect, useState } from "react";
import "../CSS/style.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const route = useNavigate();
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    let dataFromLS = JSON.parse(localStorage.getItem("T_currentUser"));
    if (dataFromLS) {
      setCurrentData(dataFromLS);
    }
  }, []);

  // console.log(currentData);

  const Logout = () => {
    localStorage.removeItem("T_currentUser");
    window.location.reload();
  }

  return (
    <>
      <nav>
        <div className="display">
          <div className="nav_left display">
            <div className="nav_logo">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
                className="adj-img"
              />
            </div>
            <div>Movie</div>
            <div>TVShows</div>
            <div>People</div>
            <div>More</div>
          </div>
          <div className="nav_right display">
            <div>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="border">EN</div>
            {currentData ? <div onClick={()=> {Logout()}} className="cursor">Logout</div> : <div onClick={()=> {route('/login')}}>Login</div>}
            {currentData ? (
              <div>{currentData.username}</div>
            ) : (
              <div>Join IDBM</div>
            )}

            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
