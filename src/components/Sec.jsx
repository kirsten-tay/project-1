 import React, { Fragment } from 'react';
import image from './../Assets/image.jpg';
import PaymentSvg from './PaymentSvg';

 
const Sec=(Sec)=>{
    return(
        <Fragment>
        <div className="flex flex-row">
            <div className="flex flex-1 justify-begin items-center">
                        <img src={image} alt={"body"} />
                    </div>

             <div className="flex flex-col flex justify-around   py-3 px-40  items-center">
                    <div className=" flex flex-row" >
                      <div className=" flex flex-col justify-begin px-5">  <PaymentSvg /></div>
                      <div className=" flex flex-col justify-begin px-5"> 
                        <span className="font-bold text-xl">PAYMENTS</span>
                        <span>Lorem ipsum dolor sit amet consectetur.</span></div>

                    </div>
                   
                    <div className="flex flex-row">
                    <div className=" flex flex-col justify-begin px-5"> <PaymentSvg /> </div>
                    <div className=" flex flex-col justify-begin px-5"> 
                        <span className="font-bold text-xl">Link your bank account</span>
                        <span>Lorem ipsum dolor sit amet consectetur </span> </div>
                    </div>
                    <div className="flex flex-row" >
                    <div className=" flex flex-col justify-begin px-5"> <PaymentSvg /> </div>
                    <div className=" flex flex-col justify-begin px-5"> 
                        <span className="font-bold text-xl">Start buying & selling</span>
                        <span>Lorem ipsum dolor sit amet consectetuer.</span>
                            </div>
                    </div>
                </div>
             
            
        
        </div>
        </Fragment>

    )
}



export default Sec;