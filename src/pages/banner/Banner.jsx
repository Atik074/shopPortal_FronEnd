import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from "../../assets/img.png"
import img2 from "../../assets/imgTwo.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/imh4.png"
import img5 from "../../assets/img5.png"


const imgArray = [img1,img2,img3,img4,img5]

const Banner = ()=>{
    return (
      <div>
      
        <Carousel className="w-full">
         <CarouselContent>
          {imgArray.map((src, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="border-0 shadow-none h-[480px] ">
                 
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-md "
                    />
                
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    );
};

export default Banner;