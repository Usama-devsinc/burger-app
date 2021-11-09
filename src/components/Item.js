const Item = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <div className="buttonBlock">
        <button
          className="btn button"
          onClick={() => props.handleClick("add", props.name)}
        >
          Add
        </button>
        <button
          className="btn button"
          onClick={() => props.handleClick("remove", props.name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Item;
