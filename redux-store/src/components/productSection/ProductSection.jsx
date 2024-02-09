import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

export default function ProductSection() {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-3 justify-center py-8 mx-auto max-w-7xl">
          {storeData.slice(0, 6).map((product, index) => (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              ></ProductSectionItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
