import Image from "next/image";
import Link from "next/link";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

async function getContent() {
  const GRAPH_URL_ENDPOINT = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls9100ng1k7n01w3ceb835za/master'
  const graphcms = new GraphQLClient(GRAPH_URL_ENDPOINT)

  const { landingPosts }: { landingPosts: Array<{heading: string, order: number, paragraph: string }> } = await graphcms.request(
    `
    query LandingPosts {
      landingPosts {
        heading
        order
        paragraph
      }
    }
    `
  )

  console.log("async req: ", landingPosts)

  return landingPosts;
}

export default async function Home() {

  const content: Array<{ heading: string, order: number, paragraph: string }> = await getContent();
  console.log("content: ", content);
  

  
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
            <h1 className="text-7xl lg:text-8xl text-white font-bold">Trey <span className="text-orange-500">Education</span></h1>
            <h2 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 text-transparent bg-clip-text">{content[0].paragraph}</h2>
            <p></p>
          </div>
        </div>

        <div className="h-screen w-screen relative bg-white">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 px-4">
            <h1 className="text-7xl lg:text-8xl text-black font-bold">Trey <span className="text-orange-500">Education</span></h1>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-500">
              {content[1].paragraph}
            {/* You are working hard to ensure an outstanding experience for your students and community.
Let us partner with you in strengthening and supporting your faculty, providing capacity and expertise on your important projects, and ensuring you have what you need to do your job effectively as a school leader.
We work with independent schools across the United States through both virtual and in-person engagements. At Trey, we customize everything we do for each client; our job is to understand your school's unique contexts, challenges, and strategic goals and partner to help your school towards its mission. */}
            </h2>
            <p></p>
          </div>
        </div>
        
        <div className="h-screen w-screen relative flex flex-col items-center">
        <Image 
            src="/pexels-max-fischer-5212331.jpg" 
            alt="Trey Education" 
            layout='fill'
            objectFit='cover'
            className="opacity-50"
          />
          <div className="absolute lg:top-1/2 lg:-translate-y-1/2 mx-auto w-2/3">
            <h1 className="text-7xl lg:text-8xl text-white font-bold">Our <span className="text-orange-500">Services</span></h1>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="bg-orange-500 bg-opacity-70 rounded-md lg:w-1/4 lg:m-0 my-2">
                <h2 className="text-2xl">
                  {content[2].heading}
                  {/* Early Career Educators */}
                  </h2>
                <p>
                  {content[2].paragraph}
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                </p>
              </div> 
              <div className="bg-orange-500 bg-opacity-70 rounded-md lg:w-1/4 lg:m-0 my-2">
                <h2 className="text-2xl">
                  {content[3].heading}
                  {/* Ongoing Techer Growth */}
                  </h2>
                <p>
                  {content[3].paragraph}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                </p>
              </div> 
              <div className="bg-orange-500 bg-opacity-70 rounded-md lg:w-1/4 lg:m-0 my-2">
                <h2 className="text-2xl">
                  {content[4].heading}
                  {/* School Leaders */}
                  </h2>
                <p>
                  {content[4].paragraph}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                </p>
              </div>  
              <div className="bg-orange-500 bg-opacity-70 rounded-md lg:w-1/4 lg:m-0 my-2">
                <h2 className="text-2xl">
                  {content[5].heading}
                  {/* Partner Program Schools */}
                  </h2>
                <p>
                  {content[5].paragraph}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                </p>
              </div> 
            </div>
            <p></p>
          </div>
        </div>

        <div className="h-screen w-screen relative bg-white">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 px-4">
            <h1 className="text-6xl lg:text-8xl text-black font-bold">Leading <span className="text-orange-500">Education</span></h1>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-500">
              {content[6].paragraph}
            {/* Over two decades as an independent school educator and academic leader, Meera has mentored teachers, overseen the professional growth of faculty at the department and all-school level, run leadership teams, and shepherded curricular and programmatic change in schools. */}
            </h2>
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
            <h1 className="text-6xl lg:text-8xl text-white font-bold">Impacting <span className="text-orange-500">Education</span></h1>
            <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-500 text-transparent bg-clip-text">
              {content[7].paragraph}
            {/* "Trey Education has been a transformative force in my classroom, revolutionizing the way we approach learning. The interactive and dynamic resources provided by Trey Education have not only engaged my students but have also ignited a genuine enthusiasm for learning. The personalized learning paths and innovative tools have empowered each student to progress at their own pace, fostering a sense of ownership over their education. As a teacher, witnessing the positive impact on my students' academic growth and confidence has been truly inspiring. Trey Education has not just brought technology into our classroom; it has brought a new era of excitement and achievement."" */}
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
