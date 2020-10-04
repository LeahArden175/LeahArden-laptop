import React, {Component} from 'react';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
import CartHeader from './CartHeader';

class Cart extends Component{
    createCartList = () => {
        return Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <CartItem 
                key={feature}
                featureHash={featureHash}
                feature={feature}
                selectedOption={this.props.selected[feature]}
              />
            );
        });        
    }

    render(){
        const total = Object.keys(this.props.selected).reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);
        return(
            <section className="main__summary">
            <CartHeader />
            {this.createCartList()}
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <CartTotal total={total}/>
            </div>
        </section>
        )
    }
}

export default Cart;