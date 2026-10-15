import Events from "../components/Events";
import AboutUs from "../components/AboutUs";
import { useState, useEffect } from "react";
import api from "../axios/axios";
import FoodCard from "../components/FoodCard";
import piza from "../assets/piza.png";

export default function HomePage() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      try {
        const res = await api.get("food/");
        setFoods(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getCategories = async () => {
      try {
        const res = await api.get("categories/");
        setCategories(res.data);
        console.log("Категории:", res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFoods();
    getCategories();
  }, []);

  return (
    <div className="bg-[#1b0802] text-white">

      <section className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-10 px-5 py-16 md:flex-row">
        <div className="max-w-[550px]">

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            The Fastest
            <br />
            Pizza Delivery
          </h1>

          <p className="mt-6 max-w-[450px] text-gray-400">
            We will deliver juicy pizza for your family in 30 minutes,
            if the courier is late - pizza is free!
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-full bg-orange-500 px-8 py-3">
              To order
            </button>

            <button className="rounded-full border border-orange-500 px-8 py-3 text-orange-500">
              Pizza Menu
            </button>

          </div>

        </div>

        <img
          src={piza}
          alt="Piza"
          className="w-full max-w-[456px]"
        />

      </section>


      <section className="mx-auto max-w-[1200px] px-5 py-16">

        <h2 className="text-center text-4xl font-bold">
          Menu
        </h2>

<div className="mt-10 flex flex-wrap justify-center gap-4">

  <button className="rounded-full bg-orange-500 px-6 py-3">
    Show All
  </button>

  {categories.map((category) => (
    <button
      key={category.id}
      className="rounded-full border border-orange-500 px-6 py-3"
    >
      {category.name}
    </button>
  ))}

</div>


        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}

        </div>

      </section>

      <Events />

      <AboutUs />

    </div>
  );
}