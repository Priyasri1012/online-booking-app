import "./searchItem.css"

 const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="" className="siImg"></img>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubtitle">Studio Apartmnt with AC</span>
            <span className="siFeatures">1 bathroom, 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so book today!</span>
            
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span className="">Excellent</span>
              <button>
        8.9
              </button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$200</span>
                <span className="siTaxOp">Includes Taxes</span>
                <button className="siCheckbtn">See Availability</button>
            </div>
        </div>
    </div>
  )
}
export default SearchItem;