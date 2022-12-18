function ShopCard ({card}) {
const myStyle={
    backgroundImage: 
"url("+card.img+")",
    backgroundRepeat: 'no-repeat',
};
return (
    <div className="card" style={myStyle}>
        <h1>{card.name}</h1>
        <h6>{card.color}</h6>
        <div className="cardFooter">
        <h6>${card.price}</h6>
        <button className="cardButton">add cart</button>
        </div>

    </div>
)
}
export default ShopCard;