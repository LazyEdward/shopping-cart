import { v4 as uuidv4 } from 'uuid';

export type productTagFormat = "newArrivals" | "limitedOffers" | "rings" | "glasses" | "plants"

export const discountTypeFormat = {
	exact: "exact",
	percentage: "percentage"
}

export type discountFormat = {
	type: string,
	amount: number,
}

export type productPriceFormat = {
	price: number,
	discount?: discountFormat,
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
	{ id: "11b95d5d-0635-45e9-905a-52a0f8b6f24d", tags: ["rings", "newArrivals", "limitedOffers"], pricing : { price: 500, discount: {amount: 90, type: "percentage"} }, title: { titleEn: "MMXX", titleJa: "MMXXレギュラー", titleZhCHT: "MMXX常規" }, description: { descriptionEn: "A product for people love simplicity", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "e6b4d66e-636d-445b-bcbe-be1fefb6c6d1", tags: ["rings", "newArrivals"], pricing : { price: 1350 }, title: { titleEn: "MMXV Special", titleJa: "MMXVスペシャル", titleZhCHT: "MMXV 特別版" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "c9d340de-ade7-46f9-84d5-b1c591d624ea", tags: ["rings", "limitedOffers"], pricing : { price: 780, discount: {amount: 95, type: "percentage"} }, title: { titleEn: "MMXX Gold", titleJa: "MMXXゴールド", titleZhCHT: "MMXX 黃金" }, description: { descriptionEn: "Gold version of MMXX\nSimple and gorgeous", descriptionJa: "MMXXのゴールドバージョン\nシンプルでゴージャス", descriptionZhCHT: "黃金版MMXX\n簡單而華麗" }, img: "https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

const GLASS_PRODUCT_DATA = [
	{ id: "3c3eaba2-b648-48e5-bfd9-bd3cc85b032c", tags: ["glasses"], pricing : { price: 95 }, title: { titleEn: "Black", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg" },
	{ id: "718670ae-772b-4b2b-9949-09010e20c342", tags: ["glasses", "limitedOffers"], pricing : { price: 375, discount: {amount: 285, type: "exact"} }, title: { titleEn: "Couples", titleJa: "カップル", titleZhCHT: "情侶" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "43d6d225-d52d-4918-ab03-f12986c3d2ff", tags: ["glasses", "newArrivals", "limitedOffers"], pricing : { price: 130, discount: {amount: 100, type: "exact"} }, title: { titleEn: "MMXIII", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "5335b559-e08d-4e29-b540-43c92cee347b", tags: ["glasses", "newArrivals"], pricing : { price: 185 }, title: { titleEn: "Blue Reflect", titleJa: "", titleZhCHT: "藍色反射" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg" },
	{ id: "bb66b87b-3816-412c-84f6-a157aa1eccb4", tags: ["glasses"], pricing : { price: 355 }, title: { titleEn: "Couples II", titleJa: "カップル II", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "0f718777-77e7-4ae0-b7b2-b5fa831de933", tags: ["glasses"], pricing : { price: 200 }, title: { titleEn: "Octacles", titleJa: "オクタクルス", titleZhCHT: "" }, description: { descriptionEn: "A fun octagon glasses", descriptionJa: "楽しい八角メガネ", descriptionZhCHT: "有趣的八角眼鏡" }, img: "https://images.pexels.com/photos/1499480/pexels-photo-1499480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "5a11398e-16ea-4d15-b40d-feaf483abcbc", tags: ["glasses"], pricing : { price: 150 }, title: { titleEn: "Active Clear", titleJa: "アクティブクリア", titleZhCHT: "Active敞亮" }, description: { descriptionEn: "A super clear glasses with dust-proof and uv-prevention", descriptionJa: "防塵・UVカットのスーパークリアメガネ", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/261856/pexels-photo-261856.jpeg" },
	{ id: "99edaa01-d31c-4ab9-915e-a90ede279516", tags: ["glasses"], pricing : { price: 107 }, title: { titleEn: "MMXVII Clear", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

const PLANT_PRODUCT_DATA = [
	{ id: "8b41687a-a994-4f82-9fb2-8503d8977bb3", tags: ["plants", "newArrivals", "limitedOffers"], pricing : { price: 300, discount: {amount: 85, type: "percentage"} }, title: { titleEn: "Home Cactus", titleJa: "ホームサボテン", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg" },
	{ id: "c88587d7-e61d-4d0d-a098-898418c54540", tags: ["plants", "newArrivals", "limitedOffers"], pricing : { price: 135, discount: {amount: 90, type: "percentage"} }, title: { titleEn: "Valentine Roses", titleJa: "バレンタインのバラ", titleZhCHT: "情人節玫瑰" }, description: { descriptionEn: "A perfect product of valentine", descriptionJa: "バレンタインの完璧な製品", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg" },
	{ id: "7b1d994d-1aea-4630-8395-6329b0fb380d", tags: ["plants", "limitedOffers"], pricing : { price: 87, discount: {amount: 75, type: "exact"} }, title: { titleEn: "Lily", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "08266874-08ff-44fb-bc6a-7f1372e52e78", tags: ["plants", "limitedOffers"], pricing : { price: 127, discount: {amount: 90, type: "exact"} }, title: { titleEn: "Valentine Roses II", titleJa: "バレンタインのバラ II", titleZhCHT: "" }, description: { descriptionEn: "A perfect product of valentine", descriptionJa: "", descriptionZhCHT: "情人節的完美產物" }, img: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "a34d5b7d-b253-43b3-b5ee-a83ff11f58d9", tags: ["plants"], pricing : { price: 470 }, title: { titleEn: "Floor plant", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "c9312152-091a-4cc9-8902-f9734cbc8562", tags: ["plants", "limitedOffers"], pricing : { price: 850, discount: {amount: 70, type: "percentage"} }, title: { titleEn: "Any 5", titleJa: "いずれか 5 つ", titleZhCHT: "任意五個" }, description: { descriptionEn: "Any 5 small-sized glass plants\nFor a bargain price", descriptionJa: "任意の小型グラスプラント5本\nお買い得価格で", descriptionZhCHT: "任意5個小型玻璃植物\n價格便宜" }, img: "https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
	{ id: "182bfaa2-cabb-48ad-9ea1-c3509447410c", tags: ["plants"], pricing : { price: 1100 }, title: { titleEn: "Colorful 5", titleJa: "カラフル", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg" },
	{ id: "be559cb3-b321-4d2e-acee-4a02f3176bbd", tags: ["plants"], pricing : { price: 97 }, title: { titleEn: "Glass Plant", titleJa: "", titleZhCHT: "" }, description: { descriptionEn: "", descriptionJa: "", descriptionZhCHT: "" }, img: "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

export const PRODUCT_DATA = [...RING_PRODUCT_DATA, ...GLASS_PRODUCT_DATA, ...PLANT_PRODUCT_DATA]