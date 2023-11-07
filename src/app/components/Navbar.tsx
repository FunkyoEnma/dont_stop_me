"use client";

import { usePathname } from "next/navigation";
import Image from 'next/image'
import Link from "next/link";


export default function NavBar() {
  let pathname = usePathname() || "/";
  
  return (
    <div id="navBarContainer">
      <nav >
        <div id="navBar" className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">

          <Link href="/"><Image src="/../favicon.ico" width={40} height={40} alt="Home"></Image></Link>
          <Link href="/"><span>Inicio</span></Link>
          <Link href="/talentos"><span>Talentos</span></Link>

          <Link href="/aboutUs"><span>Nosotros</span></Link>

          <Link href="/faqs"><span>FAQ's</span></Link>

          <Link href="/contactUs"><span>Contactenos</span></Link>

        </div>
      </nav>
    </div>
  );
}