// base styles
import './App.scss';

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
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';


function App() {

	// redux dispatch
	const dispatch = useDispatch();

  return (
    <Router>
			<div className="App">
				<Route path="/">
					<Header />
				</Route>
				
				<Route path="/">
					<main>
						<Gallery />
					</main>
				</Route>
			</div>
		</Router>
  );
}

export default App;
