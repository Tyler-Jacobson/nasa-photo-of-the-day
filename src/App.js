import React, { useState, useEffect }  from "react";
import "./App.css";
import Axios from "axios";


import Header from './Header'
import Structure from './Structure'

const today = new Date()


function App() {
  
  const [image, setImage] = useState('')

  useEffect(() => {
    Axios.get('')//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-9-10
    .then(res => {
      setImage(res.data.url)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function flipImage() {
    // This function serves the purpose of flipping to the next image to the right or left
    // The state for this function will live at the top of the react tree, but the Structure.js file needs to be able to change the current image by calling this function
    // As such, this function needs to be passed down through props
    

  }

  console.log(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
  return (
    <div className="App">
      <Header />
      <Structure url={image}/>
    </div>
  );
}

export default App;
