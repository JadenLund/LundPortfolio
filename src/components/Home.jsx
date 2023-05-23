import ProfileIcon from "../assets/ProfileIcon.png";

export default function Home() {
  return (
    <div class="grid grid-cols-2 items-center border-2 border-indigo-500 pt-y">
      <div>
        <h1 class="transition duration-700 ease-in-out">Hi, I'm Jaden </h1>
        {/* class="transition duration-700 ease-in-out */}
        <h3>Front-End Software Developer with a passion for design</h3>
      </div>
      <img src={ProfileIcon} class="py-5 px-12 items-center" />
    </div>
  );
}
