import React from 'react'
import './App.css'
import Footer from './Footer';
import image from './images/sandy.jpg';
import smeg from './images/Smeg-Logo.png'
import motley from './images/The-Motley.png'
import event from './images/event.png'
import door from './images/doordash.png'
import bus from './images/bus.jpg' 

interface prop{
 message : string[];
}
const App = () => {
  return (
    <>
    <div className="container">
      <br />
     <p className="logo">Hub-<span>Spot</span></p>
     <div className="center">
      <a href="">Home</a>
     <a href="">Blog</a>
      <a href="">Contact</a>
      <a href="">Pricing <select name="" id=""><option value=""></option></select></a>
     </div>
        <button className="btc">Get a demo</button>
    </div>
    <div className="hero">
    <img src={image} alt="" className="image" />
      <br />
      <p className="big">GROW BETTER WITH <br />HUB-<span className="animate">SPOT</span>.</p>
      <p className="flow">Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one customer platform that grows with your business and helping your organization in maintaining your data and scrutinizing data to help customers make decision.</p>
      <div className="flx">
        <button className="btn1" onClick={(onclick) => alert("please keep on, i am still cooking !!") }>Get Started</button>
        <p className="text">Get a demo of our premium software, or get started with free tools.</p>
      </div>
    </div> 
    
  <p className="txt">124,000+ customers in over 120 countries grow their businesses with HubSpot
</p>
<section className="marque">
  <img src={door} alt="" className="img" />
<img src={event} alt="" className="img" />
<img src={smeg} alt="" className="img" />
<img src={motley} alt="" className="img" />
</section>

<section className="sect">
  <br />
  <p className="h1">Our features and How it works ?</p>
  <div className="flax">
    <div className="box">
      <p className="h2">Marketing Hub :</p>
      <p className="tcc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis rem distinctio voluptate magni vitae corrupti. Ducimus sapiente, hic reprehenderit voluptas accusantium, eveniet voluptate nam obcaecati repudiandae itaque cupiditate necessitatibus.
      </p>
    </div>
    <div className="box">
      <p className="h2">Sales Hub :</p>
      <p className="tcc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quisquam nisi excepturi perspiciatis ullam aspernatur corporis? Temporibus voluptates facere consequatur in perferendis ea sapiente tenetur tempora unde. Obcaecati, repudiandae dolorem!</p>
    </div>
    <div className="box">
    <p className="h2">Customer's Hub :</p>
    <p className="tcc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempora quis itaque et ipsa soluta explicabo earum saepe. Expedita optio voluptatibus quaerat omnis ipsa corporis illum, repellendus quidem sit non!</p>
    </div>
  </div>
</section>  
<p className="pro">
  Our Goal & Vision
</p>

  <section>

   <img src={bus} alt="" className="img1" /> 
    <p className="goal">Our Goal & Vision is to broaden and help users to make decidion and help them in capitivating 
    on their productivity and intergration of Seamless and Borderless, Paving way for Sucess and Summarizing for development of business Entity and Visualizing appropriate measures for companies, startups and brands..</p>
  </section>

    </>
  )
}
 export default App