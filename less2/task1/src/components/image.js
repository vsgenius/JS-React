function Image ({project}) {
  return (
    <div className='card'>
    <img className="image" key={project.category} src={project.img} alt=""></img>
    </div>
  )
}
export default Image;