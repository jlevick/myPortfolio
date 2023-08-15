import imgT2 from '../assets/image/png/frontend.png';
import imgT3 from '../assets/image/png/sl.png';
import imgPhoto from "../assets/image/png/aspectindex.png";
import imgPhoto1 from "../assets/image/png/jargon.png";
import imgPhoto2 from "../assets/image/png/indexvoice.png";
import imgPhoto3 from "../assets/image/png/benefits.png";


const devWorks2 = [
  {
    brand: `Voice and Tone Development`,
    slug: `voiceandtone`,
    title: `voiceandtone`,
    categories: [`uxwriting`],
    thumbnail: imgPhoto2,
    link: '/slvoice',
  },
  {
    brand: `Clarifying Jargon`,
    slug: `jargon`,
    title: `Clarifying Jargon`,
    categories: [`uxwriting`],
    thumbnail: imgPhoto1,
    link: '/jargon',
  },
  {
    brand: `User-Centered Copy`,
    slug: `user`,
    title: `ux writing`,
    categories: [`uxwriting`],
    thumbnail: imgT3,
    link: '/user',
  },
  {
    brand: `Value Proposition`,
    slug: `valueprop`,
    title: `ux writing`,
    categories: [`uxwriting`],
    thumbnail: imgPhoto3,
    link: '/seans-legacy',
  },
  {
    brand: `Aspect Astrology App`,
    slug: `aspect`,
    title: `astrology app prototype`,
    categories: [`ux`],
    thumbnail: imgPhoto,
    link: '/aspect',
  },
  {
    brand: `Front-End Portfolio`,
    slug: `frontendportfolio`,
    title: `a portfolio within a portfolio`,
    categories: [`webdev`],
    thumbnail: imgT2,
    link: '/front-end-portfolio',
  }
]

export default devWorks2;