import { NestedObject } from "types";

export const zhCHT : NestedObject = {
	test: {
		first: "first"
	},
	general: {
		lang: "語言",
		title: {
			"newArrivals" : "新品上架",
			"limitedOffers" : "限量優惠",
			"rings" : "戒指",
			"glasses" : "眼鏡",
			"plants" : "植物",
		},
		navigation: {
			"home": "主頁",
			"allProducts": "所有產品",
			"bookmarks": "書籤",
			"cart": "購物車",
		},		
		options: {
			"noOptions" : "沒有可用的選項",
			"more": "更多的",
		},
		search: {
			"suggestion": "更多產品"
		},
		empty: {
			"products": "沒有現有產品"
		},
		button: {
			"prev": "返回",
			"next": "下一個",
			"confirm": "確認",
		}
	},
	dashboard: {

	},
	allProducts: {
		"title": "所有"
	},
	bookmarks: {
		"title": "書籤",
	},
	cart: {
		"title": "購物車",
		"proceed": {
			"total": "總額: ",
			"button": "立即購買",
		},
		"payment": {
			"productPrice": "產品總額: ",
			"deliveryCharge": "送貨費用: ",
			"Redemption": "兌換: ",
			"method": "付款方式",
			"cash": "現金（抵達時付款）",
			"creditCard": "信用卡",
			"deliver": "交付",
			"instore": "門市自提",
		},
		"cash": {
			"message": "請在店內或貨到現金付款"
		},
		"creditCard": {
			"acceptedCreditCard": "接受的信用卡",
			"name": "持卡人姓名",
			"number": "卡號",
			"expireDate": "到期日",
			"cvc": "CVC",
			"example": {
				"name": "e.g. 陳大雲",
				"number": "e.g. 0000 0000 0000 0000",
				"expireDate": "e.g. 09/30",	
			}
		}
	},
	productDetails: {
		"price": "目前價格:",
		"description": "產品描述:",
		"bookmarks": {
			"add": "加入書籤",
			"remove": "從書籤中移除",
		},
		"cart": {
			"add": "加入購物車",
			"remove": "從購物車中移除",
		},
	},
}