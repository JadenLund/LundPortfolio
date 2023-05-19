import { projects } from "./testmap";
import Carousel from "./Carousel";
import { useState } from "react";
export default function ProjectCard() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) =>
      current === 0 ? projects[0].images[0].length - 1 : current - 1
    );
  const next = () =>
    setCurrent((current) =>
      current === projects[0].images[0].length - 1 ? 0 : current + 1
    );
  return (
    <div>
      {projects.map((project) => (
        <div class="overflow-hidden relative">
          <div
            style={{ transform: `translateX(-${current * 100}%)` }}
            class="flex transition-transdorm ease-out duration-500"
          >
            {project.images.map((image) => (
              <img src={image} />
            ))}
          </div>
          <div class="absolute inset-0 items-center justify-between p-4">
            <button
              onClick={prev}
              class="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:br-white"
            >
              {"<"}
            </button>
            <button
              onClick={next}
              class="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:br-white"
            >
              {">"}
            </button>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {project.images.map((_, i) => (
                <div
                  className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${current === i ? "p-2" : "bg-opacity-50"}
            `}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
