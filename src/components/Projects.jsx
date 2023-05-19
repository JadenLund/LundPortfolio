import Carousel from "./ProjectCard";
import { projects } from "./testmap";

export default function TestContainer() {
  return (
    <div class="max-w-xs">
      {projects.map((project) => (
        <div>
          <Carousel>{[...project.images.map((s) => <img src={s} />)]}</Carousel>
        </div>
      ))}
    </div>
  );
}
