import React, { useEffect, useContext } from 'react';
import { ProductCard } from 'components/ProductCard';
import productsData from 'db/shop.json';
import { Grid } from '@mui/material';
import { store } from 'context';

function Shop() {
    const { setProducts, products } = useContext(store);

    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    console.log(products);

    return (
        <Grid container spacing={2} p={2}>
            {products.map((item) => (
                <Grid item xs={3}>
                    <ProductCard
                        title={item.title}
                        date={item.date}
                        img={item.img}
                        desc={item.desc}
                        price={item.price}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Shop;
