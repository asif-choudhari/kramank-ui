import {
  catalogItems,
  whyItems,
  successStoriesItems,
  faqItems,
} from "./static-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { RoutePath } from "@/routes/paths";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-24 mb-20 flex items-center justify-center relative">
        <div className="w-11/12 h-[400px] md:h-[525px] px-1 bg-[url('/homeBG.png')] rounded-3xl shadow-2xl flex justify-center items-center text-white text-3xl text-center font-bold">
          A single Vendor solution for your business needs!
        </div>
        <div
          onClick={() => {
            navigate(RoutePath.Login);
          }}
          className="h-20 px-5 py-7 absolute -bottom-10 bg-white rounded-3xl shadow-2xl text-lg font-bold flex items-center justify-center hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
        >
          Explore Our Catalog
        </div>
      </div>
      <div className="flex items-center overflow-hidden pb-20 relative">
        <div className="flex animate-carousel-slide">
          {catalogItems.map((item) => (
            <Card className=" mx-5 h-52 w-48 rounded-2xl shadow-2xl flex flex-col items-center justify-around">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-44 rounded-xl"
              />
              <div className="font-bold">{item.title}</div>
            </Card>
          ))}
        </div>
        <div className="flex animate-carousel-slide">
          {catalogItems.map((item) => (
            <Card className=" mx-5 h-52 w-48 rounded-xl shadow-2xl flex flex-col items-center justify-around">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-44 rounded-lg"
              />
              <div className="font-bold">{item.title}</div>
            </Card>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-52 w-1/12 bg-gradient-to-r from-neutral-50 z-2" />
        <div className="absolute top-0 right-0 h-52 w-1/12 bg-gradient-to-l from-neutral-50 z-2" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">Why Choose Kramank?</div>
        <div className="w-11/12 mt-6 flex flex-col items-center justify-center md:flex-row">
          {whyItems.map((whyItem) => (
            <Card className="h-60 w-80 m-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={whyItem.image}
                alt={whyItem.text1}
                className="h-20 w-20 m-4"
              />
              <span>{whyItem.text1}</span>
              <span>{whyItem.text2}</span>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">Success Stories</div>
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
          className="w-full sm:w-2/3"
        >
          <CarouselContent className="px-12">
            {successStoriesItems.map((story, index) => (
              <CarouselItem
                key={index}
                className="my-10 p-2 mr-6 shadow-all-sides rounded-2xl flex flex-col items-center lg:flex-row"
              >
                <img
                  src={story.image}
                  alt="story"
                  className="h-60 object-fit md:h-full md:w-60 rounded-xl mb-5 lg:m-0"
                />
                <div className="px-6">
                  <span className="text-sm">{story.description}</span>
                  <div className="mt-3 text-lg font-bold">{story.name}</div>
                  <span className="text-sm">{story.location}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
      <div className="my-16 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold mb-6">FAQs</div>
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          {faqItems.map((item) => (
            <AccordionItem
              value={`faq-${item.id}`}
              key={item.id}
              className="m-3 px-3 rounded-2xl shadow-md"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default Home;
