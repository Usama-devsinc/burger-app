const DisplayIngredients = ({ ingredients }) => {
  let { lettuce, bacon, cheese, meat } = ingredients;
  let burger = [];
  let ary1 = [...Array(lettuce).keys()].map((index) => {
    return <div key={index + "lettuce"} className="lettuce"></div>;
  });
  console.log(ary1);
  let ary2 = [...Array(bacon).keys()].map((index) => {
    return <div key={index + "bacon"} className="bacon"></div>;
  });

  let ary3 = [...Array(cheese).keys()].map((index) => {
    return <div key={index + "cheese"} className="cheese"></div>;
  });

  let ary4 = [...Array(meat).keys()].map((index) => {
    return <div key={index + "meat"} className="meat"></div>;
  });
  burger = [...ary1, ...ary2, ...ary3, ...ary4];
  return burger.length === 0 ? (
    <p className="m-2" key="0">
      No ingredients added
    </p>
  ) : (
    burger
  );
};
export default DisplayIngredients;
