import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/images/logo.png";
import Cart from "../cart/Cart";


export default function Navbar() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-bold text-center text-2xl leading-none tracking-none">
          Welcome All
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img src={logo} alt="store" className="h-28 w-full" />
        </div>
        <div className="flex flex-row items-center">
          <button className="text-xl font-bold tracking-normal leading-none text-center mr-4">
            Logout
          </button>
          <div className="flex flex-row items-center mr-2">
            <i className="fa-regular fa-heart mr-1" aria-hidden="true"></i>
            <p>Wish List</p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <i
                className="fa-solid fa-bag-shopping mr-2 pl-3"
                aria-hidden="true"
              ></i>
            )}
            <p>Shopping bag</p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
        </div>
      </div>

      <div className="bg-black p-4 w-full flex justify-around">
        <div className="text-white font-medium text-base tracking-normal leading-none text-center">
          50% OFF
        </div>
        <div className="text-white font-medium text-base tracking-normal leading-none text-center">
          Free Shipping and Returns
        </div>
        <div className="text-white font-medium text-base tracking-normal leading-none text-center">
          Different Payment Methods
        </div>
      </div>
    </>
  );
}
