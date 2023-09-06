import { useState, useEffect } from "react";
import "./Search.scss";
import logo from "../../img/logo.svg";
import { Container } from "../../utils/Utils";
import Aside from "../aside/Aside";
import { FiSearch } from "react-icons/fi";
import { instance } from '../../api/axios';
import { Link } from "react-router-dom";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response => setSearchResults(response.data))
      .catch(err => {
        setSearchResults([])
      })
  }, [inputSearch])


  // Ф

  return (
    <div>
      <div className="search_wrapper">
        <Container>
          <div className="search">
            <img className="logo" src={logo} alt="" />
            <div className="search__group">
              <div className="input_wrapper">
                <input type="text" placeholder="Поиск..." value={inputSearch} onChange={e => setInputSearch(e.target.value)}/>
                <button>
                  <FiSearch/>
                </button>
                {searchResults.length > 0 ? <div className="search__results">
                  {
                    searchResults?.map(searchedItem => 
                      <Link to={`/product-view/${searchedItem._id}`}>
                      <div className="search__results-item">
                        <img src={searchedItem?.productImages[0]} alt="" />
                        <h4>{searchedItem?.productName_ru}</h4>
                        <strong>{`${searchedItem?.productSizesAndQuantity[0].price} ${searchedItem?.productSizesAndQuantity.length > 1 ? "- " + searchedItem?.productSizesAndQuantity.reverse()[0].price : ""} CУМ ` }</strong>
                      </div>  
                      </Link>
                    )
                  }
                </div> : <></>}
              </div>
              <div className="sub_navigation">
                <Aside />
                <a className="sub__nav-link" href="#!">Главная</a>
                <a className="sub__nav-link" href="#!">Партнеры</a>
                <a className="sub__nav-link" href="#!">О нас</a>
                <a className="sub__nav-link" href="#!">Контакт</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Search;
