import React from "react";
import NavBar from "../components/NavBar";
import NavSpace from "../components/NavSpace";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <NavBar />
      <NavSpace />
      <div className="notfoundcontent">
        <h1 className="notfound">Page Not Found :(</h1>
        <Link className="home-link" to={"/"}>
          Go Back
        </Link>
      </div>
    </>
  );
};
