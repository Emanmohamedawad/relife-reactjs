import React from 'react';
import  styled  from 'styled-components';
import { motion } from "framer-motion";
import { useLocomotiveScroll } from 'react-locomotive-scroll';




const Section = styled.div`
min-height:100vh ;
width:100vw ;
margin:5rem auto ;
display: flex ;
flex-direction: column ;
justify-content: center ;
align-items: center ;
background-color:${props =>props.theme.body} ;
color:${props=>props.theme.text} ;
position: relative;
`

const LogoContainer = styled.div`
display: flex ;
flex-direction: column ;
justify-content: center ;
align-items: center ;
h1{
   font-size:${props =>props.theme.fontsxxxl} ;
   font-family:'kaushan script';

   @media (max-width: 48em){
   font-size: ${props => props.theme.fontsxxl};
   }
}
`
const Footercomponent =styled(motion.footer)`
width:80vw ;

@media (max-width: 48em){
   width:90vw ;
   }
ul{
   list-style:none ;
   display:flex ;
   justify-content: space-between ;
   align-items: center ;
   flex-wrap: wrap ;
   margin: 2rem ;
   margin-top: 4rem ;
   padding:0 1rem ;
   border-top: 1px solid ${props=>props.theme.text};
   border-bottom: 1px solid ${props=>props.theme.text};

   @media (max-width: 48em){
   justify-content: center ;
   }
}

li{
   padding:2rem ;
   font-size:${props=>props.theme.fontlg} ;
   text-transform:uppercase ;
   cursor: pointer;
   transition: all 0.3s ease ;

   &:hover{
      transform: scale(1.1) ;

   }

   @media (max-width: 48em){
   padding: 1rem ;
   font-size:${props=>props.theme.fontmd} ;
   }
}
`
const Bottom = styled.div`
padding: 0.5rem 0 ;
margin:0 4rem ;
font-size:${props=>props.theme.fontlg} ;

display:flex ;
justify-content: space-between ;
align-items: center ;

@media (max-width: 64em){
   flex-direction:column ;
   justify-content: center ;
   width:100% ;
   margin:0 ;
   span{
     
      transform:none !important ;
   }
}
@media (max-width: 48em){
   font-size:${props=>props.theme.fontmd} ;
}

`

const Footer = () => {
   const {scroll} = useLocomotiveScroll();

   const handelScroll =(id)=>{
      let elem = document.querySelector(id);

      scroll.scrollTo(elem,{
         offset:'-100',
         duration:'2000',
         easing:[0.25, 0.0 , 0.35 ,1.0]

      })
   }

   
  return (
    <Section>
      <LogoContainer>
         <h1 data-scroll data-scroll-speed="-1" >ReLife</h1>
      </LogoContainer>
      <Footercomponent 
      initial={{y:"-400px"}}
      whileInView={{y:0}}
      viewport={{once:false}}
      transition={{duration:1.5}}
      
      >
         <ul>
            <li onClick={()=> handelScroll('#home')}>Home</li>
            <li onClick={()=> handelScroll('.about')}>About</li>
            <li onClick={()=> handelScroll('#places')}>Places</li>
            <li onClick={()=> handelScroll('#works')}>Works</li>
            <li>Contact</li>
         </ul>
         <Bottom>
            <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" > &copy;All Right Jo Programmer.</span>
            <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >Made with &hearts; by Eman Mohamed
            </span>
         </Bottom>
      </Footercomponent>
    </Section>
  );
}

export default Footer;
