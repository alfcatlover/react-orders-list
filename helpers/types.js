import PropTypes from "prop-types";

export const TOrder = PropTypes.shape({
  id: PropTypes.number.isRequired,
  docDate: PropTypes.string.isRequired,
  docNum: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const TPosition = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired
});
