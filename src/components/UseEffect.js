import React from 'react'
import { useState, useEffect } from 'react'

export default function UsEff() {
  const [resourcesType, setResourcesType] = useState('posts')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourcesType}`)
    .then(response => response.json())
    .then(json => console.log(json))
  }, [resourcesType])
  
  return (
    <div >
    <button onClick={() => setResourcesType('posts')}>Post</button>
    <button onClick={() => setResourcesType('users')}>Users</button>
    <button onClick={() => setResourcesType('comments')}>Comments</button>

  <h1>{resourcesType}</h1>
    </div>
  )
}

task => width off the window