import Image  from './image';

function ProjectList({projects}) {
    
    return ( 
    <div className="cards">
      {projects.map((project) => (
        <Image project={project}/>
      ))}
    </div>
    )
  }

  export default ProjectList