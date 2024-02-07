import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/ProductsSlice";

export default function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
      <div className="flex items-center justify-center py-8 px-2">
        {buttons.map((button, index) => (
          <div key={index} className="mr-4">
            <Link to={"/filtered-products/" + button}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="px-2 py-2 duration-500 ease-in-out"
                onClick={() => dispatch(filterProducts(button))}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-red-900 text-center font-bold tracking-normal leading-none text-lg">
          SALES UP 50%
        </h3>
      </div>

      <div className="flex align-center justify-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
}
