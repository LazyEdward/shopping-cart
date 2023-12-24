import { NestedKeyCheck, NestedKeyCheckResultType, NestedKeyCheckType, NestedObject } from "types"

export const priceFormater = (price: number) => Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(price)

export const cardNumberFormater = (number: string) => number.match(/[0-9]{1,4}/g)!.join(' ')
export const expirationDateFormater = (number: string) => number.match(/[0-9]{1,2}/g)!.join('/')

export const nestedKeyCheck = (superSetObj: NestedObject, subSetObj: NestedObject, type = NestedKeyCheck.subset): NestedKeyCheckResultType => {
	let superSetObjKeys = Object.keys(superSetObj).sort()
	let subSetObjKeys = Object.keys(subSetObj).sort()

	if(type === NestedKeyCheck.exact && superSetObjKeys.length !== subSetObjKeys.length)
		return {status: false, key: "NestedKeyCheck.exact"}

	if(type === NestedKeyCheck.subset && superSetObjKeys.length < subSetObjKeys.length)
		return {status: false, key: "NestedKeyCheck.subset"}

	let childValidation : NestedKeyCheckResultType = {status: true, key: ''}

	for(let key of subSetObjKeys){
		if(!superSetObj[key])
			return {status: false, key: key}

		if(typeof subSetObj[key] !== typeof superSetObj[key])
			return {status: false, key: key}

		if(typeof subSetObj[key] === 'object'){
			childValidation = nestedKeyCheck(superSetObj[key] as {}, subSetObj[key] as {}, type)

			if(!childValidation.status)
				return {status: false, key: `${key}.${childValidation.key ?? ''}`}
		}
	}

	return {status: true, key: ''}
}