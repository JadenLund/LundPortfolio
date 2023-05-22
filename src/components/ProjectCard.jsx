import { projects } from "./testmap";
export default function ProjectCard() {
  return (
    <div>
      //add in to a new project to test
      {projects.map((project) => (
        <div>
          <h1>{project.title}</h1>
          {project.images.map((image) => (
            <img src={image} />
          ))}
          <h3>{project.description}</h3>
        </div>
      ))}
    </div>
  );
}
