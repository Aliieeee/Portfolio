import React from "react";
// import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "50" },
    { text: "Companies Work", count: "03" },
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
              As a Full Stack Developer and Machine Learning Engineer with extensive experience in both front-end and back-end technologies, I offer a comprehensive skill set that encompasses the full spectrum of web development. I am proficient in JavaScript, React, Node.js, and modern frameworks and libraries integral to the MERN stack. My expertise extends to responsive design and cross-platform compatibility, ensuring seamless user experiences on any device.
              I hold a strong track record of successful projects, ranging from dynamic web applications to scalable e-commerce platforms. My approach combines meticulous attention to detail with a keen eye for aesthetics, making me a dual threat in crafting both functional and visually compelling applications.

Certified in both front-end and back-end technologies, I am committed to lifelong learning and staying at the forefront of industry trends. I thrive in collaborative environments, and am passionate about using my skills to solve complex problems and drive business success.

Whether you are a startup looking to build your product from scratch or an established business seeking to enhance your digital presence, I am here to help turn your vision into reality.
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
