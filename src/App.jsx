import React from 'react'
import { StoriesContainer } from './containers/StoriesContainer'
import './styles/index.css'

export const App = () => {
  return (
    <>
      <p className='text-blue-400 block text-center mb-4 text-4xl'>News</p>
      <StoriesContainer/> 
    </>
  )
}
