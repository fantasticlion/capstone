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
              <li><a href="https://www.emis.de/ELibM.html">Electronic Library of Mathematics</a></li>
              <li><a href="https://www.nctm.org/classroomresources/">Math Forum @ Drexel</a></li>
              <li><a href="https://www.maa.org/about-maa/maa-history/mathdl">MathDL: The Maa Mathematical Sciences Digital Library</a></li>
              <li><a href="http://www.sosmath.com/wwwsites.html">S.O.S. Mathematics: Sites of Interest</a></li>
              <li><a href="https://www.scicentral.com/index.html">SciCentral</a></li>
              <li><a href="https://www.siam.org/">SIAM - Society for Industrial and Applied Mathematics</a></li>
            </ul>
          </div>

          <div className="item">
            <button>{"Computer Science Websites"}</button>
            <img src={"https://al.nd.edu//assets/380450/1200x630/bacs_code.jpg"}></img>
            <ul>
              <li><a href="https://www.acm.org/">Association for Computing Machinery (ACM)</a></li>
              <li><a href="https://aisnet.org/default.aspx">Association for Information Systems (AIS)</a></li>
              <li><a href="https://cra.org/">Computing Research Association (CRA)</a></li>
              <li><a href="https://www.ieee.org/">IEEE</a></li>
              <li><a href="https://developer.ibm.com/languages/java/">Java Tutorials from IBM DeveloperWorks</a></li>
              <li><a href="https://www.sciencedaily.com/news/computers_math/computer_science/">Science Daily</a></li>
              <li><a href="https://www.informationweek.com/">Information Week</a></li>
            </ul>
          </div>

          <div className="item">
            <button>{"Math Websites"}</button>
            <img src={"https://www.stoodnt.com/blog/wp-content/uploads/2021/01/Websites-for-Teaching-and-Learning-Math.jpg"}></img>
            <ul>
              <li><a href="https://www.ams.org/home/page">American Mathematical Society</a></li>
              <li><a href="https://arxiv.org/">arXiv.org</a></li>
              <li><a href="http://www.math-atlas.org/">Math Atlas</a></li>
              <li><a href="https://www.nctm.org/classroomresources/">Math Forum @ Drexel</a></li>
              <li><a href="http://math2.org/">Math2.org</a></li>
              <li><a href="https://www.maa.org/">Mathematical Association of America</a></li>
              <li><a href="http://www.sosmath.com/tables/tables.html">S.O.S Mathematics: Tables and Formulas</a></li>
              <li><a href="https://mathshistory.st-andrews.ac.uk/">The MACTutor History of Mathematics Archive</a></li>
              <li><a href="https://functions.wolfram.com/">Wolfram Functions</a></li>
            </ul>
          </div>

          <div className="item">
            <button>Library Director</button>
            <img src={"https://libapps.s3.amazonaws.com/accounts/61742/profiles/53133/New_Profile_Raw.jpg"}></img>
            <h3>Jeff Rosedale</h3>
            <div className='subbutton'><a href="mailto: jeff.rosedale@mville.edu">Email Me</a></div>
            <h3>Contact:</h3>
            <ul>
              <li>2900 Purchase Street</li>
              <li>Room LIB-017</li>
              <li>Purchase, NY 10577</li>
              <li>914-323-5277</li>
              </ul>
            <h3>Subjects:</h3>
            <ul>
              <li><a href="https://mville.libguides.com/sb.php?subject_id=74340">African Studies</a>, <a href="https://mville.libguides.com/sb.php?subject_id=69406">Anthropology</a>, <a href="https://mville.libguides.com/sb.php?subject_id=69394">Communications</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74345">Computer Science</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74351">International Studies</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74344">Mathematics</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74336">Sociology</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
}

export default App;
