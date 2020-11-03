// import logo from './logo.svg';
import './App.scss';

// redux
import { useSelector, useDispatch } from 'react-redux';

// components
import StoreItem from './components/StoreItem/StoreItem';


function App() {

	// redux dispatch
	const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>eCommerce App</h1>
			
			<StoreItem />
			<StoreItem />
			<StoreItem />
    </div>
  );
}

export default App;
