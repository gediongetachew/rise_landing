import { StaticImageData } from "next/image";
import contec from "../../public/assets/contec.png";
import fia from "../../public/assets/fia.png";
import meiril from "../../public/assets/meiril.png";
import nebula from "../../public/assets/nebula.png";
import radiant from "../../public/assets/radiant.png";
import smi from "../../public/assets/smi.png";
interface brandCards {
  id: number;
  title: string;
  img: StaticImageData;
  url: string;
  alt: string;
}

const cards: brandCards[] = [
  {
    id: 1,
    title: "brand1",
    img: contec,
    url: "/contec.png",
    alt: "bran-img",
  },
  {
    id: 2,
    title: "brand1",
    img: fia,
    url: "/fia.png",
    alt: "bran-img",
  },
  {
    id: 3,
    title: "brand1",
    img: meiril,
    url: "/meiril.png",
    alt: "bran-img",
  },
  {
    id: 4,
    title: "brand1",
    img: nebula,
    url: "/nebula.png",
    alt: "bran-img",
  },
  {
    id: 5,
    title: "brand1",
    img: radiant,
    url: "/radiant.png",
    alt: "bran-img",
  },
  {
    id: 6,
    title: "brand1",
    img: smi,
    url: "/smi.png",
    alt: "bran-img",
  },
];

export default cards;
