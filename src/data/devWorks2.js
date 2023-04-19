import imgT2 from '../assets/image/png/portfolioindex.png'
import imgT3 from '../assets/image/png/doesthiswork.png'
import imgPhoto from "../assets/image/png/aspectindex.png"
import imgPhoto1 from "../assets/image/png/writingsamples.png";


const devWorks2 = [
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
  },
  {
    brand: `Sean's Legacy Mentorship Platform`,
    slug: `seanslegacycontentdesign`,
    title: `ux writing`,
    categories: [`uxwriting`],
    thumbnail: imgT3,
    link: '/seans-legacy',
  },
  {
    brand: `Writing Samples`,
    slug: `writingsamples`,
    title: `ux writing samples`,
    categories: [`uxwriting`],
    thumbnail: imgPhoto1,
    link: '/samples',
  }
]

export default devWorks2;