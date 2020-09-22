import React from "react";
import PropTypes from "prop-types";

/**
 * @constant Photo - React statless component.
 * @param {props} - Attributes passed to this component.
 *
 */
const Photo = (props) => {
  // Object destructuring
  const { farm, server, id, secret, title } = props.photo;
  const photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  return (
    <li>
      <img src={photoUrl} alt={title} />
    </li>
  );
};
// Type checking
Photo.propTypes = {
  photo: PropTypes.object,
};
export default Photo;
