import logoImage from '../../assets/logo.png';
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
import linkedinImage from '../../assets/linkedin.png';
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
import styles from './homepage.module.css';

function Homepage() {
  const navItems = [
    {title: "About", url: "/about"},
    {title: "Contact", url: "/contact"},
  ];

  const whyItems = [
    {text1: "Quality", text2: "Consistency", image: medalImage},
    {text1: "Single Vendor", text2: "Marketplace", image: vendorImage},
    {text1: "Next Day", text2: "Delivery", image: fastDeliveryImage},
  ];

  const successStoriesItems = [
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {image: foodImage, name: "Customer Name", bussinessName: "Bussiness Name", location:"Bangalore, India",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula turpis, mollis et dapibus vitae, venenatis eu ligula. Quisque interdum accumsan est vel iaculis. Fusce cursus id turpis vel elementum. Praesent id placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
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

  return (
    <>
      <div className={styles.topNav}>
        <img src={logoImage} alt="kramank logo" srcSet="" className={styles.logo}/>
        <div className={styles.navItems}>
          {navItems.map((navItem) => (
            <div className={styles.navItem}>
              {
                navItem.title
              }
            </div>
          ))}
          <div className={styles.navItem}>
            <Button>
              Login / Signup
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.artContainer}>
        <div className={styles.artInfo}>A single Vendor solution for your business needs!</div>
        <button className={styles.orderButton}>
          Explore Our Catalog
        </button>
      </div>
      <div className={styles.whyContainer}>
          <div className={styles.whyTitle}>  
            Why Choose Kramank?
          </div>
          <div className={styles.whyItemContainer}>
            {
              whyItems.map((whyItem) => (
                <div className={styles.whyItem}>
                  <img src={whyItem.image} alt={whyItem.text1}/>
                  <span>{whyItem.text1}</span>
                  <span>{whyItem.text2}</span>
                </div>
              ))
            }
          </div>
      </div>
      <div className={styles.successStoriesContainer}>
        <div className={styles.sucessStoriesTitle}>
          Success Stories
        </div>
        <Carousel className={styles.carousal}>
          <CarouselContent className={styles.carousalContent}>
           {
            successStoriesItems.map((story, index) => (
              <CarouselItem className={styles.successStoriesItem} key={index}>
                <img src={story.image} alt="Image" className={styles.storyImage}/>
                <div className={styles.storyInfo}>
                  <span>{story.description}</span>
                  <div>{story.name}</div>
                  <span>{`${story.bussinessName}, ${story.location}`}</span>
                </div>
              </CarouselItem>
            ))
           }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> 
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqTitle}>
          Frequently Asked Questions
        </div>
        <Accordion type="single" collapsible className={styles.faqListContainer}>
          {
            faqItems.map(item => (
              <AccordionItem value={`faq-${item.id}`} key={item.id} className={styles.faqItem}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
      <div className={styles.footerContainer}>
          <div>
            <img src={logoWithoutBackgroungImage} alt="logo" className={styles.footerLogo}/>
            <div className={styles.contactInfo}>
              <div className={styles.address}>
                129, Street Name, Locality Name, City Name - Pincode
              </div>
              <span>
                <img src={phoneImage} alt="phone" />
                +91 1234567890
              </span>
              <span>
                <img src={emailImage} alt="phone" />
                test@test.com
              </span>
            </div>
          </div>
          <div className={styles.copyright}>
            &copy; Copyright All Rights Reserved   
          </div>
          <div className={styles.followContainer}>
            Follow us on
            <ul>
              <li className={styles.followItem}>
                <img src={facebookImage} alt="facebook" /> 
                Facebook
              </li>
              <li className={styles.followItem}>
                <img src={xImage} alt="X" /> 
                X (Formerly Twitter)
              </li>
              <li className={styles.followItem}>
                <img src={instagramImage} alt="Instagram" /> 
                Instagram
              </li>
              <li className={styles.followItem}>
                <img src={linkedinImage} alt="LinkedIn" /> 
                LinkedIn
              </li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Homepage;
