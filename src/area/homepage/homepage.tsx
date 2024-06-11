import logoImage from '../../assets/logo.png';
import fruitsImage from '../../assets/fruits.png';
import juiceImage from '../../assets/juice.png';
import snacksImage from '../../assets/snacks.png';
import sweetsImage from '../../assets/sweets.png';
import essentialsImage from '../../assets/essentials.png';
import giftsImage from '../../assets/gifts.png';
import medalImage from '../../assets/medal.png';
import vendorImage from '../../assets/vendor.png';
import fastDeliveryImage from '../../assets/fast-delivery.png';
import foodImage from '../../assets/food.png';
import logoWithoutBackgroungImage from '../../assets/logo-no-bg.png';
import phoneImage from '../../assets/telephone.png';
import emailImage from '../../assets/email.png';
import facebookImage from '../../assets/facebook.png';
import xImage from '../../assets/twitter.png';
import instagramImage from '../../assets/instagram.png';
import linkedInImage from '../../assets/linkedin.png';
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
import Login from '../login/login';
import { DialogTrigger } from '@/components/ui/dialog';
import { Dialog } from '@radix-ui/react-dialog';

function Homepage() {
  const catalogItems = [
    {
      title: "Fresh Fruits",
      image: fruitsImage, 
    },
    {
      title: "Fresh Juice",
      image: juiceImage,
    },
    {
      title: "Delicious Snacks",
      image: snacksImage,
    },
    {
      title: "Sweets & Deserts",
      image: sweetsImage,
    },
    {
      title: "Daily Essentials",
      image: essentialsImage,
    },
    {
      title: "Exciting Gifts",
      image: giftsImage,
    },
  ];

  const whyItems = [
    {text1: "Quality", text2: "Consistency", image: medalImage},
    {text1: "Single Vendor", text2: "Marketplace", image: vendorImage},
    {text1: "Next Day", text2: "Delivery", image: fastDeliveryImage},
    {text1: "Next Day", text2: "Delivery", image: fastDeliveryImage},
  ];

  const successStoriesItems = [
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien."}
  ];

  const faqItems = [
    {
      id: 1,
      question: "Why is KRAMANK good for my company's operations?",
      answer: "We provide access to a large catalogue of products that you can search / order quickly. A single vendor for all the products companies need, we can fulfill them all. Our prices are competitive and our deliveries are on time."
    },
    {
      id: 2,
      question: "I run a Company. Can I purchase from Kramank?",
      answer: "Absolutely. Kramank is open to anyone that runs a Company, regardless of whether you operate from a single branch or a 100’s of branches(or something in between)."
    },
    {
      id: 3,
      question: "What modes of payment are accepted on Kramank?",
      answer: "We accept online payments through netbanking, credit cards, debit cards, and UPI."
    },
    {
      id: 4,
      question: "What do I do in the event that there are issues with incorrect billing or delivery?",
      answer: "In the event of faulty delivery or any billing related issues, please get in touch with our support team via help@kramank.com and we'll help you resolve the problem at earliest."
    },
    {
      id: 5,
      question: "Can I return an item once it has been purchased?",
      answer: "Any items you want to return (due to quality concerns or anything else) need to be returned at the time of delivery. We do not accept returns once the item has been claimed by the restaurant."
    }
  ]

  const followItems = [
    {
      id: 1,
      name: "Facebook",
      image: facebookImage,
    },
    {
      id: 2,
      name: "X (Formerly Twitter)",
      image: xImage,
    },
    {
      id: 3,
      name: "Instagram",
      image: instagramImage,
    },
    {
      id: 4,
      name: "LinkedIn",
      image: linkedInImage,
    },
  ];

  return (
    <Dialog>
      <div className="h-20 w-full p-4 fixed top-0 flex items-center justify-between shadow-xl bg-white z-10">
        <div className="w-48 cursor-pointer">
          <img src={logoImage} alt="kramank logo" />
        </div>
        <DialogTrigger>
          <Button>
            Login / Signup
          </Button>
        </DialogTrigger>
      </div>
      <div className="mt-24 mb-20 flex items-center justify-center relative">
        <div className="w-11/12 h-[400px] md:h-[525px] bg-[url('/public/homeBG.png')] rounded-3xl shadow-2xl flex justify-center items-center text-white text-3xl text-center font-bold">
          All your corporate needs delivered next day.
        </div>
        <div className="h-20 px-5 py-7 absolute -bottom-10 bg-white rounded-3xl shadow-2xl text-lg font-bold flex items-center justify-center">
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
            <Card className=" mx-5 h-52 w-48 rounded-2xl shadow-2xl flex flex-col items-center justify-around">
              <img src={item.image} alt={item.title} className='h-40 w-44 rounded-xl'/>
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
                <Card className="h-60 w-80 m-5 rounded-3xl shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
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
          <div className="mb-10 w-full flex flex-col sm:flex-row items-center justify-between">
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
      <Login />
    </Dialog>
  )
}

export default Homepage;
