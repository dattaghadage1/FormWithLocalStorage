import React from 'react'
import { Provider } from 'react-redux'
import Form from './FormWithLocalStorage/Form'
import store from './FormWithLocalStorage/Redux/Store '

function App() {
  return (
    <div>
    <Provider store={store}>
    <Form/>
    </Provider>
    </div>
  )
}

export default App