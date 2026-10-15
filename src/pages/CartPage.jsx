import { useDispatch, useSelector } from "react-redux"; import { Link } from "react-router-dom"; import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart, } from "../redux/cartSlice";
export default function CartPage() {



    const dispatch = useDispatch(); const items = useSelector((state) => state.cart.items);
    const getPrice = (item) => Number(item.price ?? item.cost ?? 0);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + getPrice(item) * item.quantity, 0);



    return (<div className="min-h-screen bg-[#1b0802] px-5 py-16 text-white">
        <div className="mx-auto max-w-[1000px]">
            <h1 className="mb-10 text-4xl font-bold"> Shopping Cart </h1>
            {items.length === 0 ? (
                <div className="rounded-2xl bg-[#260c04] p-8 text-center">
                    <p className="mb-6 text-gray-400">
                        Your cart is empty.
                    </p>

                    <Link
                        to="/menu"
                        className="inline-block rounded-full bg-orange-500 px-8 py-3"
                    >
                        Go to Menu
                    </Link>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col gap-5 rounded-2xl bg-[#260c04] p-5 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <h2 className="text-xl font-bold">
                                        {item.name}
                                    </h2>

                                    <p className="mt-2 text-gray-400">
                                        {getPrice(item)} сом за штуку
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <button
                                        onClick={() =>
                                            dispatch(decreaseQuantity(item.id))
                                        }
                                        className="h-10 w-10 rounded-full border border-orange-500"
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            dispatch(increaseQuantity(item.id))
                                        }
                                        className="h-10 w-10 rounded-full border border-orange-500"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() =>
                                            dispatch(removeFromCart(item.id))
                                        }
                                        className="rounded-full bg-orange-500 px-4 py-2"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <p className="font-bold">
                                    {getPrice(item) * item.quantity} сом
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl bg-[#260c04] p-6">
                        <p className="text-gray-400">
                            Total items: {totalQuantity}
                        </p>

                        <p className="mt-3 text-2xl font-bold">
                            Total: {totalPrice} сом
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="rounded-full border border-orange-500 px-6 py-3"
                            >
                                Clear cart
                            </button>

                            <button
                                disabled={items.length === 0}
                                className="rounded-full bg-orange-500 px-6 py-3 disabled:opacity-50"
                            >
                                Place an order
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
    );
}