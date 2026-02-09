const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Karkadeh Bliss",
    country: "EG",
    detail: "Fresh hibiscus",
    price: "45 EGP",
  },
  {
    name: "Tamr Hindi",
    country: "EG",
    detail: "Tamarind fresh",
    price: "35 EGP",
  },
  {
    name: "Sobia Delight",
    country: "EG",
    detail: "Coconut rice milk",
    price: "40 EGP",
  },
  {
    name: "Erq Sous",
    country: "EG",
    detail: "Licorice drink",
    price: "30 EGP",
  },
];

const mockTailLists = [
  {
    name: "Ramadan Sunset",
    country: "EG",
    detail: "Pomegranate mint",
    price: "50 EGP",
  },
  {
    name: "Iftar Special",
    country: "EG",
    detail: "Date & walnut",
    price: "55 EGP",
  },
  {
    name: "Nile Breeze",
    country: "EG",
    detail: "Lemon ginger",
    price: "45 EGP",
  },
  {
    name: "Cairo Nights",
    country: "EG",
    detail: "Rose & cardamom",
    price: "60 EGP",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Traditional Egyptian recipes",
  "Fresh Ramadan ingredients",
  "Prepared with prayer & care",
  "Authentic Middle Eastern flavors",
];

const goodLists = [
  "Handpicked local ingredients",
  "Traditional preparation methods",
  "Egyptian bartending expertise",
  "Freshly prepared daily",
];

const storeInfo = {
  heading: "Get In Touch",
  address: "Kafr El-Dawar, El Beharia, Egypt",
  contact: {
    phone: "+20 120 048 1281",
    email: "mahmoudfathy.dev@gmail.com",
  },
};

const openingHours = [
  { day: "Sat–Wed", time: "4:00pm – 2:00am" },
  { day: "Thu–Fri", time: "4:00pm – 3:00am" },
  { day: "Ramadan", time: "Iftar – Suhoor" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
