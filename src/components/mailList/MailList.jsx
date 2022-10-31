import "./mailList.css"

 const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save your Time & Money!</h1>
        <span className="mailDesc"> Sign up and we'll send the best deals for you!</span>
        <div className="mailContainer">
            <input type="text" placeholder="Your Mail Id">
            </input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default MailList;
