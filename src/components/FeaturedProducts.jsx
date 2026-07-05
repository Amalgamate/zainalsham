import React from 'react'
import Carousel from './Carousel'

const products = [
  {id:2,title:'Fried chicken sauce',img:'/Leo%20Vonaco_files/169-cart_default/brown-bear-printed-sweater.jpg',price:'$29.00'},
  {id:6,title:'Black coffee cup',img:'/Leo%20Vonaco_files/183-cart_default/mug-the-best-is-yet-to-come.jpg',price:'$11.90'},
  {id:7,title:'Barbecue',img:'/Leo%20Vonaco_files/184-cart_default/mug-the-adventure-begins.jpg',price:'$119.90'},
]

function ProductCard({p}){
  return (
    <div className="product-card" style={{padding:12}}>
      <img src={p.img} alt={p.title} style={{width:'100%',height:'auto'}}/>
      <h3 style={{fontSize:16,margin:'8px 0'}}>{p.title}</h3>
      <div className="price">{p.price}</div>
    </div>
  )
}

export default function FeaturedProducts(){
  return (
    <section className="featured-products container" style={{padding:'40px 0'}}>
      <h2 className="title_block">Featured Products</h2>
      <div style={{marginTop:16}}>
        <Carousel items={products} renderItem={(p)=> <ProductCard p={p} />} />
      </div>
    </section>
  )
}
