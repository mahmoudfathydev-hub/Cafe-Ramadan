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
 heading: "Where to Find Us",
 address: "123, Al-Azhar Street. #200, Cairo, Egypt 11511",
 contact: {
	phone: "+20 2 1234 5678",
	email: "hello@egyptiancafe.com",
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
	name: "Karkadeh Royale",
	image: "/images/drink1.png",
	title: "Traditional Hibiscus Elegance",
	description:
	 "Made with fresh hibiscus flowers, mint, and a touch of rose water, this traditional Egyptian drink is perfect for breaking fast. Served chilled with pomegranate seeds for the perfect Ramadan refreshment.",
 },
 {
	id: 2,
	name: "Tamr Hindi Special",
	image: "/images/drink2.png",
	title: "Sweet Tamarind Tradition",
	description:
	 "The Tamr Hindi is a beloved Egyptian classic that balances sweet and tangy tamarind with hints of orange blossom water. Freshly prepared daily and served over crushed ice—it's always refreshing during Iftar.",
 },
 {
	id: 3,
	name: "Ramadan Date Shake",
	image: "/images/drink3.png",
	title: "Energy for Iftar",
	description:
	 "Made with premium Medjool dates, fresh milk, and a pinch of cardamom, this energizing shake provides the perfect start to your Iftar. Topped with crushed nuts and honey for authentic Egyptian flavor.",
 },
 {
	id: 4,
	name: "Violet Ramadan Dream",
	image: "/images/drink4.png",
	title: "Crafted With Egyptian Heritage",
	description:
	 "Each drink is made with traditional Egyptian ingredients and prepared following generations-old recipes, whether you're celebrating Ramadan or enjoying Egyptian hospitality.",
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
