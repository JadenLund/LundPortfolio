import { Link } from "react-scroll";
export default function NavBar() {
  const durationFn = function (deltaTop) {
    return deltaTop;
  };
  return (
    <nav class="sticky top-0 font-semibold text-xl bg-nature-green grid grid-cols-3 items-center">
      <a href="home" class="flex no-underline text-black">
        <img
          class="h-8 w-8 "
          src="https://www.freeiconspng.com/thumbs/letter-j-icon-png/letter-j-icon-png-26.png"
        />
        <span>aden Lund</span>
      </a>
      <div class="flex sm:justify-center space-x-8 ">
        {[
          ["Home", "home"],
          ["About", "about"],
          ["Projects", "projects"],
        ].map(([title, url]) => (
          <Link
            to={url}
            duration={durationFn}
            class="p-3 focus:bg-clicked-green hover:bg-selected-green no-underline text-black"
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
