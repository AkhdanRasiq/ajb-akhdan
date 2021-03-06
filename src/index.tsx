import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/styles.scss'
import reportWebVitals from './reportWebVitals'
import router from './static/router'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { store } from './app/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          {router.map((data) => (
            <Route key={data.id} path={data.path} element={<data.element />} />
          ))}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
