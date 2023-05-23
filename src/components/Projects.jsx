import Carousel from "./ProjectCard";
import { projects } from "./testmap";

export default function TestContainer() {
  return (
    <div class="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <div class="max-w-lg col-span-1">
          <Carousel>{[...project.images.map((s) => <img src={s} />)]}</Carousel>
          <p class="box-border h-20 overflow-auto">{project.description}</p>
          <p>{project.extra}</p>
        </div>
      ))}
    </div>
  );
}
