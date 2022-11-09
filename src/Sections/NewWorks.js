import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useRef} from 'react';
import img1 from '../assets/Images/img1.jpg';
// import img2 from '../assets/Images/img2.jpg';
// import img3 from '../assets/Images/img3.jpg';
// import img4 from '../assets/Images/img4.jpg';
// import img5 from '../assets/Images/img5.jpg';
// import img6 from '../assets/Images/img6.jpg';
import img7 from '../assets/Images/img7.jpg';
import img8 from '../assets/Images/img8.jpg';

const Section = styled.section`
min-height: 100vh ;
width:100vw ;
margin: 0 auto ;

display: flex ;
justify-content: center ;
align-items: center ;
position: relative ;
/* background-color: blue ; */
`

const Overlay =styled.div`
position: absolute;
top:50% ;
left:50% ;
transform: translate(-50%,-50%) ;
width: 30vw ;
height: 90vh ;
/* background-color: aliceblue ; */
box-shadow:0 0 0 4vw ${props =>props.theme.text} ;
border: 3px solid ${props => props.theme.body} ;

z-index:11 ;


@media (max-width: 70em){
   width:40vw ;
   height:80vw ;
   }
   @media (max-width: 64em){
      width:50vw ;
      box-shadow:0 0 0 60vw ${props =>props.theme.text} ;
   }
   @media (max-width: 48em){
      width:60vw ;
   }
   @media (max-width: 30em){
      width:80vw ;
   height:60vw ;
   }
`
const Title = styled.h1`
font-size: ${props => props.theme.fontsxxxl};
font-family:'kaushan script';
font-weight:300;
text-shadow: 1px 1px 1px ${props => props.theme.text};
color: ${props => props.theme.body} ;
position: absolute ;
top:1rem ;
left: 5% ;
z-index:11 ;
margin-bottom:10px ;

@media (max-width: 64em){
   font-size: ${props => props.theme.fontsxxl};
   
   }
   @media (max-width: 48em){
      font-size: ${props => props.theme.fontxl};
    
   }
`

const Text = styled.div`
width:20% ;
font-size: ${props => props.theme.fontlg};
font-weight:300 ;
position: absolute ;
padding:2rem ;
top:0;
right:0 ;
z-index:11 ;
@media (max-width: 48em){
   display: none ;
}
`

const Container = styled.div`
position: absolute ;
top:0% ;
left:50% ;
transform: translate(-50%, 0) ;
width:25vw ;
height: auto ;

/* width: 65% ; */
display:flex ;
flex-direction: column ;
justify-content: center ;
align-items: center ;

@media (max-width: 64em){
   width:30vw ;
}
@media (max-width: 48em){
   width:40vw ;
}
@media (max-width: 30em){
   width:60vw ;
}


`
const Item =styled.div`

   display:flex ;
   flex-direction: column ;
   justify-content: center ;
   align-items: center ;
   margin: 5rem 0 ;
   img{
      width: 100% ;
      height: auto ;
      z-index:5 ;
   }
`
const Product =({img , title=''})=>{
   return(
      <Item
      >
         <img src={img} alt={title}></img>
         <h2>{title}</h2>
      </Item>
   )
}

const NewWorks = () => {

   gsap.registerPlugin(ScrollTrigger);
   const ref = useRef(null);

   const scrollingRef = useRef(null);


   useLayoutEffect(() => {

      let element = ref.current;
      let scrollingElement = scrollingRef.current;

      // let pinWarpWidth = scrollingElement.offsetWidth;

      let t1 = gsap.timeline(); 

      setTimeout(() => {
         t1.to(element,{
            scrollTrigger:{
               trigger:element,
               start:'top top',
               end: 'bottom+=100% top-=100%',
               scroller: '.App',
               scrub: true,
               pin: true,
               // markers: true,
            },
            // height:`${scrollingElement.scrollWidth}px`,
            ease: 'none',
         })
         // scrolling vertical
         t1.fromTo(scrollingElement,
            {
               y:'0',
            },
            
            {
               y:'-100%',
            scrollTrigger:{
               trigger:scrollingElement,
               start:'top top',
               end: 'bottom top',
               scroller: '.App',
               scrub: true,
               // pin: true,
               // markers: true,
            },
            // x: -pinWarpWidth,
            // ease: 'none',
         })

      ScrollTrigger.refresh();
      }, 1000);
      return() =>{
         t1.kill();
         ScrollTrigger.kill();
      };
   },[])

   return (
   <Section ref={ref} id="works">
      <Overlay/>
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >New Works</Title>

      <Container ref={scrollingRef}>
         <Product img={img1} title="New York"/>
         <Product img={img7} title="New York"/>
         <Product img={img8} title="New York"/>
         <Product img={img1} title="New York"/>
         <Product img={img7} title="New York"/>
         <Product img={img8} title="New York"/>
         <Product img={img7} title="New York"/>
         <Product img={img1} title="New York"/>

      </Container>

      <Text data-scroll  data-scroll-speed="-4">
      We are very dedicated to making our Realeasts. 
      We offer unique and creative places to the world. 
      We have a variety of styles, but for most people, all of the options are in the box. 
      We specialize in making things that make you happy.
      <br/><br/>
      We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people.
      </Text>
    </Section>
  );
}

export default NewWorks;
