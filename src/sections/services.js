import React from "react";
import webDev from "../assets/webdev.png"
import appDev from "../assets/appdev.png"
import uxDesign from "../assets/ux-design.png"
import penetrationTesting from "../assets/penetration-testing.png"
import teaching from "../assets/teaching.png"
import technicalSupport from "../assets/technical-support.png"

export default function Services() {
  return (
    <div id="services" className="bg-gray-800 text-white">
      <div className="flex flex-col justify-center mx-10 lg:mx-20 mt-10 pt-10 items-start">
        <div>
        <p className="text-2xl mb-7 lg:mb-12 decoration-cyan-600 xl:text-3xl underline underline-offset-8 underline-cyan-600 font-semibold leading-9 text-white">Services</p>
        <h1 className="text-4xl font-medium">What do we do?</h1>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-16 justify-center items-center">
          <div className="bg-white lg:mr-12 p-4 transition-all duration-200 text-black rounded-xl hover:text-white hover:bg-cyan-600 h-56 w-80 mb-12 lg:mb-20">
            <div className="flex justify-start items-center mb-3">
              <img className="h-16 w-16 mr-5" src={webDev} />
              <h1 className="text-lg font-semibold">
                Website Development
              </h1>
            </div>
            <p className="text-sm px-3 pt-1">
            Our full-stack development team is based on
creating front-end and back-end development
services working closely with our designers
with various frame works.
            </p>
          </div>
          <div className="bg-white lg:mr-12 p-4 transition-all duration-200 text-black rounded-xl hover:text-white hover:bg-cyan-600 h-56 w-80 mb-12 lg:mb-20">
            <div className="flex justify-start items-center mb-3">
              <img className="h-16 w-16 mr-5" src={appDev} />
              <h1 className="text-lg font-semibold">
              App Development
              </h1>
            </div>
            <p className="text-sm px-3 pt-1">
            As a UI/UX and App development company, we build hybrid and cross-platform applications mobile apps for both Ios and Android applications by using flutter. 
            </p>
          </div>
          <div className="bg-white lg:mr-12 p-4 transition-all duration-200 text-black rounded-xl hover:text-white hover:bg-cyan-600 h-56 w-80 mb-12 lg:mb-20">
            <div className="flex justify-start items-center mb-3">
              <img className="h-16 w-16 mr-5" src={penetrationTesting} />
              <h1 className="text-lg font-semibold">
                Penetration Testing
              </h1>
            </div>
            <p className="text-sm px-3 pt-1">
            We will provide all types of tests and debug the application and deliver error-free software to our clients within a short period of time.
            </p>
          </div>
          <div className="bg-white lg:mr-12 p-4 transition-all duration-200 text-black rounded-xl hover:text-white hover:bg-cyan-600 h-56 w-80 mb-12 lg:mb-20">
            <div className="flex justify-start items-center mb-3">
              <img className="h-16 w-16 mr-5" src={uxDesign} />
              <h1 className="text-lg font-semibold">
                UI / UX Design
              </h1>
            </div>
            <p className="text-sm px-3 pt-1">
            We have a UI/UX design team that believes business software deserves the user-friendliness and aesthetics of best-in-class consumer apps.
            </p>
          </div>
          <div className="bg-white lg:mr-12 p-4 transition-all duration-200 text-black rounded-xl hover:text-white hover:bg-cyan-600 h-56 w-80 mb-12 lg:mb-20">
            <div className="flex justify-start items-center mb-3">
              <img className="h-16 w-16 mr-5" src={technicalSupport} />
              <h1 className="text-lg font-semibold">
                Tech Support
              </h1>
            </div>
            <p className="text-sm px-3 pt-1">
            We are working in various countries so our team will be always available to provide complete tech support 24 / 7 for our clients.            </p>
          </div>
          <div className="bg-white lg:mr-12 p-4 transition-all duration-200 text-black rounded-xl hover:text-white hover:bg-cyan-600 h-56 w-80 mb-12 lg:mb-20">
            <div className="flex justify-start items-center mb-3">
              <img className="h-16 w-16 mr-5" src={teaching} />
              <h1 className="text-lg font-semibold">
               Training
              </h1>
            </div>
            <p className="text-sm px-3 pt-1">
            Our team will provide you an internship training to become professional expertise in the tech field by working on live clients projects.
            </p>
          </div>
        </div>
      </div>
      {/* <section className="mx-auto container py-20 ">
        <div className="flex justify-start items-center flex-col">
          <div className="lg:text-6xl text-left md:text-5xl text-4xl font-black leading-10 text-gray-800 dark:text-white">
            <h1>Services</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <svg className width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#C7D2FE" />
                  <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#818CF8" />
                  <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#6366F1" />
                </svg>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Robust workflow</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                <p className="text-sm px-3 pt-1">Workflows can help streamline and automate repeatable business tasks.</p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33325 1.33337H30.6666L26.6666 9.33337H1.33325L5.33325 1.33337Z" fill="#818CF8" />
                  <path d="M5.33325 12H30.6666L26.6666 20H1.33325L5.33325 12Z" fill="#6366F1" />
                  <path d="M5.33325 22.6667H30.6666L26.6666 30.6667H1.33325L5.33325 22.6667Z" fill="#C7D2FE" />
                </svg>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Flexibility</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>A flexible software architecture is able to changes in usability requirements</p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.6667 8.00004V2.66671C30.6667 2.31309 30.5262 1.97395 30.2762 1.7239C30.0261 1.47385 29.687 1.33337 29.3334 1.33337H2.66671C2.31309 1.33337 1.97395 1.47385 1.7239 1.7239C1.47385 1.97395 1.33337 2.31309 1.33337 2.66671V8.00004H30.6667Z" fill="#6366F1" />
                  <path d="M1.33337 10.6667V29.3334C1.33337 29.687 1.47385 30.0262 1.7239 30.2762C1.97395 30.5263 2.31309 30.6667 2.66671 30.6667H9.33337V10.6667H1.33337Z" fill="#C7D2FE" />
                  <path d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z" fill="#818CF8" />
                </svg>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>User friendly</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Good usability can improve a new software chances of successful adoption.</p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.0001 32H16.0001C15.6465 32 15.3073 31.8595 15.0573 31.6095C14.8072 31.3594 14.6667 31.0203 14.6667 30.6667V28C14.6667 27.6464 14.8072 27.3073 15.0573 27.0572C15.3073 26.8072 15.6465 26.6667 16.0001 26.6667H28.0001C28.3537 26.6667 28.6928 26.8072 28.9429 27.0572C29.1929 27.3073 29.3334 27.6464 29.3334 28V30.6667C29.3334 31.0203 29.1929 31.3594 28.9429 31.6095C28.6928 31.8595 28.3537 32 28.0001 32Z" fill="#C7D2FE" />
                  <path d="M28.0001 0H4.00008C3.64646 0 3.30732 0.140475 3.05727 0.390523C2.80722 0.640572 2.66675 0.979711 2.66675 1.33333V4C2.66675 4.35362 2.80722 4.69276 3.05727 4.94281C3.30732 5.19286 3.64646 5.33333 4.00008 5.33333H28.0001C28.3537 5.33333 28.6928 5.19286 28.9429 4.94281C29.1929 4.69276 29.3334 4.35362 29.3334 4V1.33333C29.3334 0.979711 29.1929 0.640572 28.9429 0.390523C28.6928 0.140475 28.3537 0 28.0001 0Z" fill="#6366F1" />
                  <path d="M28.0001 8H4.00008C3.64646 8 3.30732 8.14047 3.05727 8.39052C2.80722 8.64057 2.66675 8.97971 2.66675 9.33333V22.6667C2.66675 23.0203 2.80722 23.3594 3.05727 23.6095C3.30732 23.8595 3.64646 24 4.00008 24H28.0001C28.3537 24 28.6928 23.8595 28.9429 23.6095C29.1929 23.3594 29.3334 23.0203 29.3334 22.6667V9.33333C29.3334 8.97971 29.1929 8.64057 28.9429 8.39052C28.6928 8.14047 28.3537 8 28.0001 8Z" fill="#818CF8" />
                </svg>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Multiple layouts</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Smaller components are easier to maintain. Program can be divided</p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66658 1.33331H2.66659C2.31296 1.33331 1.97382 1.47379 1.72378 1.72384C1.47373 1.97388 1.33325 2.31302 1.33325 2.66665V29.3333C1.33325 29.6869 1.47373 30.0261 1.72378 30.2761C1.97382 30.5262 2.31296 30.6666 2.66659 30.6666H6.66658V1.33331Z" fill="#C7D2FE" />
                  <path
                    d="M9.33325 30.6666H22.6666V1.33331H9.33325V30.6666ZM15.9999 25.3333C15.6463 25.3333 15.3072 25.1928 15.0571 24.9428C14.8071 24.6927 14.6666 24.3536 14.6666 24C14.6666 23.6464 14.8071 23.3072 15.0571 23.0572C15.3072 22.8071 15.6463 22.6666 15.9999 22.6666C16.3535 22.6666 16.6927 22.8071 16.9427 23.0572C17.1928 23.3072 17.3333 23.6464 17.3333 24C17.3333 24.3536 17.1928 24.6927 16.9427 24.9428C16.6927 25.1928 16.3535 25.3333 15.9999 25.3333ZM15.9999 6.66665C16.3535 6.66665 16.6927 6.80712 16.9427 7.05717C17.1928 7.30722 17.3333 7.64636 17.3333 7.99998C17.3333 8.3536 17.1928 8.69274 16.9427 8.94279C16.6927 9.19284 16.3535 9.33331 15.9999 9.33331C15.6463 9.33331 15.3072 9.19284 15.0571 8.94279C14.8071 8.69274 14.6666 8.3536 14.6666 7.99998C14.6666 7.64636 14.8071 7.30722 15.0571 7.05717C15.3072 6.80712 15.6463 6.66665 15.9999 6.66665ZM15.9999 14.6666C16.3535 14.6666 16.6927 14.8071 16.9427 15.0572C17.1928 15.3072 17.3333 15.6464 17.3333 16C17.3333 16.3536 17.1928 16.6927 16.9427 16.9428C16.6927 17.1928 16.3535 17.3333 15.9999 17.3333C15.6463 17.3333 15.3072 17.1928 15.0571 16.9428C14.8071 16.6927 14.6666 16.3536 14.6666 16C14.6666 15.6464 14.8071 15.3072 15.0571 15.0572C15.3072 14.8071 15.6463 14.6666 15.9999 14.6666Z"
                    fill="#818CF8"
                  />
                  <path d="M29.3333 1.33331H25.3333V30.6666H29.3333C29.6869 30.6666 30.026 30.5262 30.2761 30.2761C30.5261 30.0261 30.6666 29.6869 30.6666 29.3333V2.66665C30.6666 2.31302 30.5261 1.97388 30.2761 1.72384C30.026 1.47379 29.6869 1.33331 29.3333 1.33331Z" fill="#6366F1" />
                </svg>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Better components</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Component-based design makes front-end web development faster.</p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.2079 0.175992L0.781281 6.91599C0.68372 6.96073 0.601072 7.03256 0.543175 7.12294C0.485278 7.21331 0.454572 7.31842 0.454712 7.42575C0.454853 7.53308 0.485833 7.63811 0.543966 7.72833C0.6021 7.81856 0.684936 7.89017 0.782614 7.93466L15.3226 14.6253C15.7519 14.8227 16.2479 14.8227 16.6773 14.6253L31.2173 7.93466C31.315 7.8903 31.3979 7.81879 31.4562 7.72865C31.5145 7.6385 31.5456 7.53351 31.5459 7.42618C31.5461 7.31885 31.5156 7.2137 31.4578 7.12325C31.4 7.0328 31.3175 6.96086 31.2199 6.91599L16.792 0.175992C16.544 0.0601174 16.2736 6.10352e-05 15.9999 6.10352e-05C15.7263 6.10352e-05 15.4559 0.0601174 15.2079 0.175992Z"
                    fill="#818CF8"
                  />
                  <path
                    d="M31.22 15.568L28.24 14.176C28.0266 14.0763 27.794 14.0243 27.5584 14.0236C27.3229 14.0229 27.09 14.0735 26.876 14.172L16.6773 18.8653C16.4649 18.963 16.2338 19.0136 16 19.0136C15.7662 19.0136 15.5351 18.963 15.3227 18.8653L5.12267 14.172C4.90885 14.0737 4.67621 14.0232 4.4409 14.0239C4.20559 14.0246 3.97324 14.0765 3.76001 14.176L0.780006 15.568C0.682503 15.6128 0.599949 15.6848 0.54217 15.7752C0.48439 15.8657 0.453823 15.9708 0.454103 16.0782C0.454384 16.1855 0.485502 16.2905 0.543754 16.3806C0.602006 16.4708 0.684937 16.5423 0.782674 16.5866L15.3227 23.276C15.535 23.3742 15.7661 23.4251 16 23.4251C16.2339 23.4251 16.465 23.3742 16.6773 23.276L31.2173 16.5866C31.3151 16.5423 31.398 16.4708 31.4563 16.3806C31.5145 16.2905 31.5456 16.1855 31.5459 16.0782C31.5462 15.9708 31.5156 15.8657 31.4578 15.7752C31.4001 15.6848 31.3175 15.6128 31.22 15.568Z"
                    fill="#C7D2FE"
                  />
                  <path
                    d="M31.22 24.144L28.24 22.752C28.0266 22.6522 27.794 22.6002 27.5585 22.5995C27.3229 22.5989 27.09 22.6495 26.876 22.748L16.6774 27.44C16.4649 27.5376 16.2338 27.5882 16 27.5882C15.7662 27.5882 15.5351 27.5376 15.3227 27.44L5.12269 22.7466C4.90887 22.6484 4.67623 22.5978 4.44091 22.5985C4.2056 22.5992 3.97326 22.6511 3.76002 22.7506L0.780019 24.144C0.682891 24.189 0.600708 24.2609 0.543205 24.3512C0.485701 24.4415 0.455288 24.5464 0.455568 24.6535C0.455849 24.7605 0.486813 24.8653 0.544789 24.9553C0.602765 25.0453 0.685324 25.1168 0.782686 25.1613L15.3227 31.852C15.752 32.0493 16.248 32.0493 16.6774 31.852L31.2174 25.1613C31.3147 25.1168 31.3973 25.0453 31.4553 24.9553C31.5132 24.8653 31.5442 24.7605 31.5445 24.6535C31.5448 24.5464 31.5143 24.4415 31.4568 24.3512C31.3993 24.2609 31.3172 24.189 31.22 24.144Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Well organised</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>No more running around looking for things.When you write things and plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
