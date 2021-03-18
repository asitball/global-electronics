import React from 'react';

const Cart = (props) => {
   const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        let players = cart[i];
        totalSalary = totalSalary + players.salary;
    }
    return (
        <div>
            <h6>Total Salary: {totalSalary}</h6>
        </div>
    );
};

export default Cart;