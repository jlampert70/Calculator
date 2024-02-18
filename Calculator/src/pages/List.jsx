import React from 'react'
import Card from '../components/Card.jsx'

function List() {
  return (
    <div className=' bg-blue-500 w-1/2 h-5/6  scroll-smooth grid grid-cols-1 items-center gap-3 '>
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
        <Card name='Jeffrey' post='Cool Person'/>
        <Card name='Robert'/>
        <Card />
    </div>
  )
}

export default List