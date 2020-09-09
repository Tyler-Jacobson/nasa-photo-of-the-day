import React from "react";
import "./Header.css";

export default function Header() {

    return (
        <div className="App">
            <div className="spacer">
                <nav>
                    <a href="app.js">Home</a>
                    <span> </span>
                    <a href="https://www.nasa.gov/multimedia/imagegallery/index.html">More Images</a>
                    <span> </span>
                    <a href="https://api.nasa.gov/#apod">API</a>
                </nav>
            </div>
      </div>
    )
}

