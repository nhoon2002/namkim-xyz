import Image from 'next/image';

import Codeblock from './Codeblock';


const codeString = `
// About me
class SoftwareDeveloper {
  constructor() {
    this.fullName = "Nam Hoon Kim";
    this.type = "Full-Stack Developer";
    this.location = "Los Angeles";
    this.yearsOfExperience = 5;
    this.skills = {
      frontend: ['React.js', 'Vue.js', 'Tailwind.css', ...more],
      backend: ['Node.js', 'PHP', 'mySQL', ...more],
      misc: ['Next.js', 'Laravel', 'Docker', 'SEO', ...more]
    };
  }
}
`;

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="max-w-full text-left">
                        <div className="hero-content overflow-auto" >
                            <Codeblock code={codeString} language="javascript" />
                            {/* <h1 className="text-4xl font-mono mb-1">Hi, I&apos;m <span className="text-indigo-400">Nam Kim</span>.</h1>
                            <h1 className="text-4xl font-mono mb-1">Software Developer</h1>
                            <p>Specialized in Front-End Development</p>
                            <div className="flex flex-row mt-5 gap-1 justify-center md:justify-start">
                                <a href="https://www.linkedin.com/in/alex-nam-kim-04388070/" target="_blank" className="transition duration-500 ease-in-out border-indigo-500 border-2 text-indigo-500 hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white font-bold py-2 px-4 rounded">
                                    Resumé
                                </a>
                                <a href="mailto:alex.nh.kim@gmail.com?subject=Contact%20via%20namkim.xyz" className="transition duration-500 ease-in-out border-indigo-500 border-2 text-indigo-500 hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white font-bold py-2 px-4 rounded">
                                    Contact
                                </a>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="hidden md:block md:w-1/2">
                        <div className="h-full flex justify-end items-center">
                            <div className="drop-shadow-filter">
                                <Image priority src="/assets/img/hero.png" alt="Hero Image" width={400} height={400} className="hero-img" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;