import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";

export default function FilteredProducts() {
  const products = useSelector((state) => state.products.filteredProducts);
  const { type } = useParams();
  console.log("params", type);

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => (
              <div key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
