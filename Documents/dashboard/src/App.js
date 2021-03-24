import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './App.css';
import AmountProducts from './components/AmountProducts' ;
import UsersQuantity from './components/UsersQuantity' ;
import ProductsDB from './components/ProductsDB' ;
import LastProduct from './components/LastProducts' ;
import CategoriesDB from './components/CategoriesDB' ;
import Footer from './components/Footer.js' ;

function App() {
  return (
	  
    <div className="App">
      	<div id="wrapper">

    	<Sidebar />

			<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
    
    	<Topbar />
    
    			<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				<div className="row">
					<ProductsDB/>
					<AmountProducts/>
					<UsersQuantity/>
				</div>
				<div className="row">
					<LastProduct/>
					<CategoriesDB/>
				</div>
				</div>
			</div>
		<Footer/>
  			</div>



		</div>
    </div>
  );
}

export default App;
