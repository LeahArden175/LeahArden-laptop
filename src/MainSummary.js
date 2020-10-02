import React from 'react';
import ItemSummary from './ItemSummary';

export default function MainSummary(props){

    return(
          <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {props.CurrencyFormat.format(props.total)}
            </div>
          </div>
        </section>
    )
}