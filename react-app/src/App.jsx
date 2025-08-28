import { useState } from 'react'
import './App.css'

const Card=({title})=>{

  const [hasLiked, setHasLiked] =useState(false);


  return(
    <div className='card'>
      <h2>{title}</h2>

      <button onClick={()=>setHasLiked(!hasLiked)}>
       {hasLiked ? '❤️' : '🤍'} 
      </button>
    </div>
  )
}

const App=()=>{
  
  return(
    <div className='card-container'>    
      <Card title="starwars"  />
      <Card title="Avatar"/>
      <Card title="lion king"/>
    </div>

  )
}


export default App
