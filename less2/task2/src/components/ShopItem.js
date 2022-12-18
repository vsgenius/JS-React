function ShopItem ({item}) {
    const myStyle={
    };
    return (
        <div className="item" style={myStyle}>
            <img className = "item-image" src={item.img} alt ={item.name}></img>
            <h3>{item.name}</h3>
            <h6>{item.color}</h6>
            <h6>${item.price}</h6>
            <button className="itemButton">add cart</button>
    
        </div>
    )}
export default ShopItem;