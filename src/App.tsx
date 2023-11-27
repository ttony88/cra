import React from 'react';
import './App.css';
import Rating from './Components/Rating';
import Accordion from './Components/Accordion';

function App() {

  return (
    <div>
    <TitleApp title='This is Component'/>  
    <TitleApp title='Title 2'/>  
	  <Rating value={3}/>
	  <Accordion title='menu' collapsed={false}/>
	  <Accordion title='list' collapsed={true}/>
    <Rating value={4}/>
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
