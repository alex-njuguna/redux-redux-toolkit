import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../../features/slices/CartSlice";

export default function Cart({ openModal, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0 overflow-auto"
            style={{ maxHeight: "650px" }}
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => (
                <div key={index} className="grid grid-cols-2 py-4">
                  <div>
                    <img
                      className="h-[125px] rounded-md"
                      src={item.img}
                      alt={item.name}
                    />
                    <h4 className="text-black text-base font-bold tracking-normal leading-none pt-2">
                      {item.name}
                    </h4>
                    <p className="text-black text-xs tracking-normal leading-none pt-2">
                      {item.text}
                    </p>
                  </div>
                  <div className="pl-4">
                    <p className="text-black text-sm tracking-normal leading-none pt-2">
                      selected size: <span className="ml-2">{item.size}</span>
                    </p>
                    <p className="text-black text-sm tracking-normal leading-none pt-2">
                      selected color:{" "}
                      <span
                        className="ml-2 rounded-full px-2"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </p>
                    <p className="text-black text-sm tracking-normal leading-none pt-2">
                      amount: <span className="ml-2">{item.amount}</span>
                    </p>
                    <p className="text-black text-sm tracking-normal leading-none pt-2">
                      single item price:{" "}
                      <span className="ml-2">{item.price}</span>
                    </p>
                    <p className="text-black text-sm tracking-normal leading-none pt-2">
                      total item price:{" "}
                      <span className="ml-2">{item.totalPrice}</span>
                    </p>
                    <div className="pt-4">
                      <Tooltip
                        content="remove from the cart"
                        placement="bottom"
                      >
                        <Button
                          onClick={() => dispatch(removeFromCart(item))}
                          size="sm"
                          color="red"
                          variant="filled"
                          ripple={true}
                        >
                          <i className="fa-solid fa-trash fa-2x"></i>
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              ))}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-lg tracking-normal leading-none pt-2">
                Total Price: <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div className="text-center">
                <h1 className="text-black text-3xl font-bold tracking-normal leading-none py-4">
                  Your bag is empty
                </h1>
                <p className="text-blue-800 text-base tracking-normal leading-none">
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
}
