// We use ReactDOM.createRoot() to initalize the root of our React tree
import ReactDOM from 'react-dom/client' 

// We import the App root code from App.jsx
import App from './App'

// Here we actually intialize our root
// 'document' is a reference to the entire HTML document loaded in the browser
ReactDOM.createRoot(document.getElementById('root')).render(<App />)