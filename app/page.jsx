import Footer from "@/components/Footer";
import Testimonies from "@/components/Testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full pt-[5rem] bg-primary-color-light">
      <div className="w-full px-10 sm:px-20 sm:flex justify-between gap-20 space-y-10">
        <div className="sm:w-[50%] pt-[4rem]  sm:pt-[8rem] space-y-4 sm:space-y-6">
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl text-primary-color '>
           Unlock the power of social influence! 
          </h1>
          <p className="lg:text-base text-sm md:text-base  text-light-text">
            Our platform connects businesses with eager individuals ready to showcase products on their WhatsApp status.
          </p>
          <div className="flex space-x-3 items-center">
            <div className="flex space-x-2 items-center">
              <div>
                  <img src="/assets/images/customers-4518f0d6.png" className="h-8" alt=""/>
              </div>
              <div className="lg:ml-0 ml-1">
                  <h1 className=" text-xs lg:text-sm font-semibold">
                      2,291
                  </h1>
                  <p className="text-[#898991] lg:text-sm text-xs">Happy Advertisers</p>
              </div>

            </div>
              
            <div className="bg-black border-black h-8 w-[1px]"></div>

            <div className="flex space-x-2 items-center">
              <div>
                  <img src="/assets/images/customers-4518f0d6.png" className="h-8" alt=""/>
              </div>
              <div className="lg:ml-0 ml-1">
                  <h1 className=" text-xs lg:text-sm font-semibold">
                      2,291
                  </h1>
                  <p className="text-[#898991] lg:text-sm text-xs">Happy Brand Client</p>
              </div>
              
            </div>
             
              
          </div>
        </div>
        <div className="sm:relative w-full flex justify-center sm:w-1/3  lg:pt-0 sm:pt-[5rem] md:pt-1">
          <img src="/assets/images/person_holding_phone.png" />
          <div class="absolute bottom-0 right-0 rotate-[270deg]">
                <img src="/assets/images/bg_question_img1.png" alt="Home Background Image"/>
            </div>
        </div>
        {/* <div className="sm:w-[50%] relative ">

          <div className="sm:absolute sm:-top-[30px] -z-10 border rounded-full border-primary-color p-10 ">
            <div className="bg-primary-color sm:w-[200px] h-[10rem] w-[10rem] lg:h-[300px] xl:w-[25rem] rounded-full"></div>
          </div>
          <Image className="absolute top-2 left-11 right-0 w-[150px] sm:w-[250px] lg:w-[350px] sm:-top-[60px] md:-top-[80px] lg:-top-[100px] sm:left-3 md:-left-2 lg:left-6 xl:left-[3.5rem] " src='/assets/images/person_holding_phone.png' width={350} height={100} alt="person-holding-phone"/>
          <div className="flex absolute top-11 left-0 gap-2 p-2 rounded-md w-[10rem] bg-white shadow-md"> 
            <img src='/assets/images/logo.png'  alt="picture" className="rounded-full w-8 h-8" />
            <div className="flex flex-col">
              <div  className="font-bold text-[9px]">
                Ronald Richards
              </div>
              <p className="text-light-text text-[8px]">One of the best advertising firm.</p>
            </div>
          </div>
          <div className="flex absolute bottom-0 right-[2rem] gap-2 p-2 rounded-md w-[10rem] bg-white shadow-md"> 
            <img src='/assets/images/logo.png'  alt="picture" className="rounded-full w-8 h-8" />
            <div className="flex flex-col">
              <div  className="font-bold text-[9px]">
                Ronald Richards
              </div>
              <p className="text-light-text text-[8px]">One of the best advertising firm.</p>
            </div>
          </div>
        </div> */}
      </div> 
      <div className="">
        <div className="relative  bg-primary-color md:px-0">
          <div className="h-20 overflow-hidden">
            <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full rotate-180 h-full text-white " style={{height: "100%", width: "100%"}}><path fill="currentColor" fill-opacity="0.9" d="M0,32L40,74.7C80,117,160,203,240,240C320,277,400,267,480,218.7C560,171,640,85,720,42.7C800,0,880,0,960,32C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>  
          </div>
          
          
          <div className="relative flex flex-col items-center justify-center px-6 pb-28  mx-auto text-center text-white max-w-7xl">
            <div>
              <div className="absolute top-0 left-10 rotate-[30deg]">
                <img src="/assets/images/bg_question_img1.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-0 right-10 rotate-[160deg]">
                <img src="/assets/images/bg_question_img1.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-0 left-10">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg1.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-0 right-60">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-16 right-44">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute left-40 inset-y-1/2">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div> <div className="absolute right-0 inset-y-2/3">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg3.png" alt="Home Background Image"/>
              </div>
            </div>
          </div> 
          <div className="absolute inset-0 z-0">
            <img src="https://files.selar.co/website-assets/landing/images/home_bg4.png" alt="Home Background Image"/>
          </div> 
          <div className="px-10 sm:px-20 grid gap-10 md:grid-cols-2">
            <div className="flex items-center justify-center relative">
              <div className="absolute   w-full p-14 h-full rounded-full border border-white ">
                <div className="bg-primary-text-color h-full w-full rounded-full"> </div>
              </div>
              <img src="/assets/images/phone_status_two.png" className="h-[30rem]relative z-10 w-72" alt="home phone status" />
            </div>
            <div className="flex items-center text-primary-text-color flex-col justify-center">
              <h4 className="font-bold text-3xl text-center md:text-left w-full xl:text-4xl mb-10">Hey there!</h4>
              <p className="text-lg text-center md:text-left">Turn your WhatsApp status into a money-making machine! Join our platform and get paid for sharing amazing products on your status. Earn while you engage - it's that simple! Be part of our community of influencers and start monetizing your status updates today. Don't miss out on this opportunity to make money effortlessly. Sign up now and get rewarded for every post!</p>
            </div>
            
          </div>
          <div className="relative flex flex-col items-center justify-center px-6 pt-28  mx-auto text-center text-white max-w-7xl">
            <div>
              <div className="absolute top-0 left-10">
                <img src="/assets/images/bg_question_img1.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-0 right-10 rotate-[210deg]">
                <img src="/assets/images/bg_question_img1.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-0 left-10">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg1.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-0 right-60">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute top-16 right-44">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div> 
              <div className="absolute left-40 inset-y-1/2">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div> <div className="absolute right-0 inset-y-2/3">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg3.png" alt="Home Background Image"/>
              </div>
            </div>
          </div> 
          <div className="absolute inset-0 z-0">
            <img src="https://files.selar.co/website-assets/landing/images/home_bg4.png" alt="Home Background Image"/>
          </div> 
          <div className="h-32 overflow-hidden">
            <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full  h-full text-white " style={{height: "100%", width: "100%"}}><path fill="currentColor" fill-opacity="0.9" d="M0,32L40,74.7C80,117,160,203,240,240C320,277,400,267,480,218.7C560,171,640,85,720,42.7C800,0,880,0,960,32C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>  
          </div>
          
        </div>
        
      </div>
      <section className="relative -top-11 -z-10">
        <div>
          <svg data-v-68276cea="" width="82" height="122" viewBox="0 0 41 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute pointer-events-none top-0 -left-4"><g data-v-68276cea="" clip-path="url(#clip0_8_176)"><path data-v-68276cea="" d="M3.19199 0.00012207H2.20508V0.987033H3.19199V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 5.96451H2.20508V6.95142H3.19199V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 11.9335H2.20508V12.9204H3.19199V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 17.8981H2.20508V18.885H3.19199V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 23.8622H2.20508V24.8492H3.19199V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 29.8269H2.20508V30.8138H3.19199V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 35.7959H2.20508V36.7828H3.19199V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 41.7601H2.20508V42.747H3.19199V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 47.7248H2.20508V48.7117H3.19199V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 53.6938H2.20508V54.6807H3.19199V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M3.19199 59.658H2.20508V60.6449H3.19199V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 0.00012207H7.60742V0.987033H8.59433V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 5.96451H7.60742V6.95142H8.59433V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 11.9335H7.60742V12.9204H8.59433V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 17.8981H7.60742V18.885H8.59433V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 23.8622H7.60742V24.8492H8.59433V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 29.8269H7.60742V30.8138H8.59433V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 35.7959H7.60742V36.7828H8.59433V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 41.7601H7.60742V42.747H8.59433V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 47.7248H7.60742V48.7117H8.59433V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 53.6938H7.60742V54.6807H8.59433V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M8.59433 59.658H7.60742V60.6449H8.59433V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 0.00012207H13.0088V0.987033H13.9957V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 5.96451H13.0088V6.95142H13.9957V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 11.9335H13.0088V12.9204H13.9957V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 17.8981H13.0088V18.885H13.9957V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 23.8622H13.0088V24.8492H13.9957V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 29.8269H13.0088V30.8138H13.9957V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 35.7959H13.0088V36.7828H13.9957V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 41.7601H13.0088V42.747H13.9957V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 47.7248H13.0088V48.7117H13.9957V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 53.6938H13.0088V54.6807H13.9957V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M13.9957 59.658H13.0088V60.6449H13.9957V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 0.00012207H18.4106V0.987033H19.3976V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 5.96451H18.4106V6.95142H19.3976V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 11.9335H18.4106V12.9204H19.3976V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 17.8981H18.4106V18.885H19.3976V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 23.8622H18.4106V24.8492H19.3976V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 29.8269H18.4106V30.8138H19.3976V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 35.7959H18.4106V36.7828H19.3976V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 41.7601H18.4106V42.747H19.3976V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 47.7248H18.4106V48.7117H19.3976V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 53.6938H18.4106V54.6807H19.3976V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M19.3976 59.658H18.4106V60.6449H19.3976V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 0.00012207H23.8125V0.987033H24.7994V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 5.96451H23.8125V6.95142H24.7994V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 11.9335H23.8125V12.9204H24.7994V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 17.8981H23.8125V18.885H24.7994V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 23.8622H23.8125V24.8492H24.7994V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 29.8269H23.8125V30.8138H24.7994V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 35.7959H23.8125V36.7828H24.7994V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 41.7601H23.8125V42.747H24.7994V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 47.7248H23.8125V48.7117H24.7994V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 53.6938H23.8125V54.6807H24.7994V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M24.7994 59.658H23.8125V60.6449H24.7994V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 0.00012207H29.2095V0.987033H30.1964V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 5.96451H29.2095V6.95142H30.1964V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 11.9335H29.2095V12.9204H30.1964V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 17.8981H29.2095V18.885H30.1964V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 23.8622H29.2095V24.8492H30.1964V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 29.8269H29.2095V30.8138H30.1964V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 35.7959H29.2095V36.7828H30.1964V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 41.7601H29.2095V42.747H30.1964V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 47.7248H29.2095V48.7117H30.1964V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 53.6938H29.2095V54.6807H30.1964V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M30.1964 59.658H29.2095V60.6449H30.1964V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 0.00012207H34.6108V0.987033H35.5978V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 5.96451H34.6108V6.95142H35.5978V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 11.9335H34.6108V12.9204H35.5978V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 17.8981H34.6108V18.885H35.5978V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 23.8622H34.6108V24.8492H35.5978V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 29.8269H34.6108V30.8138H35.5978V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 35.7959H34.6108V36.7828H35.5978V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 41.7601H34.6108V42.747H35.5978V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 47.7248H34.6108V48.7117H35.5978V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 53.6938H34.6108V54.6807H35.5978V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M35.5978 59.658H34.6108V60.6449H35.5978V59.658Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 0.00012207H40.0132V0.987033H41.0001V0.00012207Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 5.96451H40.0132V6.95142H41.0001V5.96451Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 11.9335H40.0132V12.9204H41.0001V11.9335Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 17.8981H40.0132V18.885H41.0001V17.8981Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 23.8622H40.0132V24.8492H41.0001V23.8622Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 29.8269H40.0132V30.8138H41.0001V29.8269Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 35.7959H40.0132V36.7828H41.0001V35.7959Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 41.7601H40.0132V42.747H41.0001V41.7601Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 47.7248H40.0132V48.7117H41.0001V47.7248Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 53.6938H40.0132V54.6807H41.0001V53.6938Z" fill="#2449DB"></path> <path data-v-68276cea="" d="M41.0001 59.658H40.0132V60.6449H41.0001V59.658Z" fill="#2449DB"></path></g> <defs data-v-68276cea=""><clipPath data-v-68276cea="" id="clip0_8_176"><rect data-v-68276cea="" width="55" height="60.6449" fill="white" transform="translate(-14)"></rect></clipPath></defs></svg>
        </div>
        <div className="pt-11 grid px-10 sm:px-20  md:grid-cols-2 h-fit">
          <div className="flex justify-center flex-col">
            <h4 className="font-bold text-3xl text-center md:text-left w-full xl:text-4xl mb-10 text-primary-color">Brands, Businesses & Stores!</h4>
            <p className="text-lg text-center md:text-left">Want more people to see and buy your stuff? We've got a cool way to get your products on tons of WhatsApp statuses. It's like word-of-mouth, but way bigger! Imagine lots of folks sharing your stuff with their friends. That means more eyes on your products and more sales for you. Let's team up and make your brand the talk of WhatsApp status updates!</p>

          </div>
          <div className="bg-inherit">
            <img src="/assets/images/money-bag-svgrepo-com.svg" className="h-[30rem]" alt="money"/>

          </div>
          
        </div>

      </section>
      <section>
        <Testimonies/>
      </section>
      
    </main>
  )
}
