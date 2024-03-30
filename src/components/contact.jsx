import React from 'react';
import '../styles/contact.scss';
export default function Contact(){
return(
<>
  <div class="card flex justify-center items-center h-screen">
    <div class="inner relative bg-black w-[900px] sm:w-[1050px] group transition-all duration-700 aspect-video flex items-center justify-center">
      <div class="content transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
        <p class="text-xl sm:text-7xl font-semibold text-gray-500 font-serif">
          Thank You
        </p>
        <p class="px-10 text-[15px] sm:text-[18px] text-gray-900">
          It’s so nice that you had the time to view this Portfolio
        </p>
        <p class="font-serif text-[10px] sm:text-[12px text-gray-700">
          Wishing you a fantastic day ahead!
        </p>
        <p class="font-sans text-[20px] text-gray-700 pt-5">Rahul Bhardwaj</p>
      </div>
      <button class="seal bg-rose-500 text-red-800 w-30 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
        SMKY
      </button>
      <div class="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
      <div class="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
      <div class="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
      <div class="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
    </div>
  </div>



</>
  )

}