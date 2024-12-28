import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex justify-center">
      <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
      <div className="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
      <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-primary-dark-blue pb-5">
              Pay With Ease
            </h1>
            <p className="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
         <div className="flex justify-center lg:justify-start gap-10  ">
         <button 
          onClick={()=>{
            window.location.href = 'https://apps.apple.com/us/app/prive-pay/id6478652365';
          }}
         className="max-w-[150px] min-w-[150px]  w-[150px]  rounded-full hover:scale-125 transition-all text-neutral-white text-xs bg-gradient-to-r  hover:button-brightness mb-7 focus:outline-none ">
             <img src="/appleios.svg" className="max-w-[150px] w-[150px] min-w-[150px]" alt="arrow" />
            </button> 
            <button 
            onClick={()=>{
              window.location.href = 'https://play.google.com/store/apps/details?id=com.privepay&pcampaignid=web_share';
            }}
            className="max-w-[150px] w-[150px] min-w-[150px] scale-125  rounded-full hover:scale-150 transition-all text-neutral-white text-xs bg-gradient-to-r  hover:button-brightness mb-7 focus:outline-none f">
             <img src="/play.png" alt="arrow"  className="max-w-[150px] w-[150px] min-w-[150px]"/>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
