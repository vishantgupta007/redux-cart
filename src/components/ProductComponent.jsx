import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);
	const renderList = products.map((product) => {
		const { id, image, price, title, category } = product;
		return (
			<div className="four column wide" key={id}>
				<Link to={`product/${id}`}>
					<div class="ui link cards">
						<div class="ui card">
							<div class="image">
								<img src={image} alt={title} />
							</div>
							<div class="content">
								<div class="header">{title}</div>
								<div className="content-desc">
									<div className="meta price">
										<h3>${price}</h3>
									</div>
									<div className="meta price">{category}</div>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	});

	return <div>{renderList}</div>;
};

export default ProductComponent;
