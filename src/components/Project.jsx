import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/p11.png";
import project2 from "../assets/images/p2.png";
import Face_regonition from "../assets/images/FR.jpg";
import Ecom from "../assets/images/ecom.webp";
import netflix from "../assets/images/netflix.png";
import summary_genertor from "../assets/images/nsg.png";
import tc from "../assets/images/tc.png";
import proxy from "../assets/images/proxy.png";





// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: Face_regonition,
      name: "Biometrics Face Regonition",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: summary_genertor,
      name: "VideoVista Summaries",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project1,
      name: "QR-Dine In Ordering System",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: Ecom,
      name: "E-Commerence Dashboard",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: netflix,
      name: "Netflix Clone",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: proxy,
      name: "Proxy Clone",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: tc,
      name: "Takeer Concrete",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
   
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Some of My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex justify-center flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="flex justify-center lg:w-2/3 w-full">
          <Swiper className="flex justify-center"
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className=" h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img 
                  style={{
                    // width: '200px',       // Sets the width to 200 pixels
                    height: '200px',      // Sets the height to 200 pixels
                    objectFit: 'cover',   // Ensures the content is resized to cover the frame without being distorted
                    borderRadius: '12px'  // Applies a large rounded corner style
                  }}
                  src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  {/* <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;


