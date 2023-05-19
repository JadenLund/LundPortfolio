import Catmix1 from "../assets/projectImages/Catmix1.jpg";
import Catmix2 from "../assets/projectImages/Catmix2.png";
import PUPPUR1 from "../assets/projectImages/PUPPUR1.png";
import PUPPUR2 from "../assets/projectImages/PUPPUR2.png";
import PUPPUR3 from "../assets/projectImages/PUPPUR3.png";

//i need a container named projects, with each project inside that then has multiple images that will be mapped out
export const projects = [
  {
    title: "Catmix",
    images: [Catmix1, Catmix2],
    description:
      "Catmix is a visually appealing and charming application that showcases an extensive collection of cat images sourced from a free api. Its simplistic yet mesmerizing graphics and delightful particles create an unparalleled user experience.  Catmix offers cat lovers a delightful and enjoyable browsing experience, making it the perfect companion for those seeking a dose of feline cuteness and joy.",
    extra: "ReactJS | ParticleJS | The Cat API | SemanticUI",
  },
  {
    title: "Puppur",
    images: [PUPPUR1, PUPPUR2, PUPPUR3],
    description:
      "Puppur is an innovative application built with Ruby on Rails and React, designed to provide users with an immersive educational experience about various dog breeds. By logging in, users gain access to a wealth of information, captivating visuals, and interactive features. Puppur allows users to browse through an extensive collection of dog breeds, enabling them to favorite their preferred ones for quick reference. Additionally, users can engage with the community by leaving comments and sharing their thoughts on different dog breeds, fostering a lively and informative platform for dog enthusiasts. With Puppur, learning about dog breeds becomes an enjoyable and personalized journey, making it an indispensable tool for dog lovers of all kinds.",
    extra: "Ruby on Rails | ReactJS | Heroku | SemanticUI",
  },
];
