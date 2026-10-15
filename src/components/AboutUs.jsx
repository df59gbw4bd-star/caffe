import aboutpiizza from "../assets/aboutpiizza.png";
import minipiizza from "../assets/minipiizza.png";


export default function AboutUs() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 py-16 lg:flex-row">

      <div className="flex-1">

        <h2 className="text-4xl font-bold">
          About us
        </h2>

        <p className="mt-6 max-w-[500px] text-sm leading-6 text-gray-400">
          In just a couple of years, we have opened 6 outlets
          in different cities: Chelyabinsk, Ufa, Samara,
          Izhevsk, and in the future we plan to develop the
          network in other major cities of Russia.
        </p>


        <div className="mt-8 flex gap-2">
          <img
            src={minipiizza}
            alt="Pizza"
            className="h-16 w-16 rounded-full object-cover"
          />

          <img
            src={minipiizza}
            alt="Pizza"
            className="h-16 w-16 rounded-full object-cover"
          />

          <img
            src={minipiizza}
            alt="Pizza"
            className="h-16 w-16 rounded-full object-cover"
          />

          <img
            src={minipiizza}
            alt="Pizza"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        <p className="mt-8 max-w-[500px] text-sm leading-6 text-gray-400">
          The kitchen of each point is at least 400-500 sq. m.
          meters, hundreds of employees, smoothly performing
          work in order to receive / prepare / form / deliver
          customer orders on time.
        </p>

      </div>



      <div className="flex-1">

        <img
          src={aboutpiizza}
          alt="Pizza"
          className="w-full rounded-3xl object-cover"
        />


      </div>

    </section>
  );
}