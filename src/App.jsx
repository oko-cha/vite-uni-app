import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import Home from './components/home/Home'
import section from './components/sectionn/sectionn'


export default function App() {
  // const [count, setCount] = useState(0)

  return(
  <> <Navbar/>
     <Home/>
     <Footer/> 
     <section/>
  </>
    
  );
}
