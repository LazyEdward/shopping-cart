import DefaultLayout from "layout/defaultLayout"
import AllProducts from "pages/allProducts"
import Bookmarks from "pages/bookmarks"
import Cart from "pages/cart"
import Home from "pages/home"
import Login from "pages/login"
import { Routes, Route } from "react-router-dom"

export const normalPageRoutes = [
	{
		path: "login",
		element: <Login />
	},
	{
		path: "home",
		element: <Home />
	},
	{
		path: "allProducts",
		element: <AllProducts />
	},
	{
		path: "bookmarks",
		element: <Bookmarks />
	},
	{
		path: "cart",
		element: <Cart />
	}
]