import { useState } from "react"; import { NavLink, Link } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);


  return (
    <header className="bg-[#1b0802] px-5 py-5 text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-orange-500"> pizzashop </Link>



        <nav className="hidden gap-6 md:flex">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-orange-500" : "hover:text-orange-400"}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "text-orange-500" : "hover:text-orange-400"}>Menu</NavLink>
          <NavLink to="/category" className={({ isActive }) => isActive ? "text-orange-500" : "hover:text-orange-400"}>Category</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500" : "hover:text-orange-400"}>About us</NavLink>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <button className="rounded-full border border-orange-500 px-5 py-2">
            Login
          </button>
          <Link to="/cart" className="text-2xl">🛒</Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="text-2xl">🛒</Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-orange-500"
          >
            {open ? "x" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-5 flex flex-col gap-4 md:hidden">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
          <NavLink to="/category" onClick={() => setOpen(false)}>Category</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About us</NavLink>
        </nav>
      )}
    </header>
  );
}