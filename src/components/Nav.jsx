import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  /**
   * Navbar scroll effect
   */
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <nav className={`${show ? "nav nav__black" : "nav"}`}>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      <input
        type="text"
        value={searchValue}
        placeholder="영화를 검색해주세요"
        onChange={handleChange}
        className="nav__input"
      />

      <img
        alt="User Avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avatar"
      />
    </nav>
  );
}
