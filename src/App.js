
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobleStyle from './Styles/GlobaleStyle';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { dark } from './Styles/Themes';
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './Sections/Home';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About';
import Places from './Components/Places';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';
import Banners from './Sections/Banners';
import NewWorks from './Sections/NewWorks';
import Footer from './Sections/Footer';
import Loader from './Components/Loader';
import {useState ,useEffect} from "react";

function App() {
  const containerRef = useRef(null);

  const [loaded , setloaded]= useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setloaded(true);
    }, 3000);

  }, [])
  return (
    <>
      <GlobleStyle />
      <ThemeProvider theme={dark}>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
              smartphone:{
                smooth:true,
              },
              tablet:{
                smooth:true,
              }
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
          {loaded ? null : <Loader/>}
          </AnimatePresence>
          
          <ScrollTriggerProxy/>
          <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
              <Home/>
              <Banners/>
              <About/>
              <Places/>
              <NewWorks/>
              <Footer/>
              
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
