import React, { useState, useEffect }  from "react";
import "./App.css";
import Axios from "axios";

import Header from './Header'

function App() {

  const [image, setImage] = useState('')

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')//
    .then(res => {
      setImage(res.data.url)
    })
  }, [])

  const Image = ({ url }) => (
    <div className='image'>
      <img src={url} alt={'space'}/>
    </div>
  )
  
  return (
    <div className="App">
      <Header />
      <Image url={image}/>
    </div>
  );
}

export default App;
