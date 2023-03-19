import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/store'
import { Provider } from 'react-redux'

import App from 'App'
import 'main.css'

import "./i18n.tsx"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/shopping-cart">
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
