import React, {useState}  from 'react';
import Header from './components/Header'
import Product from './components/Product'
import Color from './components/Color'
import Button from './components/Button'
import Image from './components/Image'
function App(props) {
  const product = props.product
  const [ currentColor, setColor] = useState('black');
  return (
    <div className="equal-height-container">
      <div className="first">
        <div className="first-a"><Header /></div>
        <div className="first-b">
        <div className='pad-top'><Product product={product} /></div>
        <div className='pad-top pad-left'>
        <span className='pad-left'>COLORS</span>
         <div className='pad-left'> <Color option={product.option} color={currentColor} setColor={setColor} /></div>
         <div className='pad-left pad-top'> <Button text="Add to Cart" /></div>
        
        </div>
      </div>
      </div>
     <div className="second">
        <Image imgSrc={currentColor} />
      </div>
    </div>
  );
}

export default App;
