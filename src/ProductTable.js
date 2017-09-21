import React, {Component} from 'react';
import './ProductTable.css'

function ProductRow(props) {
    return (
        <tr>
            <td className={!props.product.stocked ? 'ProductRow-missing' : null}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

function ProductCategoryRow(props) {
    return (
        <tr className="ProductCategoryRow">
            <td colSpan="2">{props.category}</td>
        </tr>
    );
}

export default class ProductTable extends Component {
    render() {
        const rows = [];

        this.props.products.forEach((products, category) => {
            rows.push(<ProductCategoryRow key={category} category={category}/>);
            rows.push(products.map((product) => {
                return <ProductRow key={product.name} product={product}/>;
            }));
        });

        return (
            <table className="ProductTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}