"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showNav, setShowNav] = useState(false);



  return (
    <div className='fixed top-0 left-0 w-full backdrop-blur-lg bg-opacity-70 shadow-md z-20'>  
        <nav className='px-8  sm:px-20 lg:px-20 py-5 text-base flex items-center justify-between relative'>
            <Link href="/" className='flex gap-2 items-center justify-center'>
                <Image src='/assets/images/logo.png' width={40} height={40} alt='brand-logo'/>
                <p className='text-xl font-bold text-primary-color hidden md:block '>Swift Advert</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden w-[60%] justify-between'>
              {/* <div className='flex space w-full'>  */}
                <div className='flex gap-8'>
                  <Link href="/howitworks">How it works</Link>
                  <Link href="faqs">FAQs</Link>
                </div>
                
                {/* <Link href='/log-in' className='purple_btn'>Register</Link> */}
                <button type='button' onClick={() => setShowLogin((prev) => !prev)} className='flex items-center justify-center gap-2'>
                  <span>Join us</span>
                  <span>
                    <svg className={`${showLogin ? 'rotate-180': ''} transition`} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.675 12.4C9.775 12.5 9.88333 12.55 10 12.55C10.1167 12.55 10.225 12.5 10.325 12.4L12.75 9.975C12.9 9.825 12.9377 9.65833 12.863 9.475C12.7877 9.29167 12.6417 9.2 12.425 9.2H7.575C7.35833 9.2 7.21233 9.29167 7.137 9.475C7.06233 9.65833 7.1 9.825 7.25 9.975L9.675 12.4ZM10 19.5C8.68333 19.5 7.446 19.25 6.288 18.75C5.12933 18.25 4.125 17.575 3.275 16.725C2.425 15.875 1.75 14.8707 1.25 13.712C0.75 12.554 0.5 11.3167 0.5 10C0.5 8.68333 0.75 7.44567 1.25 6.287C1.75 5.129 2.425 4.125 3.275 3.275C4.125 2.425 5.12933 1.75 6.288 1.25C7.446 0.75 8.68333 0.5 10 0.5C11.3167 0.5 12.5543 0.75 13.713 1.25C14.871 1.75 15.875 2.425 16.725 3.275C17.575 4.125 18.25 5.129 18.75 6.287C19.25 7.44567 19.5 8.68333 19.5 10C19.5 11.3167 19.25 12.554 18.75 13.712C18.25 14.8707 17.575 15.875 16.725 16.725C15.875 17.575 14.871 18.25 13.713 18.75C12.5543 19.25 11.3167 19.5 10 19.5ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z" fill="rgba(90,11,77,1)"></path></svg>
                  </span>
                </button>
                <div className={`${showLogin ? '' : 'hidden'} bg-white border fixed right-7 top-20 border-purple-200 rounded-lg w-[250px] py-4 px-6`}>
                  <div>
                    <h4 className='font-semibold'>Status Advertisers</h4>
                    <Link href='login' className=''>
                      <span className='p-2 rounded-lg flex justify-between items-center hover:bg-primary-color hover:text-white text-primary-color'>
                        <span>Login</span>
                        <span>
                          <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><path d="M0.525469 9.21862L3.92047 5.50029L0.525469 1.78195C0.184219 1.4082 0.184219 0.804453 0.525469 0.430703C0.866719 0.0569531 1.41797 0.0569531 1.75922 0.430703L5.77547 4.82945C6.11672 5.2032 6.11672 5.80695 5.77547 6.1807L1.75922 10.5795C1.41797 10.9532 0.866719 10.9532 0.525469 10.5795C0.192969 10.2057 0.184219 9.59237 0.525469 9.21862Z" fill="currentColor"></path></svg>
                        </span>
                      </span>
                      
                    </Link>
                    <Link href='login' className= ''>
                      <span className='p-2 rounded-lg flex justify-between items-center hover:bg-primary-color text-primary-color hover:text-white'>
                        <span>Register</span>
                        <span>
                          <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><path d="M0.525469 9.21862L3.92047 5.50029L0.525469 1.78195C0.184219 1.4082 0.184219 0.804453 0.525469 0.430703C0.866719 0.0569531 1.41797 0.0569531 1.75922 0.430703L5.77547 4.82945C6.11672 5.2032 6.11672 5.80695 5.77547 6.1807L1.75922 10.5795C1.41797 10.9532 0.866719 10.9532 0.525469 10.5795C0.192969 10.2057 0.184219 9.59237 0.525469 9.21862Z" fill="currentColor"></path></svg>
                        </span>
                      </span> 
                    </Link>
                  </div>
                  <div>
                    <h4 className='font-semibold'>Advetisers</h4>
                    <div className='p-2'>
                      <button className='purple_btn gap-3 '>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                          </svg>

                        </span>
                        <span className='font-medium'>
                          Contact Us
                        </span>
                      </button>

                    </div>
                  </div>

                </div>
              {/* </div>
               */}
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex items-center'>
              <div onClick={() => {setShowNav((prev)=> !prev)}} className={`  flex items-center`}>
                <span className='three_bar gap-4'>
                  <i className={`${showNav? 'bar_before':''}  bar`}></i>
                  <i className={`${showNav? 'opacity-0':''}  bar`}></i>
                  <i className={`${showNav? 'bar_after':''}  bar`}></i>
                </span>
              </div>
              <div className={`${showNav ? '':'hidden'} fixed left-0 flex flex-col space-y-5 top-20 bg-white w-full px-10 py-5`}>
                <div className='flex flex-col space-y-5'>
                  <Link href="/howitworks">How it works</Link>
                  <Link href="faqs">FAQs</Link>
                </div>
                <button className='purple_btn w-full'>Login</button>
                <button className='purple_btn gap-3  w-full'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                    </svg>

                  </span>
                  <span className='font-medium'>
                    Contact Us
                  </span>
                </button>
                <div className='flex flex-col space-y-5'>
                  <div className='flex flex-col space-y-5'>
                    <h4 className='font-semibold'>Status Advertisers</h4>
                    <Link href='login' className=''>
                      <span className=' rounded-lg flex justify-between items-center hover:bg-primary-color hover:text-white text-primary-color'>
                        <span>Login</span>
                        <span>
                          <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><path d="M0.525469 9.21862L3.92047 5.50029L0.525469 1.78195C0.184219 1.4082 0.184219 0.804453 0.525469 0.430703C0.866719 0.0569531 1.41797 0.0569531 1.75922 0.430703L5.77547 4.82945C6.11672 5.2032 6.11672 5.80695 5.77547 6.1807L1.75922 10.5795C1.41797 10.9532 0.866719 10.9532 0.525469 10.5795C0.192969 10.2057 0.184219 9.59237 0.525469 9.21862Z" fill="currentColor"></path></svg>
                        </span>
                      </span>
                      
                    </Link>
                    <Link href='login' className= ''>
                      <span className=' rounded-lg flex justify-between items-center hover:bg-primary-color text-primary-color hover:text-white'>
                        <span>Register</span>
                        <span>
                          <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><path d="M0.525469 9.21862L3.92047 5.50029L0.525469 1.78195C0.184219 1.4082 0.184219 0.804453 0.525469 0.430703C0.866719 0.0569531 1.41797 0.0569531 1.75922 0.430703L5.77547 4.82945C6.11672 5.2032 6.11672 5.80695 5.77547 6.1807L1.75922 10.5795C1.41797 10.9532 0.866719 10.9532 0.525469 10.5795C0.192969 10.2057 0.184219 9.59237 0.525469 9.21862Z" fill="currentColor"></path></svg>
                        </span>
                      </span> 
                    </Link>
                  </div>
                  <div className='flex flex-col space-y-5'>
                    <h4 className='font-semibold'>Business/Brand</h4>
                    <div className=''>
                      <button className='purple_btn gap-3 w-full '>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                          </svg>

                        </span>
                        <span className='font-medium'>
                          Contact Us
                        </span>
                      </button>

                    </div>
                  </div>

                </div>
                
              </div>

            </div>
        </nav>
    </div>
  )
}

export default Nav