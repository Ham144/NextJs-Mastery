import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="text-center flex justify-between px-9 bg-blue-100 py-3 rounded-b-lg mx-8 drop-shadow-lg">
        <div>icon</div>
        <div className="link-container flex gap-5 font-bold ">
          <Link href="/home">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/portofolio">portofolio</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
