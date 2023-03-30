import { configureStore } from '@reduxjs/toolkit'
import AccessableSiteMapReducer from './accessableSiteMap'
import DashboardReducer from './dashboard'
import AllProductsReducer from './allProducts'
import ProductDetailsReducer from './productDetails'
import BookmarksReducer from './bookmarks'

export const store = configureStore({
  reducer: {
    accessableSiteMap: AccessableSiteMapReducer,
    dashboard: DashboardReducer,
    allProducts: AllProductsReducer,
    productDetails: ProductDetailsReducer,
    bookmarks: BookmarksReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch