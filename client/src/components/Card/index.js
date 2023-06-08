import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'

import { FaHeart, FaCartArrowDown } from "react-icons/fa";
const productCard = (props) => {
  const router = useRouter();

  return (
 
    <div className="group">
        <div className="w-full h-96 cursor-pointer overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-110 duration-100"
       src={`http://localhost:4000/productAvatar/${props.item._id}`} width="220" height="120" />

       
     </div>
     <div className="w-full border-[1px] px-2 py-4">
     <div className="flex justify-between items-center">
     <div>
        <h2 className="font-titleFont text-base font-bold">{props.item.productName}</h2>
      
      </div>

        <div className="flex justify-end relative gap-2 overflow-hidden w-28 text-sm  ">
      <div className="flex gap-2 transform group-hover:translate-x-24
      transition-transform duration-500">
      <div>
      <p className="font-titleFont text-base font-semibold"> Rs: {props.item.productPrice} </p>
      </div>
      </div>
      <p className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex
      items-center gap-1 top-0 translate-x-32 group-hover:translate-x-0 transition-transform
      cursor-pointer duration-500">
         Add to cart <span><FaCartArrowDown/></span></p>
        </div>
     </div>



     </div>

      </div>
    
    
   
   
  );
};
export default productCard;