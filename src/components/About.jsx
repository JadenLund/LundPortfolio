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
          <div class="pt-z">
            <FadeRight>
              <h1 class="font-medium pt-y">{paragraph.title}</h1>
            </FadeRight>
            <FadeRight>{paragraph.paragraph}</FadeRight>

            <GradiantAppear>
              <div class="flex justify-content items-center pt-y justify-around">
                {paragraph.links.map((link) => (
                  <a
                    class="container flex justify-center items-center transition ease-in-out delay-50 hover:scale-105 duration-300"
                    href={link.link}
                    target="_blank"
                  >
                    {link.imageBack === undefined ? (
                      <img src={link.image} />
                    ) : (
                      <Test
                        image={link.image}
                        name={link.name}
                        imageBack={link.imageBack}
                      />
                    )}
                    {/* test */}
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
