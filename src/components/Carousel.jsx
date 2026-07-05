import React, {useState, useEffect, useRef} from 'react'

export default function Carousel({items, renderItem, gap = 16}){
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const containerRef = useRef(null)

  useEffect(()=>{
    function update(){
      const w = window.innerWidth
      if(w >= 1200) setPerView(4)
      else if(w >= 992) setPerView(3)
      else if(w >= 768) setPerView(2)
      else setPerView(1)
    }
    update()
    window.addEventListener('resize', update)
    return ()=> window.removeEventListener('resize', update)
  },[])

  const maxIndex = Math.max(0, items.length - perView)

  useEffect(()=>{
    if(index > maxIndex) setIndex(maxIndex)
  },[perView, maxIndex])

  function prev(){ setIndex(i => Math.max(0, i-1)) }
  function next(){ setIndex(i => Math.min(maxIndex, i+1)) }

  const translate = -(index * (100 / perView))

  return (
    <div className="react-carousel" style={{position:'relative'}} ref={containerRef}>
      {/* navigation buttons removed per request */}
      <div style={{overflow:'hidden'}}>
        <div style={{display:'flex',gap:gap+'px',transition:'transform 320ms ease',width:`${(items.length/perView)*100}%`,transform:`translateX(${translate}%)`}}>
          {items.map((it,idx)=> (
            <div key={idx} style={{flex:`0 0 ${100/perView}%`}}>
              {renderItem(it, idx)}
            </div>
          ))}
        </div>
      </div>
      {/* navigation buttons removed per request */}
    </div>
  )
}
