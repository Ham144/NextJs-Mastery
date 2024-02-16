"use client";
import React from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const goto = (target) => {
    router.push(target);
  };

  const redirectTo = (akun) => {
    return !akun[notFound]
      ? goto("/registerlogin/login")
      : goto(`profil/${akun}`);
  };
  return (
    <nav>
      <ul className="text-center flex justify-between px-9 bg-blue-100 py-3 rounded-b-lg mx-8 drop-shadow-lg">
        <div>icon</div>
        <div className="link-container flex gap-5 font-bold ">
          <Link href="/home">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/portofolio">portofolio</Link>
          <button
            className="button-primer"
            onClick={() => redirectTo("ham145")}
          >
            Register login
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
