import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "@/redux/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const themeMode = useSelector((state) => state.theme.mode);




  return (
    <header
      className={`py-4 px-6 flex justify-between ${
        themeMode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-2xl font-bold">My Website</h1>

      <div
        className="cursor-pointer relative"
        onClick={() => setShowCart((prev) => !prev)}
      >
        <h3 className="text-right">
          Cart Items: {cartItems.length}
        </h3>

        {showCart && (
          <div className="absolute right-0 mt-2 w-80 bg-white text-black shadow-lg rounded-lg p-4 z-50 max-h-80 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center">No items in cart</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b pb-2 mb-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {item.title.slice(0, 25)}...
                    </p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
       <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 border rounded"
      >
        Switch to {themeMode === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
