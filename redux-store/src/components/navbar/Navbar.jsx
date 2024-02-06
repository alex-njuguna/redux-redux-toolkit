import logo from "../../assets/images/logo.png";

export default function Navbar() {
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
          <button className="text-xl font-bold tracking-normal loading-none text-center mr-4">
            Logout
          </button>
          <div className="flex flex-row items-center mr-2">
            <i className="fa-regular fa-heart mr-1"></i>
            <p>Wish List</p>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fa-solid fa-bag-shopping mr-2 "></i>
            <p>Shopping bag</p>
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
