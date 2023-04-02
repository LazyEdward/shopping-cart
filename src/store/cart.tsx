import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productDataFormat } from 'data'
import { fakeGetCartProducts } from 'request/cart'
import { DefaultAsyncStatus } from 'types'

export type NewCartData = {
	id: string,
	product: productDataFormat,
}

export type CartData = {
	productRecord: {[key: string]:number},
	products: productDataFormat[],
}

export type AllProductsState = CartData & DefaultAsyncStatus

const getCartRecord = () => {
	let cartStr:string = localStorage.getItem("cart") ?? "";
	return cartStr ? JSON.parse(cartStr) : {}
}

const initialState: AllProductsState = {
	productRecord: getCartRecord(),
	products: [],
	loading: false,
	error: null,
}

export const getCartProducts = createAsyncThunk("cart/getCartProducts", async (data, thunkAPI) => {
	try {
		console.log("getCartProducts")
		let res = await fakeGetCartProducts(Object.keys(getCartRecord()))

		console.log(res)

		return res
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const Cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<NewCartData>) => {
			state.productRecord[action.payload.id] = 1
			state.products = [...state.products, action.payload.product]

			localStorage.setItem("cart", JSON.stringify(state.productRecord))
		},
		addCartCount: (state, action: PayloadAction<string>) => {
			state.productRecord[action.payload] += 1
			localStorage.setItem("cart", JSON.stringify(state.productRecord))
		},
		subtractCartCount: (state, action: PayloadAction<string>) => {
			state.productRecord[action.payload] -= 1
			localStorage.setItem("cart", JSON.stringify(state.productRecord))
		},
		removeFormCart: (state, action: PayloadAction<string>) => {
			delete state.productRecord[action.payload]
			state.products = state.products.filter(product => product.id !== action.payload)

			localStorage.setItem("cart", JSON.stringify(state.productRecord))
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getCartProducts.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(getCartProducts.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = null
				state.products = action.payload
			}).addCase(getCartProducts.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { addToCart, addCartCount, subtractCartCount, removeFormCart } = Cart.actions;

export const getCart = (state: AllProductsState) => state.productRecord
export const getProducts = (state: AllProductsState) => state.products
export const getLoading = (state: AllProductsState) => state.loading
export const getError = (state: AllProductsState) => state.error

export default Cart.reducer