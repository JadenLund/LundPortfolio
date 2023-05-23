//useMemo
//understand when a component renders
import { information } from "./Information";
import Border from "./Border";
import FadeRight from "./graphics/FadeRight";
import GradiantAppear from "./graphics/GradiantAppear";
export default function About() {
  const { paragraphs } = information;

  return (
    <div class="font-roboto text-center pb-y">
      <div>
        <Border />
        {paragraphs.map((paragraph) => (
          <div class="pt-z">
            <FadeRight>
              <h1 class="font-medium pt-y">{paragraph.title}</h1>
            </FadeRight>
            <FadeRight>{paragraph.paragraph}</FadeRight>

            <GradiantAppear>
              <div class="flex gap-x pt-y">
                {paragraph.links.map((link) => (
                  <a
                    class="container mx-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
                    href={link.link}
                    target="_blank"
                  >
                    <img src={link.image} />
                  </a>
                ))}
              </div>
            </GradiantAppear>
          </div>
        ))}
      </div>
    </div>
  );
}
