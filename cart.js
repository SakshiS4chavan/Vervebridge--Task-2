import React, { Fragment, useState } from 'react';
import CartItem from './CartItem';
import { Card, Divider, Modal, Box, Grid, TextField, Button } from '@mui/material';
import AddressCart from './AddressCart';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const cartItems = [1, 1, 1, 1];
const addresses = [1, 1, 1, 1];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: '',
  state: '',
  pincode: '',
  city: '',
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Street address is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  pincode: Yup.number().required('Pincode is required'),
});

const Cart = () => {
  const [openAddressModal, setOpenAddressModal] = useState(false);

  const createOrderUsingSelectedAddress = () => {
    console.log('create order');
  };

  const handleOpenAddressModal = () => {
    setOpenAddressModal(true);
    console.log('handle open address modal');
  };

  const handleCloseAddressModal = () => {
    setOpenAddressModal(false);
  };

  const handleSubmit = (values) => {
    console.log('handle submit', values);
  };

  return (
    <Fragment>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] min-h-screen pt-10">
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>
          <Divider />
          <div className="billDetails px-5 text-5m">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="flex justify-between text-gray-400">
              <p>Item Total</p>
              <p>Rs. 923</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Delivery Fee</p>
              <p>Rs. 21</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Platform Fee</p>
              <p>Rs. 921</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>GST & Restaurant Charges</p>
              <p>Rs. 33</p>
            </div>
            <Divider />
            <div className="flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>Rs. 1080</p>
            </div>
          </div>
        </section>

        <section className="lg:w-[60%] pt-5 px-5 h-screen overflow-scroll scrollbar-hide">
          <div className="flex justify-between items-center">
            <h1 className="font-extralight text-3xl">Select Delivery Address</h1>
            <button
              className="flex items-center space-x-3 border-gray-700 text-gray-700 border-2 px-5 py-1 rounded-3xl"
              onClick={handleOpenAddressModal}
            >
              <AddLocationAltIcon />
              <span className="uppercase">Add Address</span>
            </button>
          </div>

          <div className="addressContainer pt-5">
            <div className="space-y-6">
              {addresses.map((item, index) => (
                <AddressCart key={index} item={item} showButton />
              ))}
            </div>
          </div>

          <div className="fixed left-0 bottom-0 w-[55%] bg-white border-2">
            <button
              className="w-full py-2 bg-[#FC8019] uppercase text-white font-semibold rounded-2xl"
              onClick={createOrderUsingSelectedAddress}
            >
              Confirm Order
            </button>
          </div>
        </section>

        <Modal
          open={openAddressModal}
          onClose={handleCloseAddressModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="text-gray-700 uppercase text-center text-lg pb-2 border-b-[1px]">
              Add Delivery Address
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        name="streetAddress"
                        as={TextField}
                        variant="outlined"
                        fullWidth
                        label="Street Address"
                        helperText={<ErrorMessage name="streetAddress" />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        name="state"
                        as={TextField}
                        variant="outlined"
                        fullWidth
                        label="State"
                        helperText={<ErrorMessage name="state" />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        name="city"
                        as={TextField}
                        variant="outlined"
                        fullWidth
                        label="City"
                        helperText={<ErrorMessage name="city" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="pincode"
                        as={TextField}
                        variant="outlined"
                        fullWidth
                        label="Pincode"
                        helperText={<ErrorMessage name="pincode" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth>
                        Save Address &rarr;
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Modal>
      </main>
    </Fragment>
  );
};

export default Cart;
