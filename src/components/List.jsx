import Card from "./Card";

const List = ({lvl, title, content}) => {
  return (
    <div className="list container">
      <h2 className="list__title"><span>{lvl}</span> — {title}</h2>
      <div className="list-inner flex">
          {content.map((item, index) => <Card key={index} card={item} />)}
      </div>
    </div>
  );
};

export default List;
