//useMemo
//understand when a component renders
import { information } from "./Information";
import FadeRight from "./animations/FadeRight";
import GradiantAppear from "./animations/GradiantAppear";
export default function About() {
  const { paragraphs } = information;

  return (
    <div class="font-roboto text-center ">
      <div>
        {paragraphs.map((paragraph) => (
          <div class="pt-y">
            <FadeRight>
              <h1 class="font-medium pt-y">{paragraph.title}</h1>
            </FadeRight>
            <FadeRight>
              <h5 class="">{paragraph.paragraph}</h5>{" "}
            </FadeRight>

            <GradiantAppear>
              {" "}
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
            </GradiantAppear>
          </div>
        ))}
      </div>
    </div>
  );
}
