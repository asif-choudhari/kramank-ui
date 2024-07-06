import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProductsCardPropsType = {
  imageSrc: string;
  title: string;
  description: string;
  rating: number;
  price: number;
};

const ProductCard = ({
  imageSrc,
  title,
  description,
  rating,
  price,
}: ProductsCardPropsType) => (
  <div className="rounded-lg shadow-md p-4 flex flex-col bg-white overflow-y-auto hide-scrollbar">
    <img
      src={imageSrc}
      alt={title}
      className="h-[300px] rounded-lg w-full object-cover"
    />
    <div className="font-bold text-lg my-4">{title}</div>
    <div className="mb-4">⭐ {rating}</div>
    <div className="my-4 flex justify-between items-center">
      <div className="text-center font-bold text-lg mb-2">
        Rs {price} / T-Shirt
      </div>
      <div className="text-center mb-4">
        <Button>Send Enquiry</Button>
      </div>
    </div>
    <div>
      <div className="font-bold text-lg">Description</div>
      <div className="text-gray-600 mb-2">{description}</div>
    </div>
  </div>
);

const FeedbackCard = () => (
  <div className="rounded-lg shadow-md p-4 bg-white">
    <div className="font-bold text-lg mb-2">Submit Feedback</div>
    <div className="flex flex-col mb-4">
      <Input placeholder="Title" className="mb-2" />
      <Input placeholder="Description" />
    </div>
    <div className="text-center mb-10">
      <Button>Post Feedback</Button>
    </div>
    <div className="font-bold text-lg my-2">Customer Feedbacks</div>
  </div>
);

const OptionsCard = () => (
  <div className="rounded-lg shadow-md p-4 bg-white">
    <div className="font-bold text-lg mb-2">Fabric</div>
    <div className="flex gap-2 mb-4">
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        Cotton
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        Nylon
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        Linen
      </div>
    </div>
    <div className="font-bold text-lg mb-2">Size</div>
    <div className="flex gap-2">
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        S
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        M
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        L
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        XL
      </div>
    </div>
  </div>
);

const ProductPage = () => (
  <div className="mx-auto h-[calc(100dvh-90px)] py-2 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto">
    <OptionsCard />
    <ProductCard
      imageSrc="https://via.placeholder.com/150"
      title="Premium T-Shirts"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      rating={4.5}
      price={1099}
    />
    <FeedbackCard />
  </div>
);

export default ProductPage;
