import React from 'react'

const Body = props => {

    const { url } = props

    const Image = ({ url }) => (
        <div className='image'>
          <img src={url} alt={'space'}/>
        </div>
      )
}

export default Body