import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
 const Hotel = () => {

  const photos =[
    {
     src:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
     src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  
  return (
    <div>
<Navbar/>
<Header type="list" />
<div className="hotelContainer">
  <div className="hotelWrapper">
    <button className="booknow">Book now!</button>
    <h1 className="hoteTitle">Grand Hotel</h1>
    <div className="hotelAddress">
      <FontAwesomeIcon icon={faLocationDot}/>
      <span> 123 Main St New Jersy</span>
    </div>
    <span className="hotelDistance"> 300m from centre of the city</span>
    <span className="hotelPriceHighlight"> Book a stay over $150 and get offer on taxis</span>
    <div className="hotelImages">
      {photos.map(photo => (
        <div className="hotelImgWrapper">
          <img src= {photo.src}  className="hotelImg" />
        </div>
      ))}
    </div>
    <div className="hotelDetails">
      <div className="hotelDetailTexts">
        <h1 className="hotelTitle">Stay in the heart of the City</h1>
        <p className="hotelDesc">
        The Hotel Grand is located in beautiful Monteverde, famous for its rare and gorgeous cloud forest and friendly community. The views of the Gulf of Nicoya from the hotel's 4,200 foot elevation are spectacular. Experience Hotel Fonda Vela's natural approach to life with style! Surrounded by beautiful tropical gardens, our buildings are an attractive part of the lush, tropical mountainside. The rooms are cozy, yet elegant, spacious and comfortable. 
        Each room is designed with the environment in mind. For example, large windows help to bring the outdoors inside.
        </p>
      </div>
      <div className="hotelDetailPrice">
        <h1>Perfect Hotel for a PEACEFUL Vacay!</h1>
        <span>Located in the heart of the city, this property has an excellent  location score of 9.5</span>
        <h2><b>$900 </b> (for a week)</h2>
        <button>Reserve now!</button>
      </div>
    </div>
  </div>
  <MailList/>
  <Footer/>
</div>
    </div>
  )
}
export default Hotel;