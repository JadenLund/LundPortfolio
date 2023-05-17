import ProfileIcon from "../assets/ProfileIcon.png";
import resume from "../assets/resume.png";

export default function Home() {
  return (
    <div class="mx-8 grid grid-cols-4 items-center">
      <img class="" src={resume} width={200} />
      <div class="col-span-2">
        <h1>Jaden Lund</h1> <h3>Front-End Software Developer</h3>
      </div>
      <img src={ProfileIcon} />
    </div>
  );
}
