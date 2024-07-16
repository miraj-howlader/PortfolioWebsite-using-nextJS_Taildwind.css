import Link from "next/link";

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookCircleFill,
  RiDribbbleLine,
  RiBehanceLine,
  RiPantoneLine,
} from "react-icons/ri";



const Socials = () => {
  return <div className=" flex items-center gap-x-5 text-lg">
    <Link href={'/'} className=" hover:text-accent transition-all duration-300">
    <RiYoutubeFill />
    </Link>
    <Link href={'/'} className=" hover:text-accent transition-all duration-300">
    <RiInstagramFill />
    </Link>
    <Link href={'/'} className=" hover:text-accent transition-all duration-300">
    <RiFacebookCircleFill />
    </Link>
    <Link href={'/'} className=" hover:text-accent transition-all duration-300">
    <RiDribbbleLine />
    </Link>
    <Link href={'/'} className=" hover:text-accent transition-all duration-300">
    <RiBehanceLine />
    </Link>
    <Link href={'/'} className=" hover:text-accent transition-all duration-300">
    <RiPantoneLine />
    </Link>
  </div>;
};

export default Socials;
