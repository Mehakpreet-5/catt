// import React from 'react'

// // function Slider() {
// //   return (
// //     <>
// //     <div className="carousel w-full">
// //   <div id="item1" className="carousel-item w-full">
// //     <img
// //       src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
// //       className="w-full" />
// //   </div>
// //   <div id="item2" className="carousel-item w-full">
// //     <img
// //       src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
// //       className="w-full" />
// //   </div>
// //   <div id="item3" className="carousel-item w-full">
// //     <img
// //       src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
// //       className="w-full" />
// //   </div>
// //   <div id="item4" className="carousel-item w-full">
// //     <img
// //       src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
// //       className="w-full" />
// //   </div>
// // </div>
// // <div className="flex w-full justify-center gap-2 py-2">
// //   <a href="#item1" className="btn btn-xs">1</a>
// //   <a href="#item2" className="btn btn-xs">2</a>
// //   <a href="#item3" className="btn btn-xs">3</a>
// //   <a href="#item4" className="btn btn-xs">4</a>
// // </div></>
// //   )
// // }


// export default Slider


import React from "react";
import Seaa from '../assets/seaa.jpg';
export function Slider() {
  const data = [
    {
      imgelink:
       Seaa,
    },
    {
      imgelink:
      Seaa,
    },
    {
      imgelink:
      Seaa,
    },
    {
      imgelink:
      Seaa,
    },
    {
      imgelink:
      Seaa,
    },  {imgelink:Seaa,},  {imgelink:Seaa,}, {imgelink:Seaa,}, {imgelink:Seaa,},
  ];
 
  const [active, setActive] = React.useState(
   Seaa,
  );
 
  return (
    <>
    
    <div className="grid gap-4 justify-center items-center ml-12 mt-9 ">
      <div className="h-10/12 w-12/12 ">
        <img
          className="h-auto w-full max-w-full
           rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-10 gap-4 mt-3  ml-12 ">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-16 w-20 cursor-pointer rounded-full object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div> </>
  );
}

export default Slider

  