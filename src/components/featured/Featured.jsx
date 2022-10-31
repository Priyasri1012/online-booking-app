
import "./featured.css"
const Featured = () => {
  return (
    <div className="featured">

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1549893072-4bc678117f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="featuredImg"></img>
        <div className="featuredTitles">
            <h1>Italy</h1>
            <h2>113 properties</h2>
        </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1577931683033-1059552104e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" className="featuredImg"></img>
        <div className="featuredTitles">
            <h1>Malaysia</h1>
            <h2>113 properties</h2>
        </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="featuredImg"></img>
        <div className="featuredTitles">
            <h1>Bali</h1>
            <h2>113 properties</h2>
        </div>
        </div>

    </div>
    

  )
}
export default Featured;
