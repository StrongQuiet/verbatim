import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header container flex">
      <div className="header-inner flex">
          <Link to={"/verbatim"} className="header__title">Verbatim</Link>
      </div>
    </div>
  );
};

export default Header;
