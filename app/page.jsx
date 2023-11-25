import Image from "next/image"

export default function Home() {
  return (
    <main className=" w-full pt-[5rem]">
      <div className="w-full sm:flex justify-between gap-20 space-y-10">
        <div className="sm:w-[50%] pt-[4rem]  sm:pt-[8rem] space-y-4 sm:space-y-6 lg:space-y-10">
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl '>
           Unlock the power of social influence! 
          </h1>
          <p className="lg:text-xl text-sm md:text-base  text-light-text">
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
              
            <div className="bg-black border-black h-8 w-[2px]"></div>

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
      <div>
        
      </div>
    </main>
  )
}
