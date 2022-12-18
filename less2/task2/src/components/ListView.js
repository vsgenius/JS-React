import ShopItem from "./ShopItem";

function ListView ({items}) {
    return (
        <div className="items">
        {items.map((item) => (
        <ShopItem item = {item}/>
      ))}
    </div>
    )

}
export default ListView;