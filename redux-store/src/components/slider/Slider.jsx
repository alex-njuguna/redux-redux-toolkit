import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/SliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";

export default function Slider() {
  const sliderIndex = useSelector((state) => state.slider.value);
  console.log(sliderIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === sliderIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(item.id) === sliderIndex && (
                <img className="w-full lg:h-[850px]" src={item.img} alt="shoes" />
              )}
            </div>
            <div className="absolute top-44 mx-auto inset-x-1/4">
              <p className="text-4xl text-white font-bold">
                {parseInt(item.id) === sliderIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => (
          <div className="mr-4" key={dot.id}>
            <div
              className={
                index === sliderIndex
                  ? "bg-green-300 rounded-full p-4 cursor-pointer"
                  : "bg-white rounded-full p-4 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>

      <div>
        <button className="absolute top-[50%] bg-white right-4 rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(nextSlide(sliderIndex + 1))}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="absolute top-[50%] bg-white left-4 rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(prevSlide(sliderIndex - 1))}>
        <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </div>
  );
}
