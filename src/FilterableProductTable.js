import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    handleFilterTextInput = (event) => {
        this.setState({
            filterText: event.target.value
        });
    }

    handleInStockInput = (event) => {
        this.setState({
            inStockOnly: event.target.checked
        });
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.props.products.filter((product) => {
                        return product.name.indexOf(this.state.filterText) !== -1 && (!this.state.inStockOnly || product.stocked);
                    })}
                />
            </div>
        );
    }
}
