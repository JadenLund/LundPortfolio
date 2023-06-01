import ProjectCard from "./ProjectCard";
import { projects } from "./testmap";

export default function TestContainer() {
  return (
    <div>
      <h1 class="text-center">Projects</h1>
      <div class="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div class=" col-span-1">
            <ProjectCard>
              {[...project.images.map((s) => <img src={s} />)]}
            </ProjectCard>
            <p class="box-border h-20 overflow-auto">{project.description}</p>
            <p>{project.extra}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
