import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full pt-[5rem]">
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
            <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full rotate-180 h-full text-white " style={{height: "100%", width: "100%"}}><path fill="currentColor" fill-opacity="1" d="M0,32L40,74.7C80,117,160,203,240,240C320,277,400,267,480,218.7C560,171,640,85,720,42.7C800,0,880,0,960,32C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>  
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
                <div className="bg-white h-full w-full rounded-full"> </div>
              </div>
              <img src="/assets/images/phone_status_two.png" className="h-[30rem]relative z-10 w-72" alt="home phone status" />
            </div>
            <div className="flex items-center text-white flex-col justify-center">
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
            <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full  h-full text-white " style={{height: "100%", width: "100%"}}><path fill="currentColor" fill-opacity="1" d="M0,32L40,74.7C80,117,160,203,240,240C320,277,400,267,480,218.7C560,171,640,85,720,42.7C800,0,880,0,960,32C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>  
          </div>
          
        </div>
        
      </div>
    </main>
  )
}
