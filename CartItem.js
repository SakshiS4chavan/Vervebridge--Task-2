import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({ item }) => {
  return (
    <Card className="flex space-x-5 lg:w-64 m-5 p-5">
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {item.description}
        </Typography>
        <div className="flex justify-between items-center">
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Typography>{item.quantity}</Typography>
          <IconButton>
            <AddIcon />
          </IconButton>
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
