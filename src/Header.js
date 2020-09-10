import React from "react";
import "./Header.css";
import styled, { keyframes } from "styled-components";

const ATag = styled.a`
  color: black;
  font-size: 1.5rem;
  border-radius: 2rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 50%;
  background-color: lightblue;
`;

export default function Header() {
  return (
    <div className="App">
      <div className="spacer">
        <nav>
          <ATag href="app.js">Home</ATag>
          <span> </span>
          <ATag href="https://www.nasa.gov/multimedia/imagegallery/index.html">
            More Images
          </ATag>
          <span> </span>
          <ATag href="https://api.nasa.gov/#apod">API</ATag>
        </nav>
      </div>
    </div>
  );
}
