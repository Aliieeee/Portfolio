import React from "react";
// import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "15" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
               As an experienced computer science professional proficient in database administration and MERN Stack development, I bring a wealth of expertise to the table. With a strong foundation built on multiple computer science certifications, I am dedicated to continuous learning and staying updated with the latest technologies.
 </p>
     <br/>        
     <p className="text-justify leading-7 w-11/12 mx-auto">

I excel as a detail-oriented problem solver, always eager to tackle challenges and contribute my skills to innovative projects. My goal is to leverage my extensive experience and passion for technology to drive success and deliver impactful solutions in the field of computer science.
     </p>

             <div className="flex justify-center mt-10 items-center gap-7">
    {info.map((content) => (
        <div key={content.text}>
            <h3 className="flex justify-center md:text-4xl text-2xl font-semibold text-white">
                {content.count}
                <span className="text-cyan-600">+</span>{" "}
            </h3>
            <span className="md:text-base text-xs">{content.text}</span>
        </div>
    ))}
</div>

              <br />
              <br />
              <a className="flex justify-center" href="./src/assets/Ali Hassan Cv.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
