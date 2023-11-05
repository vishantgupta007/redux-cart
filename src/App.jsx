import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/product/:productId" element={<ProductDetail />} />
				<Route path="*" element={"404 Not found"} />
			</Routes>
		</Router>
	);
}

export default App;
