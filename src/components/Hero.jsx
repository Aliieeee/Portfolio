import React from "react";
import hero from "../assets/images/hero-image.jpg";

const Hero = () => {
 const social_media = [
    { logo: "logo-instagram", link: "https://www.instagram.com/" },
    // { logo: "logo-facebook", link: "https://www.facebook.com/" },
    { logo: "logo-linkedin", link: "http://linkedin.com/in/ali-hassan-a9a7b5201" },
    { logo: "logo-github", link: "https://github.com/Aliieeee" },

    // { logo: "logo-twitter", link: "https://twitter.com/" }
];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
     
      <div className="flex-1 flex items-center justify-center h-full">
  <div className="rounded-full overflow-hidden w-64 h-64 flex items-center justify-center">
    <img src={hero} alt="" className="w-full h-full object-cover" />
  </div>
</div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Ali Hassan</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Full Stack Developer
          </h4>
          <a href="#contact">
          <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((socialMediaItem, index) => (
    <div key={index} className="text-gray-600 hover:text-white cursor-pointer">
        <a href={socialMediaItem.link} target="_blank" rel="noopener noreferrer">
            <ion-icon name={socialMediaItem.logo}></ion-icon>
        </a>
    </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
