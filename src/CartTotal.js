import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';

export default function CartTotal(props){
    return (
        <div className="summary__total__value">
        {USCurrencyFormat.format(props.total)}
      </div>
    )

}