
function Toolbar({filters,selected,onSelectFilter}) {
    return (
        <div className="btnsFilter">
            {filters.map((filter) => (
      <button onClick={()=>onSelectFilter(filter)} className={filter===selected ? "btn" : "btn"}>{filter}</button>
            ))}
        </div>
    )
}
export default Toolbar;