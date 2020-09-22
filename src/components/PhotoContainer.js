import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
import NotFound from "./NotFound";

/**
 * @extends {PhotoContainer} - React stateful component.
 */
class PhotoContainer extends Component {
  // Type checking
  static propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  };
  /**
   * @returns Array of Photo components.
   *
   */
  renderPhotos = () => {
    let photos;
    if (this.props.photos.length > 0) {
      photos = this.props.photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ));
    } else {
      photos = <NotFound />;
    }
    return photos;
  };
  render() {
    const photos = this.renderPhotos();
    const { title } = this.props;
    return (
      <div className="photo-container">
        <h2>{`Results for: ${title}`}</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}
export default PhotoContainer;
