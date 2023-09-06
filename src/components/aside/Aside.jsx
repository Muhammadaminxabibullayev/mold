import "./Aside.scss";
import { useLocation } from "react-router-dom";
import {instance } from "../../api/axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {AiOutlineAppstore} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';


const Aside = () => {
  const location = useLocation();
   const [categoryData, setCategoryData] = useState([])
  useEffect(() => {
    let isFetched = false;
    instance("/category/category-nest")
      .then(response => setCategoryData(response.data))
      .catch(err => console.log(err))
      return () => {
        isFetched = true
      }
  }, [])
  return !location.pathname.includes("product-view") ? (
    <div className="aside">
      <p className="aside__header"><AiOutlineAppstore/>Category</p>
      <ul className="aside__menu">
        {
          categoryData.mainCategory_ru?.map((mainCategoryItem, ind) => 
            <li key={uuidv4()} className="aside__menu-item">
              <Link to={`/maincategory/${mainCategoryItem}`}>{mainCategoryItem}</Link> <FiChevronRight/>
              <div className="sub-category-item">
                {
                  categoryData.productSubCategories_ru[ind].map(subCategoryItem => 
                    subCategoryItem ? <Link to={`/subcategory/${subCategoryItem}`} key={uuidv4()}>{subCategoryItem}</Link> : <React.Fragment key={uuidv4()}></React.Fragment>
                  )
                }
              </div>
            </li>  
          )
        }
      </ul>
    </div>
  ) :  <></>
}

export default Aside