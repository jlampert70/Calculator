import React from 'react'

function Card({name='anonymous', post='no post'}) {
  
  return (
    <div className=' flex flex-none flex-col bg-green-500 rounded-lg shadow-lg items-center place-self-center w-1/2 h-full'>
      <h1 className='text-3xl '>Hi, my name is {name}</h1>
      <p className=''>{post}</p>
    </div>
  )
}

export default Card