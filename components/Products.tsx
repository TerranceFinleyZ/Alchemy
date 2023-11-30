import React from 'react'
import Link from 'next/link';
import Container from "./Container"
import ProductsData from "./ProductsData";
import ProductOil from './Items/ProductOil'; 
import ProductB from './Items/ProductB';
import ProductC from './Items/ProductC';
import ProductD from './Items/ProductD';
import ProductE from './Items/ProductE';
import ProductF from './Items/ProductF';
import ProductG from './Items/ProductG';
import ProductH from './Items/ProductH';
import ProductI from './Items/ProductI';
import ProductJ from './Items/ProductJ';
import ProductK from './Items/Productk';
import ProductL from './Items/ProductL';
import ProductM from './Items/ProductM';
import ProductN from './Items/ProductN';
import ProductQ from './Items/ProductQ';


const Products = async () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
            <ProductsData />
            <ProductOil /> 
            <ProductB /> 
            <ProductC /> 
            <ProductD /> 
            <ProductE /> 
            <ProductF /> 
            <ProductG /> 
            <ProductH /> 
            <ProductI /> 
            <ProductJ /> 
            <ProductK /> 
            <ProductL /> 
            <ProductM/>
            <ProductN/> 
            <ProductQ />
            <p className="text-orange-600">
              <Link href={"seemore"}>
                See More...
              </Link>
            </p>

    </Container>
     
  );
};

export default Products
