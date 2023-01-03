export default function ProductItem(props) {   
  return (
    <div className="item">
      <h2>{props.info["name"]}</h2>
      <img src={props.info["image_link"]}></img>
      <ul>
        <li>{props.info["product_type"]}</li>
        <li>{props.info["release_time"]}</li>
        <li>{props.info["price"]}</li>
        <li>{props.info["slogan"]}</li>
        <li>{props.info["processor"]}</li>
      </ul>
      <button onClick={() => props.setStateOfParent(props.info["name"], props.info["price"])}>
        {props.added === 1 ? "Remove from Favorites" : "Add to Favorites"}</button>
    </div>);
}
