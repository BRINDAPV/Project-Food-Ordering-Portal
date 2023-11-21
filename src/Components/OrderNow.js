import { Container } from '@mui/material';
import React, { useState } from 'react';
import {Button} from '@mui/material';

const OrderNowContainer = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [yourOrder, setYourOrder] = useState('');

  return (
    <Container style={{backgroundColor:'white', width:'700px', height:'400px',paddingBottom:'10px'}}>
        
    <div className="order-container">
      <h1>Order Now</h1>
      <label>
        Restaurant Name:
        <input
          type="text"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
      </label>
      <label>
        Your Order:
        <input
          type="text"
          value={yourOrder}
          onChange={(e) => setYourOrder(e.target.value)}
        />
      </label>
    </div>
    <Button variant='contained'>
        Order Now
    </Button>
    </Container>
  );
};

export default OrderNowContainer;
