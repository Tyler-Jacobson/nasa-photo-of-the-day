import React, { useState, useEffect }  from "react";
import "./App.css";
import Axios from "axios";
import styled, { keyframes } from 'styled-components'

import Header from './Header'

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

  const Image = ({ url }) => (
    <div className='image'>
      <img src={url} alt={'space'}/>
    </div>
  )
  console.log(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
  return (
    <div className="App">
      <Header />
      <Image url={image}/>
    </div>
  );
}

export default App;
