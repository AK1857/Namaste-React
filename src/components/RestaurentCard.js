
  const RestaurantCard=(props)=>{
    console.log("props",props)
    let restaurant=props.restaurant.info;

    console.log("restaurant.badgesV2.cloudinaryImageId",restaurant.cloudinaryImageId)
    return(<div className="res-card">
          <div >
            <img  className="res-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`} />
          </div>
          <h3>{restaurant.name}</h3>
          <h5>{restaurant.cuisines.join(",")}</h5>
          <h5>Rating: 4.3</h5>
          <h5>Time: 35 min</h5>
         

    </div>)
  }

  export default RestaurantCard;