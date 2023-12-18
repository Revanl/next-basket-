import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * Renders a star rating based on the provided rating value.
 */
const StarRating: React.FC<Product> = ({ rating }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars: JSX.Element[] = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar}/>);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt}/>);
    }

    const remainingStars = maxRating - (fullStars + (hasHalfStar ? 1 : 0));

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar}/>);
    }
    console.log(stars)
    return stars
  };

  return renderStars();
};

export default StarRating;
