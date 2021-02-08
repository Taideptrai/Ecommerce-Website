import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductTest } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';



export default function TotalProductScreen() {
  const list = useSelector(state=>state.getProductList);
  const {loading,error,productsList} = list;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductTest());
  },[dispatch])
  return (
   <div className="row">
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {productsList && productsList.data.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {productsList &&  productsList.data.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
   </div>
  );
}
