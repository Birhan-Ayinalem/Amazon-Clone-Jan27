import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'
const Product = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
                setIsLoading(false)
            }).catch((err) => {
                console.log("Error", err)
                setIsLoading(false)
        })
    }, [])
    return (
      <>
        {isLoading ? ( <Loader />) : (
          <section className={classes.products_container}>
            {products?.map((singleProduct) => {
              return (
                <ProductCard
                  renderAdd ={true}
                  product={singleProduct}
                  key={singleProduct.id}
                />
              );
            })}
          </section>
        )}
      </>
    );
}

export default Product
