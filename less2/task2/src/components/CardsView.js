import ShopCard from "./ShopCard";

function CardsView({cards}) {
return (
    <div className="cards">
        {cards.map((card) => (
        <ShopCard card = {card}/>
      ))}
    </div>
)
}

export default CardsView;