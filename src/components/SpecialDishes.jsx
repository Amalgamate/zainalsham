import React from 'react'
import Carousel from './Carousel'

const products = [
  {id:2,title:'Fried chicken sauce',img:'/Leo%20Vonaco_files/brown-bear-printed-sweater.jpg',price:'$52.00'},
  {id:6,title:'Black coffee cup',img:'/Leo%20Vonaco_files/mug-the-best-is-yet-to-come.jpg',price:'$11.90'},
  {id:7,title:'Barbecue',img:'/Leo%20Vonaco_files/mug-the-adventure-begins.jpg',price:'$119.90'},
  {id:8,title:'Brown bean coffee',img:'/Leo%20Vonaco_files/mug-today-is-a-good-day.jpg',price:'$9.99'}
]

function ProductCard({p}){
  return (
    <div className="product-card" style={{padding:12}}>
      <img src={p.img} alt={p.title} style={{width:'100%',height:'auto'}}/>
      <h3 style={{fontSize:16,margin:'8px 0'}}>{p.title}</h3>
      <div className="price">{p.price}</div>
      <div style={{marginTop:8}}>
        <button className="btn btn-product">Add to cart</button>
      </div>
    </div>
  )
}

export default function SpecialDishes(){
  return (
    <section className="special-dishes wrapper" style={{padding:'60px 0'}}>
      <div className="container">
        <h4 className="title_block">SPECIAL DISHES</h4>
        <div className="sub-title-widget">peoples choice</div>
        <div style={{marginTop:20}}>
          <Carousel items={products} renderItem={(p)=> <ProductCard p={p} />} />
        </div>
      </div>
    </section>
  )
}
