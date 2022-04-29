import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '.././react-tabs.css';
export default function Product(props) {
  const product=props.product;
  return (
    <div className='row left'>
      <div><h3>{product.name}</h3></div>
      <div className='prize textGray'>{product.prize}</div>
      <div className='Tabs pad-top'> 
      <Tabs>
          <TabList>
            <Tab>DESCRIPTION</Tab>
            <Tab>DETAILS</Tab>
          </TabList>

          <TabPanel>
            {product.description}
          </TabPanel>
          <TabPanel>
            {product.detail}
          </TabPanel>
      </Tabs>
      </div>
     <div className='pad-top'><span className='price discount'>${product.discount}</span>{ " " }<span className='price regular pad-left'>${product.price}</span></div>
    </div>
  );
}
