import React from "react";
import "./home.css";
import  Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured";
import  PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
</link>
</link>
</link>



class Home extends React.Component{
  render(){
    return (
    <div>
       <Navbar> </Navbar>
       <Header></Header>
    
     <div className="homeContainer">
     <Featured/>
     <h1 className="homeTitle">Browse by Property type</h1>
     <PropertyList/>
     <h1 className="homeTitle">Homes loved by Guests</h1>
     <FeaturedProperties/>
     <MailList/>
     <Footer/>
     </div>
     </div>
   
    );
  };
}
export default Home;