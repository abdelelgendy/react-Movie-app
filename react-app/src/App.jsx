import { useState } from 'react'
import './App.css'

const Card=({title})=>{
  return(
    <div className='card'>
      <h2>{title}</h2>
    </div>
  )
}

const App=()=>{

  const [] =useState()
  
  return(
    <div className='card-container'>    
      <Card title="starwars"  />
      <Card title="Avatar"/>
      <Card title="lion king"/>
    </div>

  )
}


export default App
