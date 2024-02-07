import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Tooltip, Button } from "@material-tailwind/react";

export default function SingleProduct() {
  const product = useSelector((state) => state.products.singleProduct);

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];

  const { id } = useParams();

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => (
          <div key={index} className="flex justify-center items-center py-10">
            <div className="lg:pl-44 grow-[2]">
              <img
                src={item.img}
                alt={item.name}
                className="lg:h-[750px] rounded-lg ml-2"
              />
            </div>
            <div className="grow-[3]  px-16">
              <div className="max-w-lg">
                <h5 className="text-2xl font-bold tracking-normal leading-none pb-4">
                  {item.name}
                </h5>
                <p className="text-orange-700 text-xl font-bold tracking-normal leading-none pb-4">
                  15% OFF
                </p>
                <p className="text-gray-600 text-xl font-bold tracking-normal leading-none pb-4">
                  {item.text}
                </p>
              </div>
              {item.size ? (
                <div>
                  <label
                    htmlFor="size"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick a size
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-orange-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {item.size.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                ""
              )}

              <div className="mt-2">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pick a color
                </label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-orange-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {item.color.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-3">
                <Tooltip content="Add to Cart" placement="bottom">
                  <Button>Add to cart</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
