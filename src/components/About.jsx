import Rectangle from "../assets/Rectangle.png";
//useMemo
//understand when a component renders

import { information } from "./Information";
export default function About() {
  const { paragraphs, socials, certificates, examples } = information;
  return (
    <div>
      <div class="container grid grid-flow-row">
        <h2>{paragraphs[0].title}</h2>
        <p>{paragraphs[0].paragraph}</p>
        <a
          href="https://1drv.ms/b/s!Ak-4NIJkGoKahMoI3aR55YQp1MUDbw?e=CYEJKy"
          target="_blank"
        >
          Learn More about Me
        </a>
        <div class="grid grid-cols-4">
          {socials.map((social) => (
            <a href={social.link} target="_blank">
              <img src={Rectangle} />
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div class="container grid grid-flow-ro">
        <h2>{paragraphs[1].title}</h2>
        <p className="text-sm font-medium text-gray-900">
          {paragraphs[1].paragraph}
        </p>

        <div class="grid grid-cols-2">
          {certificates.map((certificate) => (
            <a href={certificate.link} target="_blank">
              <img src={certificate.image} />
            </a>
          ))}
        </div>
      </div>

      <div class="container grid grid-flow-ro">
        <h2>{paragraphs[2].title}</h2>
        <p>{paragraphs[2].paragraph} </p>
        <div class="grid grid-cols-3">
          {examples.map((example) => (
            <img src={example.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
