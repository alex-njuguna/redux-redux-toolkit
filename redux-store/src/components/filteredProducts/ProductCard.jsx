import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getSingleProduct } from "../../features/slices/ProductsSlice";

export default function ProductCard({ id, name, text, img, price, colors }) {
  const { type } = useParams();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getSingleProduct(id));
  };

  return (
    <Link to={`/filtered-products/${type}/${id}`}>
      <Card className="mt-6 w-96" onClick={handleClick}>
        <CardHeader color="blue-gray" className="relative h-96">
          <img src={img} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors.map((color, index) => (
              <i
                key={index}
                className=" mt-[3px] p-2 rounded mr-4"
                style={{ backgroundColor: color }}
              ></i>
            ))}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}
