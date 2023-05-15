import { Link } from "react-router-dom";
import { Product } from "../../types";
import { calculatePercentageOff } from "../../utils";
import { AiFillStar,AiOutlineHeart } from "react-icons/ai";
function ProductCard({ title, category, image, id, price, rating }: Product) {
  const factorOf3 = id % 3 === 0;
  const newPrice = factorOf3 ? calculatePercentageOff(price, 30) : price;
  return (
    <div  className="h-[550px] w-[300px] relative group flex-shrink-0 text-[#1e1d1d]" >
      {factorOf3 && <div className="bg-[#ff3341] p-2 font-semibold text-center absolute top-[50px] left-[5px] text-white">-30%</div>}
      <div className="group-hover:opacity-100 opacity-0 text-[#b183b1bb] bg-[#e4e4e4] absolute p-2 top-[50px] right-[5px]" >
        <AiOutlineHeart/>
      </div>
      <Link to={`/product/${id}`} className="h-[400px] w-full">
      <img src={image} alt={`${title} product poster`} className="h-full w-full object-contain max-h-[400px]" />
      </Link>
        <button className="px-8 py-3 bg-[#0808de] hover:bg-[#ff3341] absolute transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 bottom-[30%] text-white">Add to Cart</button>
      <div className="flex space-x-3 bottom-[-10px] absolute z-[10] h-[80px]  font-bold text-[0.85rem]">
        <div>

        <Link to={`/category/${category}`} className=" capitalize font-medium text-[0.85rem] opacity-70">{category}</Link>
        <p className="font-bold text-[1.25rem] line-clamp-2">{title}</p>
        {factorOf3 ? (
          <p>
            <span className="line-through opacity-60 font-medium mr-4">{"$" + price}</span>
            {"$" + newPrice}
          </p>
        ) : (
          <p>${price}</p>
        )}
        </div>
        <div className="flex space-x text-[#e7b11f]">
          {new Array(((rating.rate * 10) % 5)+1).fill("").map((_, index) => (
            <span key={index} >
              <AiFillStar />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
