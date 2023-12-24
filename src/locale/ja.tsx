import { NestedObject } from "types";

export const ja : NestedObject = {
	test: {
		first: "初め"
	},
	general: {
		lang: "言語",
		title: {
			"newArrivals" : "新着",
			"limitedOffers" : "限定オファー",
			"rings" : "リング",
			"glasses" : "眼鏡",
			"plants" : "植物",
		},
		navigation: {
			"home": "ホーム",
			"allProducts": "すべての商品",
			"bookmarks": "ブックマーク",
			"cart": "カート",
		},		
		options: {
			"noOptions" : "利用可能なオプションはありません",
			"more": "その他の",
		},
		search: {
			"suggestion": "もっと製品を探す"
		},
		empty: {
			"products": "既存の製品はありません"
		},
		button: {
			"prev": "戻る",
			"next": "次",
			"confirm": "確認",
		}
	},
	dashboard: {

	},
	allProducts: {
		title: "すべての"
	},
	bookmarks: {
		"title": "ブックマーク",
	},
	cart: {
		"title": "カート",
		"proceed": {
			"total": "合計: ",
			"button": "今すぐ購入",
		},
		"cash": {
			"message": "店頭または商品到着時に現金でお支払い下さい"
		},
		"payment": {
			"productPrice": "商品合計: ",
			"deliveryCharge": "配送料: ",
			"Redemption": "引き換え: ",
			"method": "支払い方法",
			"cash": "現金 (到着時に支払う)",
			"creditCard": "クレジット カード",
			"deliver": "配達",
			"instore": "店舗受取",
		},
		"creditCard": {
			"acceptedCreditCard": "受け入れられたクレジットカード",
			"name": "カード所有者名",
			"number": "カード番号",
			"expireDate": "有効期限日",
			"cvc": "CVC",
			"example": {
				"name": "e.g. 中村誠也",
				"number": "e.g. 0000 0000 0000 0000",
				"expireDate": "e.g. 09/30",	
			}

		}
	},
	productDetails: {
		"price": "現在の価格:",
		"description": "製品の説明:",
		"bookmarks": {
			"add": "ブックマークに追加",
			"remove": "ブックマークから削除",
		},
		"cart": {
			"add": "カートに入れる",
			"remove": "カートから削除",
		},
	},
}