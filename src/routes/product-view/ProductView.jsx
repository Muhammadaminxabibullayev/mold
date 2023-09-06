import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/axios';
import "./ProductView.scss"
import { BsCart3 } from "react-icons/bs"

const ProductView = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [itemCounter, setItemCounter] = useState(1);
  const [activeImageNumber, setActiveImageNumber] = useState(0);
  const [productViewData, setProductViewData] =useState(null);
  let productDataInURL = useParams();
  useEffect(() => {
    instance(`/product/single-product/${productDataInURL.id}`)
      .then(response => setProductViewData(response.data?.singleProduct?.at(0)))
      .catch(err => console.log(err ))
  }, [productDataInURL.id])
  console.log(activeImageNumber);

  console.log(productViewData)
  function decrement(){
    if(itemCounter > 1){
      setItemCounter(itemCounter - 1)
    }
  }

  function increment(){
    if(itemCounter < +productViewData?.productSizesAndQuantity[selectedVariant].quantity){
      setItemCounter(itemCounter + 1)
    }
  }

  console.log(selectedVariant);

  return (
    <div className='product-view'>
     <div className="product-view-img-wrapper">
      <img width={400} height={400} src={productViewData?.productImages[activeImageNumber]} alt="" />
      <div className='product-view__images'>
          {
            productViewData?.productImages.map((productImageThumb, ind) => 
              <img style={ind === activeImageNumber ? {border: "2px solid dodgerblue"} : {border: "2px solid transparent"}} width={100} height={100} src={productImageThumb} alt="" onClick={() => setActiveImageNumber(ind)} />  
            )
          }
      </div>
     </div>
     <div className="product-view__content">
      <div className="price-and-option">
        <p className='price-of-item'>{productViewData?.productSizesAndQuantity[selectedVariant].price} CУМ</p>
        <div className="size">
          <p >Размер:</p>
          <select onChange={(e) => {
          setSelectedVariant(+e.target.value)
          setItemCounter(1)
          }}>{
            productViewData?.productSizesAndQuantity.map((productItemVariant, ind) => 
                <option value={ind}>{productItemVariant.size}</option>
              )
            }</select>
        </div>
      </div>
      <div className="add-items">
        <div className='product-view__counter'>
          <button onClick={decrement}>-</button>
          <span>{itemCounter}</span>
          <button onClick={increment}>+</button>
        </div> 
        <div className="all-price">
          <h5 >{itemCounter * +productViewData?.productSizesAndQuantity[selectedVariant].price} CУМ</h5>
        </div>
        <button className='add-to-cart'><BsCart3/>Добавить в корзину</button>
      </div>
     </div>

    </div>
  )
}

export default ProductView