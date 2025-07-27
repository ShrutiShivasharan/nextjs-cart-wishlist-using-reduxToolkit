"use client"
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuntity, clearCart } from "@/app/redux/slices/cartSlice";


export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const total = cartItems.reduce((sum,item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl mb-4">Cart</h1>
        {cartItems.length ? cartItems.map((product) => (
          <div key={product.id} className="border p-2 mb-2 flex justify-between">
            <div>
              <h2>{product.name}</h2>
              <p>Rs.{product.price} * {product.quantity} = {product.price * product.quantity}</p>
            </div>
            <div>
              <input type="number" min="1" value={product.quantity} onChange={e => dispatch(updateQuntity({id: product.id , quantity: +e.target.value}))} className="w-16 border px-1" />
              <button onClick={() => dispatch(removeFromCart(product.id))} className="bg-red-500 text-white px-4 py-1 mt-4 ml-2">Remove</button>
            </div>
          </div>
        )) : (
          <h2 className="text-red-500 text-xl">No Items In Cart!!</h2>
        )}
        {cartItems.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mt-4">Total : Rs. {total}</h2>
            <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-4 py-1 mt-4">Remove All</button>
          </div>
        )}
      </div>
    </>
  );
}
