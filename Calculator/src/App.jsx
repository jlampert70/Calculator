import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import List from './pages/List.jsx'


function App() {
  return (
    
    <div className=' bg-red-500  bottom-1/3 flex h-  flex-col w-screen items-center'>
      <List />
      <Navbar />
    </div>
  )
}

export default App

/*
<div className='flex flex-none h-5/6 flex-col scroll-smooth'>
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div>  
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div>  
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
      <div className=' place-self-center flex flex-row w-7/8 md-3'>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
      </div> 
    </div>
*/