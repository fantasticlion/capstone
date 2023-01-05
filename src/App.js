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
        <div className = "product"> 

          <div className="item">
            <button>{"Portals and Gateways"}</button>
            <img src={"https://www.library.northwestern.edu/images/libraries-collections/mathematics-chalkboards.jpg"}></img>
            <ul>
              <li>{"Electronic Library of Mathematics"}</li>
              <li>{"Math Forum @ Drexel"}</li>
              <li>{"MathDL: The Maa Mathematical Sciences Digital Library"}</li>
              <li>{"S.O.S. Mathematics: Sites of Interest"}</li>
              <li>{"SciCentral"}</li>
              <li>{"SIAM - Society for Industrial and Applied Mathematics"}</li>
            </ul>
          </div>

          <div className="item">
            <button>{"Computer Science Websites"}</button>
            <img src={"https://al.nd.edu//assets/380450/1200x630/bacs_code.jpg"}></img>
            <ul>
              <li>{"Association for Computing Machinery (ACM)"}</li>
              <li>{"Association for Information Systems (AIS)"}</li>
              <li>{"Computing Research Association (CRA)"}</li>
              <li>{"IEEE"}</li>
              <li>{"Java Tutorials from IBM DeveloperWorks"}</li>
              <li>{"Science Daily"}</li>
              <li>{"Information Week"}</li>
            </ul>
          </div>

          <div className="item">
            <button>{"Math Websites"}</button>
            <img src={"https://www.stoodnt.com/blog/wp-content/uploads/2021/01/Websites-for-Teaching-and-Learning-Math.jpg"}></img>
            <ul>
              <li>{"American Mathematical Society"}</li>
              <li>{"arXiv.org"}</li>
              <li>{"Math Atlas"}</li>
              <li>{"Math Forum @ Drexel"}</li>
              <li>{"Math2.org"}</li>
              <li>{"Mathematical Association of America"}</li>
              <li>{"S.O.S Mathematics: Tables and Formulas"}</li>
              <li>{"The MACTutor History of Mathematics Archive"}</li>
              <li>{"Wolfram Functions"}</li>
            </ul>
          </div>

          <div className="item">
            <button>{"Library Director"}</button>
            <img src={"https://libapps.s3.amazonaws.com/accounts/61742/profiles/53133/New_Profile_Raw.jpg"}></img>
            <ul>
              <li>{"Jeff Rosedale"}</li>
              <li>{"Email Me"}</li>
              <li>{"Contact:"}</li>
              <li>{"2900 Purchase Street"}</li>
              <li>{"Room LIB-017"}</li>
              <li>{"Purchase, NY 10577"}</li>
              <li>{"914-323-5277"}</li>
              <li>{"Subjects:"}</li>
              <li>{"African Studies, Anthropology, Communications, Computer Science, International Studies, Mathematics, Sociology"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
}

export default App;
