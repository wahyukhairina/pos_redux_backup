import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './components/redux/store'

import Home from './components/home/Home'
import Login from './components/auth/Login'
import User from './components/user/User'
import Product2 from './components/aproduct/Product'
import Category from './components/category/Category'
import History from './components/history/history'

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
          <Route path='/product' component={Product2} />
          <Route path='/category' component={Category} />
          <Route path='/history' component={History} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
