//useMemo
//understand when a component renders

import { information } from "./Information";
export default function About() {
  const { paragraphs } = information;

  return (
    <div class="font-roboto text-center ">
      <div>
        {paragraphs.map((paragraph) => (
          <div class="pt-y">
            <h1 class="font-medium pt-y">{paragraph.title}</h1>
            <h5 class="">{paragraph.paragraph}</h5>
            <div class="flex gap-x pt-y">
              {paragraph.links.map((link) => (
                <a
                  class="container mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  href={link.link}
                  target="_blank"
                ></a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
