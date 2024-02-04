import Image from "next/image";
import Link from "next/link";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="items-center justify-between font-mono text-sm">
        <div className="h-screen w-screen relative">
          <Image 
            src="/pexels-ksenia-chernaya-8535230.jpg" 
            alt="Trey Education" 
            layout='fill'
            objectFit='cover'
            className="opacity-50"
          />
          <div className="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 px-4">
            <h1 className="text-8xl text-white font-bold">Trey <span className="text-orange-500">Education</span></h1>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 text-transparent bg-clip-text">Customized support for independent schools and teachers</h2>
            <p></p>
          </div>
        </div>
        
        <div className="h-screen relative bg-slate-600  flex flex-col items-center">
          <div className="absolute top-1/2 -translate-y-1/2 mx-auto w-2/3">
            <h1 className="text-8xl text-white font-bold">Our <span className="text-orange-500">Services</span></h1>
            <div className="flex flex-col-4 space-x-4">
              <div className="bg-orange-500 bg-opacity-70 rounded-md">
                <h2 className="text-2xl">Early Career Educators</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div> 
              <div className="bg-orange-500 bg-opacity-70 rounded-md">
                <h2 className="text-2xl">Ongoing Techer Growth</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div> 
              <div className="bg-orange-500 bg-opacity-70 rounded-md">
                <h2 className="text-2xl">School Leaders</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>  
              <div className="bg-orange-500 bg-opacity-70 rounded-md">
                <h2 className="text-2xl">Partner Program Schools</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div> 
            </div>
            <p></p>
          </div>
        </div>

        <div className="h-screen w-screen relative">
          <Image 
            src="/pexels-yan-krukau-8617837.jpg" 
            alt="Trey Education" 
            layout='fill'
            objectFit='cover'
            className="opacity-50"
          />
          <div className="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 px-4">
            <h1 className="text-8xl text-white font-bold">Impacting <span className="text-orange-500">Education</span></h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 text-transparent bg-clip-text">
              
"Trey Education has been a transformative force in my classroom, revolutionizing the way we approach learning. The interactive and dynamic resources provided by Trey Education have not only engaged my students but have also ignited a genuine enthusiasm for learning. The personalized learning paths and innovative tools have empowered each student to progress at their own pace, fostering a sense of ownership over their education. As a teacher, witnessing the positive impact on my students' academic growth and confidence has been truly inspiring. Trey Education has not just brought technology into our classroom; it has brought a new era of excitement and achievement."
              </h2>
            <p></p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
