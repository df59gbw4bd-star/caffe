export default function FoodCard({ food }) {
  return (
    <div className="rounded-2xl bg-[#260c04] p-4">

      <div className="overflow-hidden rounded-2xl">
        <img
          src={food.image}
          alt={food.name}
          className="h-[220px] w-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-xl font-bold">
        {food.name}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {food.description}
      </p>

      <p className="mt-3 text-sm text-gray-400">
        {food.category.name}
      </p>

      <button className="mt-4 w-full rounded-full bg-orange-500 py-3">
        Order Now
      </button>

    </div>
  );
}