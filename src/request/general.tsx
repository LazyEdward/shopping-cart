import { productDataFormat, productTagFormat, PRODUCT_DATA, productTitleFormat, productDescriptionFormat } from "data"

export const fakeGetProducts = (categories: productTagFormat[], maxRows:number=0) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let products: { [key: string]: productDataFormat[]; } = {}

			categories.forEach(category => products[category] = maxRows > 0 ? PRODUCT_DATA.filter(product => product.tags.includes(category)).slice(0, maxRows) : PRODUCT_DATA.filter(product => product.tags.includes(category)))

			console.log(products)
			resolve({category: categories, products: products})
		}, 500)
	})
}

export const fakeGetProductsBySearch = (input: string, titleLang: string, descLang: string, maxRows:number=0) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let products: productDataFormat[] = []

			PRODUCT_DATA.forEach(product => {
				if(
					product.title[titleLang as keyof productTitleFormat]?.toLocaleLowerCase().includes(input.toLocaleLowerCase())
					|| product.description[descLang as keyof productDescriptionFormat]?.toLocaleLowerCase().includes(input.toLocaleLowerCase())
				)
					products.push(product)
			})

			resolve({products: products.splice(0, maxRows)})
		}, 500)
	})
}

export const fakeGetProductsByIds = (ids: string[]) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let products: productDataFormat[] = []

			PRODUCT_DATA.forEach(product => {
				if(ids.includes(product.id))
					products.push(product)
			})

			resolve(products)
		}, 500)
	})
}