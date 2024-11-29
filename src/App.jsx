import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import store from './utils/AppStore'

function App() {

  return (
    <Provider store={store}>   
      <div className="App">
    <Head/>
    <div className="mt-[64px]">
    <Body/>
    </div>
    
   </div>
   </Provider>

  )
}

export default App
