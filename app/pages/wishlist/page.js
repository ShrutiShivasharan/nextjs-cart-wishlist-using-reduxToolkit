"use client"

import { useSelector ,useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { removeFromWishlist } from "@/app/redux/slices/wishlistSlice";


export default function Product() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { wishlistItems } = useSelector(state => state.wishlist);
  const handleToCart = (product) => {
    dispatch(addToCart(product));
    router.push('/pages/cart');
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.length ? wishlistItems.map((product) => (
          <div key={product.id} className="border p-4 roundede">
            <h2 className="text-3xl">{product.name}</h2>
            <p className="text-xl">Rs.{product.price}</p>
            <div className="flex gap-2 mt-3">
              <button onClick={()=> handleToCart(product)} className="bg-blue-500 text-white px-4 py-1 rounded">Add to Cart</button>
              <button onClick={() => dispatch(removeFromWishlist(product.id))}  className="bg-pink-500 text-white px-4 py-1 rounded">Remove</button>
            </div>
          </div>
        )): (
          <p className="text-3xl text-red-500">Your wishlist is empty!!</p>
        )}
      </div>
    </>
  );
}
