import PropTypes from "prop-types";

export function Card({ children }) {
  return <div className="rounded shadow p-4 bg-white">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node,
};

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node,
};
