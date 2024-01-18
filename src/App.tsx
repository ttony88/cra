import React from 'react';
import './App.css';
import Rating from './Components/Rating';
import Accordion from './Components/Accordion';
import { OnOff } from './Components/OnOff/OnOff';

function App() {

  return (
    <div>
      <TitleApp title='This is Component'/>  
      <TitleApp title='Title 2'/>
      <Accordion title='menu' />
      <Accordion title='list' />
      <Rating />
      <OnOff />
    </div>
  )
}

type TitleAppPropsType = {
  title: string
}

function TitleApp(props: TitleAppPropsType) {

  return(
    <h1>{props.title}</h1>
  )
}

export default App;
