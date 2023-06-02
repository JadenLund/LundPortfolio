//useMemo
import { information } from "./Information";
import Border from "./Border";
import FadeRight from "./graphics/FadeRight";
import GradiantAppear from "./graphics/GradiantAppear";
import Test from "./test";
export default function About() {
  const { paragraphs } = information;
  return (
    <div class="font-roboto text-center pb-y">
      <div>
        <Border />
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
                >
                  <img src={link.image} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
