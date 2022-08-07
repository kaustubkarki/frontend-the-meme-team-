import React from 'react';
import { Article,Brand,CTA,Navbar,Feature } from './components';
import { Footer , Blog , Possibility , List, Myapp } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className='gradiant__bg , shape'>
            <Navbar />
            <List />
        </div> 
        <Brand />
        <Myapp />
        <Feature />  
        <Possibility />
        <CTA />       
        <Blog />
        <Footer />
    </div>
  )
}

export default App;