import imgT2 from '../assets/image/png/portfolioindex.png'
import imgT3 from '../assets/image/png/sean1.png'
import imgPhoto from "../assets/image/png/aspectindex.png";


const devWorks2 = [
  {
    brand: `Aspect Astrology App`,
    slug: `aspect`,
    title: `Amazing astrology app for seniors.`,
    categories: [`ux`],
    thumbnail: imgPhoto,
    link: '/aspect',
  },
  {
    brand: `Front-End Portfolio`,
    slug: `frontendportfolio`,
    title: `a portfolio within a portfolio.`,
    categories: [`webdev`],
    thumbnail: imgT2,
    link: '/front-end-portfolio',
  },
  {
    brand: `Sean's Legacy Mentorship Platform: Coming Soon`,
    slug: `seanslegacycontentdesign`,
    title: `coming soon`,
    categories: [`ux`],
    thumbnail: imgT3,
    link: '/seans-legacy',
  }
]

export default devWorks2;