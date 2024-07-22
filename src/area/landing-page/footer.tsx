import logoWithoutBackgroungImage from "../../assets/logo-no-bg.png";
import phoneImage from "../../assets/telephone.png";
import emailImage from "../../assets/email.png";
import { followItems } from "./static-data";
import { Link } from "react-router-dom";
import { RoutePath } from "@/routes/paths";

function Footer() {
  return (
    <div className="p-4 bg-gray-200/75 flex flex-col items-center justify-center">
      <div className="mb-10 lg:px-24 w-full flex flex-col sm:flex-row justify-between">
        <div>
          <img src={logoWithoutBackgroungImage} alt="logo" className="h-16" />
          <div className="px-5">
            <div className="mb-2 w-60">Kramank Energy Pvt. Ltd</div>
            <div className="mb-2 w-60">
              1st Floor, 677, HSR Layout, 27th main, 13th cross SECTOR 1,
              Bengaluru Urban, Karnataka 560102
            </div>
            <div className="mb-2 w-60">GST: 29AAKCK7988E1ZR</div>
            <span className="flex items-center hidden">
              <img src={phoneImage} alt="phone" className="h-4 mr-4" />
              +91 1234567890
            </span>
            <span className="flex items-center">
              <img src={emailImage} alt="phone" className="h-4 mr-4" />
              support@kramank.com
            </span>
          </div>
        </div>
        <div className="sm:hidden my-5 bg-stone-300 w-full h-1 rounded-sm" />
        <div className="pt-10 sm:pt-3 text-xl font-bold flex flex-col items-center sm:items-start">
          Links
          <span className="pt-2 text-base font-normal flex flex-col justify-center">
            <Link to={RoutePath.About}>About</Link>
            <Link to={RoutePath.PrivacyPolicy}>Privacy Policy</Link>
            <Link to={RoutePath.ReturnPolicy}>Return Policy</Link>
            <Link to={RoutePath.TermsAndConditions}>Terms and Conditions</Link>
          </span>
        </div>
        <div className="pt-10 sm:pt-3 text-xl font-bold flex flex-col items-center sm:items-start">
          Follow us on
          <span className="pt-2 flex justify-center sm:block">
            {followItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="my-2 flex items-center"
              >
                <img src={item.image} alt={item.name} className="h-5 mx-2" />

                <span className="text-base font-normal hidden sm:block">
                  {item.name}
                </span>
              </Link>
            ))}
          </span>
        </div>
      </div>
      <div>Copyright &copy; All Rights Reserved</div>
    </div>
  );
}

export default Footer;
