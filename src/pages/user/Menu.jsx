import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../api/axios";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data } = await API.get("/menu");

        setMenu(data.data || data);
      } catch (err) {
        setError(`failed to load menu ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleAddToCart = async (menuId) => {
    try {

        await API.post("/cart/add" , {
            menuId,
            quantity:1,
        })

        alert("Added to cart");
        
    } catch (error) {
        alert("Failed to Add")
    }
  }

  if (loading) return <p className="p-4">Loading menu...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {menu.map((item) => (
        <div key={item._id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{item.name}</h3>

          <p className="mt-3 bg-blue-600">${item.price}</p>

          <button
           onClick={() => handleAddToCart(item._id)}
           className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default Menu;
