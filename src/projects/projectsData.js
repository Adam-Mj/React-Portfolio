import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Parallax 3D Website",
    image: projectOne,
    description: (
      <>
        <p>
          Explore a responsive 3D parallax website with an engaging opening animation. 
          Designed for an immersive experience, it adapts seamlessly across all devices, providing stunning visuals and smooth interactions.
        </p>
      </>
    ),
    github: "https://github.com/Adam-Mj/3DParallax-Website.git",
    demo: "https://netlify.com",
  },
  2: {
    title: "Portfolio Website",
    image: projectTwo,
    description: (
      <>
        <p>
          Explore my responsive portfolio showcasing work experience and education. 
          Designed for seamless viewing on all devices, this site highlights my professional journey with engaging visuals and smooth interactions
        </p>
      </>
    ),
    github: "https://github.com/Adam-Mj/Portfolio",
    demo: "https://main--portfoliosadam.netlify.app/",
  },
  3: {
    title: "Responsive Portfolio",
    image: projectThree,
    description: (
      <>
        <p>
          Discover my enhanced, responsive portfolio website, showcasing my work experience and education. 
          Optimized for all devices, this site offers a visually stunning and seamless experience, highlighting my professional journey with engaging and dynamic interactions
        </p>
      </>
    ),
    github: "https://github.com/Adam-Mj/React-Portfolio",
    demo: "https://myprivateportfolioonline.netlify.app",
  },
};

export default projects;
