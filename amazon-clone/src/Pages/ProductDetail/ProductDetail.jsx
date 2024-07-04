import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'


const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId)
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch(() => {
        console.log(err);
      });
  }, [productId]);
  
    return (
      <LayOut>
        <ProductCard
          
          product={product}
        />
      </LayOut>
    );
}

export default ProductDetail
