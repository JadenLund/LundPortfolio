import { useMemo } from "react";

import Python from "../assets/certificates/Python.png";
import Flatiron from "../assets/certificates/Flatiron.png";
import DogIcons from "../assets/icons/DogIcons.gif";
import Icons from "../assets/icons/Icons.gif";
import Rectangle from "../assets/Rectangle.png";

export const information = {
  socials: [
    {
      name: "LinkedIn",
      icon: Rectangle,
      link: "https://www.linkedin.com/in/jaden-lund/",
    },
    {
      name: "GitHub",
      icon: Rectangle,
      link: "https://github.com/JadenLund",
    },
    {
      name: "Medium",
      icon: Rectangle,
      link: "https://medium.com/@lundjaden",
    },
    {
      name: "Twitter",
      icon: Rectangle,
      link: "https://twitter.com/CodingLund",
    },
  ],
  certificates: [
    {
      image: Flatiron,
      link: "https://www.linkedin.com/posts/jaden-lund_softwareengineering-softwaredevelopment-frontenddeveloper-activity-7009215894098780160-Qsis?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: Python,
      link: "https://www.linkedin.com/posts/jaden-lund_work-programming-coursera-activity-7062894026315726848-1sHY?utm_source=share&utm_medium=member_desktop",
    },
  ],
  examples: [{ image: DogIcons }, { image: Icons }, { image: Rectangle }],
};
