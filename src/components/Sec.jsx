 import react, { Fragment } from 'react';
import image from './../Assets/image.jpg';
import photoSvg from './photoSvg';
 
const Sec=(Sec)=>{
    return(
        <Fragment>
        <div className="flex flex-row">
            <div className="flex flex-1 justify-begin items-center">
                        <img src={image} className="h-full"/>
                    </div>

             <div className="flex-1 px-20 py-16">
             <div className="flex justify-around  flex-col items-center">
                    <div className="flex-row" >
                      <div className=" flex flex-col h-32 justify-between">  <photoSvg /></div>
                        <span className="font-bold text-xl">Create account</span>
                    </div>
                   
                    <div className="flex row">
                        <photoSvg />
                        <span className="font-bold text-xl">Link your bank account</span>
                    </div>
                    <div >
                        <imgSvg />
                        <span className="font-bold text-xl">Start buying & selling</span>
                    </div>
                </div>
             </div>
            
        
        </div>
        </Fragment>

    )
}



export default Sec;