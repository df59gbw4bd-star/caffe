import howWe from "../assets/how we.png";
import ourBlog from "../assets/our blog.png";
import kitchen from "../assets/kitchen.png";
import two from "../assets/two.png";
import instagram from "../assets/instagram.png";
import coffe from "../assets/coffe.png";





export default function Events() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16">

      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold">
            Events
          </h2>

          <p className="mt-3 max-w-[350px] text-sm text-gray-400">
            There are regular events in our pizzeria that will
            allow you to eat delicious food for a lower price!
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        <div className="relative h-[180px] overflow-hidden rounded-2xl">
          <img
            src={howWe}
            alt="How we cooking"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-5">

            <h3 className="text-xl font-bold">
              HOW WE COOKING
            </h3>

            <button className="mt-4 w-fit rounded-full bg-orange-500 px-8 py-2 text-sm">
              More
            </button>

          </div>
        </div>


        <div className="relative h-[180px] overflow-hidden rounded-2xl">
          <img
            src={ourBlog}
            alt="Our blog"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-5">

            <h3 className="text-xl font-bold">
              OUR BLOG
            </h3>

            <button className="mt-4 w-fit rounded-full bg-orange-500 px-8 py-2 text-sm">
              More
            </button>

          </div>
        </div>




        <div className="relative h-[180px] overflow-hidden rounded-2xl">
          <img
            src={ourBlog}
            alt="Our blog"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-5">

            <h3 className="text-xl font-bold">
              WHERE ARE YOU CHOOSE US?</h3>

            <button className="mt-4 w-fit rounded-full bg-orange-500 px-8 py-2 text-sm">
              More
            </button>

          </div>
        </div>





        <div className="relative h-[180px] overflow-hidden rounded-2xl">
          <img
            src={kitchen}
            alt="Kitchen tour"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-5">

            <h3 className="text-xl font-bold">
              KITCHEN TOUR
            </h3>

            <button className="mt-4 w-fit rounded-full bg-orange-500 px-8 py-2 text-sm">
              More
            </button>

          </div>
        </div>


        <div className="relative h-[180px] overflow-hidden rounded-2xl">
          <img
            src={coffe}
            alt="Free coffee"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-5">

            <h3 className="text-xl font-bold">
              FREE COFFEE FOR 3 PIZZA
            </h3>

            <button className="mt-4 w-fit rounded-full bg-orange-500 px-8 py-2 text-sm">
              More
            </button>

          </div>
        </div>


        <div className="relative h-[180px] overflow-hidden rounded-2xl">
          <img
            src={instagram}
            alt="Instagram"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-5">

            <h3 className="text-xl font-bold">
              OUR INSTAGRAM
            </h3>

            <button className="mt-4 w-fit rounded-full bg-orange-500 px-8 py-2 text-sm">
              More
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}