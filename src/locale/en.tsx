import { NestedObject } from "types";

export const en : NestedObject = {
	test: {
		first: "first"
	},
	general: {
		lang: "Language",
		title: {
			"newArrivals" : "New Arrivals",
			"limitedOffers" : "Limited Offers",
			"rings" : "Rings",
			"glasses" : "Glasses",
			"plants" : "Plants",
		},
		navigation: {
			"home": "Home",
			"allProducts": "All Products",
			"bookmarks": "Bookmarks",
			"cart": "Cart",
		},
		options: {
			"noOptions" : "No available options",
			"more": "More ",
		},
		search: {
			"suggestion": "More Products"
		},
		empty: {
			"products": "No existing products"
		},
		button: {
			"prev": "Back",
			"next": "Next",
			"confirm": "Confirm",
		}
	},
	dashboard: {

	},
	allProducts: {
		"title": "All "
	},
	bookmarks: {
		"title": "Bookmarks",
	},
	cart: {
		"title": "Cart",
		"proceed": {
			"total": "Total: ",
			"button": "Buy now",
		},
		"payment": {
			"productPrice": "Products Total: ",
			"deliveryCharge": "Delivery: ",
			"Redemption": "Redeem: ",
			"method": "Payment method",
			"cash": "Cash (Pay on Arrival)",
			"creditCard": "Credit Card",
			"deliver": "Delivery",
			"instore": "Store pick up",
		},
		"cash": {
			"message": "Please pay by cash in store or cash on delivery"
		},
		"creditCard": {
			"acceptedCreditCard": "Accepted Credit Cards",
			"name": "Card Holder Name",
			"number": "Card Number",
			"expireDate": "Expiry Date",
			"cvc": "CVC",
			"example": {
				"name": "e.g. John Mason",
				"number": "e.g. 0000 0000 0000 0000",
				"expireDate": "e.g. 09/30",	
			}
		}
	},
	productDetails: {
		"price": "Current Price:",
		"description": "Description:",
		"bookmarks": {
			"add": "Add to bookmarks",
			"remove": "Remove from bookmarks",
		},
		"cart": {
			"add": "Add to cart",
			"remove": "Remove from cart",
		},
	},
}