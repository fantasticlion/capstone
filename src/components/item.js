export default function ProductItem(props) {   
  return (
    <div className="item">
      <button onClick={() => props.setStateOfParent(props.info["name"], props.info["price"])}>
        {props.info["name"]}</button>
      <img src={props.info["image_link"]}></img>
      <ul>
        <li>{props.info["product_type"]}</li>
        <li>{props.info["release_time"]}</li>
        <li>{props.info["price"]}</li>
        <li>{props.info["slogan"]}</li>
        <li>{props.info["processor"]}</li>
      </ul>
    </div>);
}
