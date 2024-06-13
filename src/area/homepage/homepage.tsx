import logoImage from '../../assets/logo.png';
import logoWithoutBackgroungImage from '../../assets/logo-no-bg.png';
import { 
  catalogItems, 
  whyItems, 
  successStoriesItems, 
  faqItems,
  followItems, 
 } from './static-data';
import phoneImage from '../../assets/telephone.png';
import emailImage from '../../assets/email.png';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/routes/paths';

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-20 w-full p-4 fixed top-0 flex items-center justify-between shadow-xl bg-white z-10">
        <div className="w-48 cursor-pointer">
          <img src={logoImage} alt="kramank logo" />
        </div>
        <Button className="bg-black" onClick={() => {
          navigate(RoutePath.Login);
        }}>
          Login / Signup
        </Button>
      </div>
      <div className="mt-24 mb-20 flex items-center justify-center relative">
        <div className="w-11/12 h-[400px] md:h-[525px] bg-[url('/public/homeBG.png')] rounded-3xl shadow-2xl flex justify-center items-center text-white text-3xl text-center font-bold">
          A single Vendor solution for your business needs !
        </div>
        <div
          onClick={() => {
            navigate(RoutePath.Login)
          }} 
          className="h-20 px-5 py-7 absolute -bottom-10 bg-white rounded-3xl shadow-2xl text-lg font-bold flex items-center justify-center hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out">
          Explore Our Catalog
        </div>
      </div>
      <div className="flex items-center overflow-hidden pb-20 relative">
        <div className="flex animate-slide">
        {
          catalogItems.map((item) => (
            <Card className=" mx-5 h-52 w-48 rounded-2xl shadow-2xl flex flex-col items-center justify-around">
              <img src={item.image} alt={item.title} className='h-40 w-44 rounded-xl'/>
              <div className="font-bold">
                {item.title}
              </div>
            </Card>
          ))
        }
        </div>
        <div className="flex animate-slide">
        {
          catalogItems.map((item) => (
            <Card className=" mx-5 h-52 w-48 rounded-xl shadow-2xl flex flex-col items-center justify-around">
              <img src={item.image} alt={item.title} className="h-40 w-44 rounded-lg"/>
              <div className="font-bold">
                {item.title}
              </div>
            </Card>
          ))
        }
        </div>
        <div className="absolute top-0 left-0 h-52 w-1/12 bg-gradient-to-r from-neutral-50 z-2"/>
        <div className="absolute top-0 right-0 h-52 w-1/12 bg-gradient-to-l from-neutral-50 z-2"/>
      </div>
      <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">  
            Why Choose Kramank?
          </div>
          <div className="w-11/12 mt-6 flex flex-col items-center justify-center md:flex-row">
            {
              whyItems.map((whyItem) => (
                <Card className="h-60 w-80 m-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img src={whyItem.image} alt={whyItem.text1} className="h-20 w-20 m-4"/>
                  <span>{whyItem.text1}</span>
                  <span>{whyItem.text2}</span>
                </Card>
              ))
            }
          </div>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">
          Success Stories
        </div>
        <Carousel 
          opts={{
            loop: true,
            active: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full sm:w-2/3">
          <CarouselContent className="px-12">
           {
            successStoriesItems.map((story, index) => (
              <CarouselItem 
                key={index}
                className="my-10 p-2 mr-6 shadow-lg rounded-2xl flex flex-col items-center lg:flex-row">
                <img src={story.image} alt="story" className="h-60 object-fit md:h-full md:w-60 rounded-xl mb-5 lg:m-0"/>
                <div className="px-6">
                  <span className="text-sm">{story.description}</span>
                  <div className='mt-3 text-lg font-bold'>{story.name}</div>
                  <span className="text-sm">{`${story.bussinessName}, ${story.location}`}</span>
                </div>
              </CarouselItem>
            ))
           }
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex"/>
          <CarouselNext className="hidden md:flex"/>
        </Carousel> 
      </div>
      <div className="my-16 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold mb-6">
          FAQs
        </div>
        <Accordion type="single" collapsible className='w-full md:w-1/2'>
          {
            faqItems.map(item => (
              <AccordionItem 
                value={`faq-${item.id}`} 
                key={item.id} 
                className="m-3 px-3 rounded-2xl shadow-md">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
      <div className="p-4 bg-gray-200/75 flex flex-col items-center justify-center">
          <div className="mb-10 lg:px-24 w-full flex flex-col sm:flex-row items-center justify-between">
            <div>
              <img 
                src={logoWithoutBackgroungImage} 
                alt="logo" 
                className="h-16"/>
              <div className="px-5">
                <div className="mb-2 w-60">
                  129, Street Name, Locality Name, City Name - Pincode
                </div>
                <span className="flex items-center">
                  <img 
                    src={phoneImage} 
                    alt="phone" 
                    className="h-4 mr-4" />
                  +91 1234567890
                </span>
                <span className="flex items-center">
                  <img 
                    src={emailImage} 
                    alt="phone"
                    className="h-4 mr-4" />
                  test@test.com
                </span>
              </div>
            </div>
            <div className="pt-10 sm: pt-3 text-xl font-bold flex flex-col items-center sm:items-start">
              Follow us on
              <ul className='pt-2 flex justify-center sm:block'>
                {
                  followItems.map((item) => 
                    <li key={item.id} className="my-2 flex items-center cursor-pointer" >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-5 mx-2" /> 
                      <span className="text-base font-normal hidden sm:block">{item.name}</span>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <div>
            Copyright&copy; All Rights Reserved   
          </div>
      </div>
    </>
  )
}

export default Homepage;
