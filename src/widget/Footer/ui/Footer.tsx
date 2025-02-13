import { Link } from "react-router-dom";
import EmailCard from "./EmailCard";

const Footer = () => {
  return (
    <>
      <EmailCard />
      <div className="max-w-[1440px] w-fit lg:w-full items-center lg:items-start lg:flex-row flex-col flex gap-20">
        <div className="w-full lg:max-w-[250px]">
          <h3 className="font-bold text-3xl">TellNur.shop</h3>
          <span className="text-neutral-400 text-sm">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </span>
        </div>
        <div className="grid grid-cols-2 lg:gap-0 gap-8 lg:flex justify-between w-fit lg:w-full">
          <div className="flex flex-col text-sm">
            <h4 className="uppercase text-base mb-2 font-bold">Company</h4>
            <ul className="flex flex-col gap-4 font-light text-neutral-500">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Works</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-sm">
            <h4 className="uppercase text-base mb-2 font-bold">Help</h4>
            <ul className="flex flex-col gap-4 font-light text-neutral-500">
              <li>
                <Link to="/">Customer Support</Link>
              </li>
              <li>
                <Link to="/">Delivery details</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-sm">
            <h4 className="uppercase text-base mb-2 font-bold">FAQ</h4>
            <ul className="flex flex-col gap-4 font-light text-neutral-500">
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/">Manage Deliveries</Link>
              </li>
              <li>
                <Link to="/">Orders</Link>
              </li>
              <li>
                <Link to="/">Payments</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-sm">
            <h4 className="uppercase text-base mb-2 font-bold">Resources</h4>
            <ul className="flex flex-col gap-4 font-light text-neutral-500">
              <li>
                <Link to="/">Free eBooks</Link>
              </li>
              <li>
                <Link to="/">Development Tutorial</Link>
              </li>
              <li>
                <Link to="/">How to - Blog</Link>
              </li>
              <li>
                <Link to="/">Youtube Playlist</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <span className="-mt-6 lg:text-start text-center pb-12 text-sm text-neutral-400 w-full max-w-[1440px]">
        TellNur.shop © 2000-2023, All Rights Reserved
      </span>
    </>
  );
};

export default Footer;
