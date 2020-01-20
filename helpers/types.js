import PropTypes from "prop-types";

export const TOrder = PropTypes.shape({
  id: PropTypes.number.isRequired,
  docDate: PropTypes.string.isRequired,
  docNum: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});