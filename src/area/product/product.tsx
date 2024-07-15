import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  getProductDetailsApi,
  getProductOptionsApi,
  getProductImagesApi,
} from "./product.api";
import { useSelector } from "react-redux";
import { tokenSelector } from "../login/state/login.selector";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import {
  ProductOptionsType,
  ProductDetailsType,
  ProductImageType,
} from "./product.types";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CurrencyDisplay from "../common/currency-dispaly";

type ProductsCardPropsType = {
  product: ProductDetailsType;
  images: ProductImageType[];
};

const ProductCard: React.FC<ProductsCardPropsType> = ({ product, images }) => {
  return (
    <div className="md:max-h-full rounded-lg shadow-lg p-6 flex flex-col bg-white md:overflow-y-auto md:hide-scrollbar">
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
        className="w-full h-64 mb-4"
      >
        <CarouselContent className="px-4">
          {images.map((item) => {
            const imageDataSrc = `data:image/png;base64,${item.image}`;
            return (
              <CarouselItem key={item.productImageId}>
                <img
                  src={imageDataSrc}
                  alt={product.productName}
                  className="h-64 rounded-lg w-full"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-between my-4 items-center">
        <div className="font-bold text-xl text-gray-800">
          {product.productName}
        </div>
        <StarRating rating={4} isInput={false} />
      </div>
      <div className="my-2 flex justify-between items-center">
        <div className="text-center font-bold text-lg text-green-600 mb-2">
          &#8377;
          <CurrencyDisplay amount={product.price} />
        </div>
        {product.isCustom ? (
          <div className="text-center mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Send Enquiry
            </button>
          </div>
        ) : (
          <div className="text-center mb-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
              Add to cart
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="font-bold text-lg text-gray-800">Description</div>
        <div className="text-gray-600 mb-2">{product.description}</div>
      </div>
    </div>
  );
};

type StarRatingPropsType = {
  rating: number;
  isInput?: boolean;
  onRatingChange?: (rating: number) => void;
};

const StarRating: React.FC<StarRatingPropsType> = ({
  rating,
  isInput = false,
  onRatingChange = () => {},
}) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    if (isInput) setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (isInput) setHoverRating(0);
  };

  const handleClick = (index: number) => {
    if (isInput) onRatingChange(index);
  };

  const starSizeClass = isInput ? "w-8 h-8" : "w-5 h-5";

  return (
    <div className="flex items-center space-x-1">
      {/* {!isInput && <span className="mx-1">{rating}</span>} */}
      {[1, 2, 3, 4, 5].map((index) => (
        <svg
          key={index}
          className={`${starSizeClass} cursor-pointer ${
            (hoverRating || rating) >= index
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.02 3.146a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.296c.308.946-.755 1.718-1.54 1.187l-2.846-1.902a1 1 0 00-1.118 0l-2.846 1.902c-.785.53-1.849-.24-1.54-1.187l1.07-3.296a1 1 0 00-.364-1.118L2.432 8.573c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.02-3.146z" />
        </svg>
      ))}
    </div>
  );
};

const FeedbackCard = () => {
  const [rating, setRating] = useState<number>(0);
  const [titleText, setTitleText] = useState<string>("");
  const [descriptionText, setDescriptionText] = useState<string>("");

  return (
    <div className="rounded-lg shadow-lg p-6 bg-white">
      <div className="font-bold text-xl text-gray-800 mb-4">
        Submit Feedback
      </div>
      <div className="flex flex-col items-center mb-6 gap-4">
        <StarRating rating={rating} isInput onRatingChange={setRating} />
        <Input
          type="text"
          placeholder="Title"
          value={titleText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitleText(event.target.value);
          }}
          className="border rounded-lg p-2"
        />
        <Textarea
          placeholder="Description"
          value={descriptionText}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescriptionText(event.target.value);
          }}
          className="h-40 max-h-72 border rounded-lg p-2"
        />
      </div>
      <div className="text-center mb-6">
        <Button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
          Post Feedback
        </Button>
      </div>
      <div className="font-bold text-xl text-gray-800 mb-2">
        Customer Feedbacks
      </div>
      {/* Add code to display feedbacks here */}
    </div>
  );
};

type OptionsCardPropsType = {
  options: ProductOptionsType[];
};

const OptionsCard = ({ options }: OptionsCardPropsType) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionChange = (key: string, value: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [key]: value,
    });
  };

  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      {options.map((option) => (
        <div key={option.key}>
          <div className="font-bold text-lg mb-2">{option.key}</div>
          <div className="flex gap-2 mb-4">
            {option.value.map((item) => (
              <label
                key={item}
                className={`p-2 min-w-16 h-16 cursor-pointer rounded-lg text-center text-wrap flex items-center justify-center
                  ${
                    selectedOptions[option.key] === item
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                onClick={() => handleOptionChange(option.key, item)}
              >
                <input
                  type="radio"
                  name={option.key}
                  value={item}
                  checked={selectedOptions[option.key] === item}
                  onChange={() => handleOptionChange(option.key, item)}
                  className="hidden"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductPage = () => {
  const location = useLocation();
  const productId: number = Number(location.pathname.split("/").at(-1));

  const [product, setProduct] = useState<ProductDetailsType>({
    productId: 0,
    productName: "",
    description: "",
    price: 0,
    isCustom: true,
  });
  const [options, setOptions] = useState<ProductOptionsType[]>([]);
  const [images, setImages] = useState<ProductImageType[]>([]);

  const token = useSelector(tokenSelector);

  const getProductDetails = async () => {
    await getProductDetailsApi(token, productId)
      .then((response) => setProduct(response))
      .catch(() => toast.error("Could not fetch Product Details"));
  };

  const getProductOptions = async () => {
    await getProductOptionsApi(token, productId)
      .then((response) => setOptions(response))
      .catch(() => toast.error("Could not fetch Product Options"));
  };

  const getProductImages = async () => {
    await getProductImagesApi(token, productId)
      .then((response) => setImages(response))
      .catch(() => toast.error("Could not fetch Product Images"));
  };

  useEffect(() => {
    getProductDetails();
    getProductOptions();
    getProductImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto h-[calc(100dvh-90px)] py-2 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto">
      <OptionsCard options={options} />
      <ProductCard product={product} images={images} />
      <FeedbackCard />
    </div>
  );
};

export default ProductPage;
