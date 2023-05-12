import Catmix1 from "../assets/projectImages/Catmix1.jpg";
import Catmix2 from "../assets/projectImages/Catmix2.png";
import PUPPUR1 from "../assets/projectImages/PUPPUR1.png";
import PUPPUR2 from "../assets/projectImages/PUPPUR2.png";
import PUPPUR3 from "../assets/projectImages/PUPPUR3.png";
export default function Home() {
  const projects = [
    //test for object in an object
    {
      id: 1,
      name: "Catmix",
      images: [Catmix1, Catmix2],
    },
    {
      id: 2,
      name: "PUPPUR",
      images: [PUPPUR1, PUPPUR2, PUPPUR3],
    },
  ];

  {
    projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        {projects.name.map((singleProject) => {
          <h3>{singleProject}</h3>;
        })}
        <img src={project.images} />
        <h2>{project.images[0]}</h2>
        {/* <img src={project.images} /> */}
        {console.log("project.images: ", project.images)}
        {/* {console.log("project.images.image: ", project.images.image)} */}
        {/* {console.log("project.images[0]: ", project.images[0])} */}
      </div>
    ));
  }
}
