// import logo from './logo.svg';
// import './App.scss';

// react router
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// redux
import { useSelector, useDispatch } from 'react-redux';

// components
import StoreItem from './components/StoreItem/StoreItem';


function App() {

	// redux dispatch
	const dispatch = useDispatch();

  return (
    <Router>
			<div className="App">
				<h1>eCommerce App</h1>
				
				<StoreItem />
				<StoreItem />
				<StoreItem />
			</div>
		</Router>
  );
}

export default App;
