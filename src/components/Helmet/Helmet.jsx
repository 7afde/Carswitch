import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "Rent Car Service - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Helmet;
