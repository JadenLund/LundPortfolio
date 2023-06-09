import { useState, useEffect } from "react";

export default function ProjectCard({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div class="overflow-hidden relative rounded-t-lg">
      <div
        class="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {[
        ["<", prev],
        [">", next],
      ].map((arrow, direction) => (
        <div class="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={direction}>{arrow}</button>
        </div>
      ))}

      <div class="absolute bottom-4 right-0 left-0">
        <div class="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              class={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
