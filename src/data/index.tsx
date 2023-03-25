import { v4 as uuidv4 } from 'uuid';

export type productTagFormat = "newArrivals" | "limitedOffers" | "rings" | "glasses" | "plants"

export type productPriceFormat = {
	price: number,
	discount?: number,
	extraInfo?: string,
}

export type productTitleFormat = {
	titleEn: string,
	titleJa?: string,
	titleZhCHT?: string,
}

export type productDescriptionFormat = {
	descriptionEn?: string,
	descriptionJa?: string,
	descriptionZhCHT?: string,
}

export type productDataFormat = {
	id: string,
	tags: string[],
	title: productTitleFormat,
	description: productDescriptionFormat,
	pricing: productPriceFormat,
	img: string
}

const RING_PRODUCT_DATA = [
	{ id: uuidv4(), tags: ["rings", "newArrivals", "limitedOffers"], pricing : { price: 500 }, title: { titleEn: "MMXX", titleJa: "MMXXレギュラー", titleZhCHT: "MMXX常規" }, description: { descriptionEn: "A product for people love simplicity", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["rings", "newArrivals"], pricing : { price: 1350 }, title: { titleEn: "MMXV Special", titleJa: "MMXVスペシャル", titleZhCHT: "MMXV 特別版" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["rings", "limitedOffers"], pricing : { price: 780 }, title: { titleEn: "MMXX Gold", titleJa: "MMXXゴールド", titleZhCHT: "MMXX 黃金" }, description: { descriptionEn: "Gold version of MMXX\nSimple and gorgeous", descriptionJa: "MMXXのゴールドバージョン\nシンプルでゴージャス", descriptionZhCHT: "黃金版MMXX\n簡單而華麗" }, img: "https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

const GLASS_PRODUCT_DATA = [
	{ id: uuidv4(), tags: ["glasses"], pricing : { price: 95 }, title: { titleEn: "Black", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg" },
	{ id: uuidv4(), tags: ["glasses", "limitedOffers"], pricing : { price: 375 }, title: { titleEn: "Couples", titleJa: "カップル", titleZhCHT: "情侶" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["glasses", "newArrivals", "limitedOffers"], pricing : { price: 130 }, title: { titleEn: "MMXIII", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["glasses", "newArrivals"], pricing : { price: 185 }, title: { titleEn: "Blue Reflect", titleJa: "", titleZhCHT: "藍色反射" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg" },
	{ id: uuidv4(), tags: ["glasses"], pricing : { price: 355 }, title: { titleEn: "Couples II", titleJa: "カップル II", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["glasses"], pricing : { price: 200 }, title: { titleEn: "Octacles", titleJa: "オクタクルス", titleZhCHT: "" }, description: { descriptionEn: "A fun octagon glasses", descriptionJa: "楽しい八角メガネ", descriptionZhCHT: "有趣的八角眼鏡" }, img: "https://images.pexels.com/photos/1499480/pexels-photo-1499480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["glasses"], pricing : { price: 150 }, title: { titleEn: "Active Clear", titleJa: "アクティブクリア", titleZhCHT: "Active敞亮" }, description: { descriptionEn: "A super clear glasses with dust-proof and uv-prevention", descriptionJa: "防塵・UVカットのスーパークリアメガネ", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/261856/pexels-photo-261856.jpeg" },
	{ id: uuidv4(), tags: ["glasses"], pricing : { price: 107 }, title: { titleEn: "MMXVII Clear", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

const PLANT_PRODUCT_DATA = [
	{ id: uuidv4(), tags: ["plants", "newArrivals", "limitedOffers"], pricing : { price: 300 }, title: { titleEn: "Home Cactus", titleJa: "ホームサボテン", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg" },
	{ id: uuidv4(), tags: ["plants", "newArrivals", "limitedOffers"], pricing : { price: 135 }, title: { titleEn: "Valentine Roses", titleJa: "バレンタインのバラ", titleZhCHT: "情人節玫瑰" }, description: { descriptionEn: "A perfect product of valentine", descriptionJa: "バレンタインの完璧な製品", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg" },
	{ id: uuidv4(), tags: ["plants", "limitedOffers"], pricing : { price: 87 }, title: { titleEn: "Lily", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["plants", "limitedOffers"], pricing : { price: 127 }, title: { titleEn: "Valentine Roses II", titleJa: "バレンタインのバラ II", titleZhCHT: "" }, description: { descriptionEn: "A perfect product of valentine", descriptionJa: "", descriptionZhCHT: "情人節的完美產物" }, img: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["plants"], pricing : { price: 470 }, title: { titleEn: "Floor plant", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["plants"], pricing : { price: 850 }, title: { titleEn: "Any 5", titleJa: "いずれか 5 つ", titleZhCHT: "任意五個" }, description: { descriptionEn: "Any 5 small-sized glass plants\nFor a bargain price", descriptionJa: "任意の小型グラスプラント5本\nお買い得価格で", descriptionZhCHT: "任意5個小型玻璃植物\n價格便宜" }, img: "https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: uuidv4(), tags: ["plants"], pricing : { price: 1100 }, title: { titleEn: "Colorful 5", titleJa: "カラフル", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg" },
	{ id: uuidv4(), tags: ["plants"], pricing : { price: 97 }, title: { titleEn: "Glass Plant", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

export const PRODUCT_DATA = [...RING_PRODUCT_DATA, ...GLASS_PRODUCT_DATA, ...PLANT_PRODUCT_DATA]