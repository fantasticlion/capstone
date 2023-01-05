import './App.css';
import {useState} from 'react';
import productsData from "./assets/items.json";
import ProductItem from "./components/item";

function App() {
  const [favorites, setFavorites] = useState(productsData.reduce((object, key) => 
    ({ ...object, [key.name]: -1}), {}));
  const [sort, setSort] = useState("productType");
  const [filter, setFilter] = useState({"release_time": [], "product_type": []});
  const [filterData, setFilterData] = useState(productsData);
  const [total, setTotal] = useState(0);

  const allSorts = {
    productType: {method: (a, b) => (parseInt(a.id) < parseInt(b.id) ? -1 : 1)},
    ascending: {method: (a, b) => (parseInt(a.price) < parseInt(b.price) ? -1 : 1)},
    descending: {method: (a, b) => (parseInt(a.price) > parseInt(b.price) ? -1 : 1)},
  };

  const allFilters = 
    [{type: "release_time", value: "Released in 2022"}, 
    {type: "release_time", value: "Not Released in 2022"}, 
    {type: "product_type", value: "iphone"}, 
    {type: "product_type", value: "iPad"}, 
    {type: "product_type", value: "Notebook"}, 
    {type: "product_type", value: "Desktop"}]

  const updateFavorites = (name, price) => {
    let tempFavorites = favorites;
    tempFavorites[name] = tempFavorites[name] === 1 ? -1 : 1;
    setTotal(total + tempFavorites[name] * parseInt(price));
    setFavorites(tempFavorites);
  };

  const updateFilter = (newFilter, filterType) => {
    let tempFilters = filter[filterType];

    if (tempFilters.includes(newFilter)) {
      tempFilters.splice(tempFilters.indexOf(newFilter), 1);
    } 
    else {
      tempFilters.push(newFilter);
    }

    filter[filterType] = [...tempFilters];
    setFilter(filter);

    const size = filter["release_time"].length + filter["product_type"].length;
    if (size === 0 || size === allFilters.length) {
      setFilterData(productsData);
    } 
    else {
      setFilterData(productsData.filter(item => 
        (filter["release_time"].includes(item["release_time"]) 
        || filter["release_time"].length === 0) && 
        (filter["product_type"].includes(item["product_type"]) 
        || filter["product_type"].length === 0)));
    }
  }

  const resetPage = () => {
    setSort("productType");
    setFilter({"release_time": [], "product_type": []});
    setFilterData(productsData);
    setFavorites(productsData.reduce((object, key) => ({ ...object, [key.name]: -1}), {}));
    setTotal(0);
  }

  return (
    <div className = "App">
      <div className = "product-cards">
        <h1>
          <img src="https://libapps.s3.amazonaws.com/accounts/222921/images/banner_january_22.png" 
            width="1680"></img>
        </h1>
        <div className = "product"> {
          filterData.sort(allSorts[sort].method)
            .map ((item, index) => (<ProductItem key={"product" + index} info = {item} 
              added = {favorites[item.name]} setStateOfParent={updateFavorites}/>))}
        </div>
      </div>
    </div>);
}

export default App;
