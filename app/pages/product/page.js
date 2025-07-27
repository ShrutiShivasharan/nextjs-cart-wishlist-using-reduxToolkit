"use client"

import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { addToWishlist } from "@/app/redux/slices/wishlistSlice";

const products = [
  { id: 1, name: "Phone", price: 200 },
  { id: 2, name: "Laptop", price: 500 },
  { id: 3, name: "Watch", price: 100 },
]

export default function Product() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleToCart = (product) => {
    dispatch(addToCart(product));
    router.push('/pages/cart');
  }

   const handleToWishlist = (product) => {
    dispatch(addToWishlist(product));
    router.push('/pages/wishlist');
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 roundede">
            <h2 className="text-3xl">{product.name}</h2>
            <p className="text-xl">Rs.{product.price}</p>
            <div className="flex gap-2 mt-3">
              <button onClick={()=> handleToCart(product)} className="bg-blue-500 text-white px-4 py-1 rounded">Add to Cart</button>
              <button onClick={()=> handleToWishlist(product)} className="bg-pink-500 text-white px-4 py-1 rounded">Add to Wishliat</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
