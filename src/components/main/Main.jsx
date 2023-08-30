import { useEffect, useState, Fragment} from 'react';
import { instance } from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductCarousel from '../product-carousel/ProductCarousel';
import "./Main.scss";

const Main = () => {
  const [homeReeldata, setHomeReeldata] = useState([]);

  useEffect(() => {
    let isDataFetched = false;
    instance("/category/category-reel")
      .then(response => setHomeReeldata(response.data))
      .catch(err => console.log(err))

    return () => {
      isDataFetched = true;
    }
  }, [])

  return (
    <div className='home__product-carousel'>
      {
        homeReeldata.slice(0, 4).map(category => 
          <Fragment key={uuidv4()}>
            <h2>{category.categoryName_uz}</h2>  
            <ProductCarousel categoryData={category}/>
          </Fragment>
        )
      }
    </div>
  )
}

export default Main