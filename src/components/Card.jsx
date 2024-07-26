import { Link } from "react-router-dom";

const Card = ({card}) => {
  return (
    <Link to={`/content`} state={{ lvl: card.lvl, title: card.title, content: card.content }} className={`card flex ${card.lvl}`}>
      <div className="card-inner flex">
          <h1 className="card__title">{card.title} ({card.lvl})</h1>
      </div>
    </Link>
  );
};

export default Card;
