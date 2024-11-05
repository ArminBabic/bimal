import alizinoImg from "../public/assets/alizino.webp";
import homesImg from "../public/assets/homes.webp";
import stecakImg from "../public/assets/stecak2.webp";
import kenanImg from "../public/assets/kenan1.webp";

const data = [
  {
    id: 1,
    image: alizinoImg,
    title: "Alizino Furniture",
    small_details: "Pro photographer,Capturing memories through images.",
    url: "https://www.alizino.com/",
    tech: {
      html: true,
      css: true,
      js: true,
      tailwind: true,
      react: true,
      next: true,
      bootstrap: false,
      firebase: false,
      strapi: false,
      sanity: false,
      axios: false,
    },
  },{
    id: 3,
    image: kenanImg,
    title: "Kenan Photography",
    small_details: "The best tech product for you,all in one place.",
    url: "https://kenan-photography-da69jzjjb-arminbabic.vercel.app/",
    tech: {
      html: true,
      css: true,
      js: true,
      tailwind: true,
      react: true,
      next: true,
      bootstrap: false,
      firebase: false,
      strapi: false,
      sanity: true,
      axios: true,
    },
  },
  {
    id: 4,
    image: homesImg,
    title: "Luxury Houses Agency",
    small_details: "Cryptobase povered by gecko coin.",
    url: "https://luxury-house.vercel.app/",
    tech: {
      html: true,
      css: true,
      js: true,
      tailwind: true,
      react: true,
      next: true,
      bootstrap: false,
      firebase: true,
      strapi: false,
      sanity: false,
      axios: true,
    },
  },
  {
    id: 2,
    image: stecakImg,
    title: "Informativni Portal Stećak",
    small_details: "Luxury Homes Agency.",
    url: "https://web-portal-tiui.vercel.app/",
    tech: {
      html: true,
      css: true,
      js: true,
      tailwind: true,
      react: true,
      next: true,
      bootstrap: false,
      firebase: false,
      strapi: true,
      sanity: false,
      axios: true,
    },
  },
  

  
];

export default data;
