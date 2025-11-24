import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
const arr=[1,2,3]
const obj={uname:"JLO",age:55}
const clickBtn ="Visit ME";

  return (
   <>
   <div  className='text-6xl bg-green-400 mb-4'>Hello World</div>
    <Card  username={arr[0]} btnText={clickBtn}  />
    <Card  username={obj.uname} />
    <Card  username="Anthony"/>
   </>
  )
}

export default App
