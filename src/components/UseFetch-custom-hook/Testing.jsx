import React from 'react';
import useFetch from './CustomHook';

function Testing() {
  const [data, error, pending] = useFetch('https://dummyjson.com/products', {});

  console.log(data, error, pending);

  return <div>

    <h1>Use Fetch Hook </h1>
    {
        pending ? <h3>Pending Please Wait</h3>:null
    }
    {
        data && data.products && data.products.length ?
        data.products.map(productitem=><p key={productitem.id}>{productitem.title}</p>):null
    }
  </div>;
}

export default Testing;
