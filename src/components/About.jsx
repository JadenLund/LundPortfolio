import Rectangle from "../assets/Rectangle.png";
//useMemo
//understand when a component renders

import { information } from "./Information";
export default function About() {
  const { socials, certificates, examples } = information;
  console.log("socials", socials);
  return (
    <div>
      <div>
        <h2>I am actively seeking a UI/UX designer and developer position.</h2>
        <p>
          I want to be able to contribue my skills to a dynamic team, all while
          being challenged to constantly improve my skills, and become a better
          asset to my company. As a full stack web developer with a passion
          focusing on front end web design/development, I am constantly looking
          for new and exciting opportunities to work on innovative projects. I
          am passionate about designing user-friendly interfaces and crafting
          intuitive user experiences. I have experience working with a variety
          of design and development tools, including ReactJS, Ruby on Rails,
          Figma, along with other design applications. I am also excited to
          expand my skill set and am currently gaining skills in Python.
        </p>
        <a
          href="https://1drv.ms/b/s!Ak-4NIJkGoKahMoI3aR55YQp1MUDbw?e=CYEJKy"
          target="_blank"
        >
          Learn More about Me
        </a>

        {socials.map((social) => (
          //make into an equal grid
          <div>
            <a href={social.link} target="_blank">
              <img src={Rectangle} />
              {social.name}
            </a>
          </div>
        ))}
      </div>

      <div>
        <h2>Education & experience</h2>
        <p>
          One of my greatest strengths is my ability to work effectively as part
          of a team. As stated above I have experience in multiple programming
          languages, and am actively looking to expand my skillset. I graduated
          in 2022 from a highly intense and educational Fullstack web
          development program from Flatiron School of Coding. I am a skilled
          communicator and collaborator, and I thrive in a fast-paced,
          deadline-driven environment. I have a keen eye for detail and a strong
          sense of design, which allows me to create beautiful and functional
          interfaces. My ability to work well with others makes me an ideal team
          member for any project.
        </p>

        {information.certificates.map((certificate) => (
          //make into an equal grid
          <div>
            <a href={certificate.link} target="_blank">
              <img src={certificate.image} />
            </a>
          </div>
        ))}
      </div>

      <div>
        <h2>In my free time</h2>
        <p>
          Outside of my work as a UI/UX designer and developer, I am an avid
          artist and animal lover. I enjoy painting and drawing, and I find that
          my creative pursuits inspire me in my professional life as well. I am
          also passionate about animal welfare, and I volunteer regularly at my
          local animal shelter. I believe that my outside interests and hobbies
          enrich my life and make me a more well-rounded person, which in turn
          makes me a better designer and developer. I am excited to bring my
          creativity and enthusiasm to any project or team.
        </p>
        {information.examples.map((example) => (
          //make into an equal grid
          <div>
            <img src={example.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
