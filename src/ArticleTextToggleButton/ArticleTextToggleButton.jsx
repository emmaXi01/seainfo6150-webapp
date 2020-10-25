import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
    const [showMore, setShowMore] = useState(true);

    const handleClick = () => {
        props.toggleContent();
        setShowMore(!showMore);
    };
    
    return (
        <div>
            {showMore ? 
                <button className={styles.button} onClick={handleClick}>Show more</button> :
                <button className={styles.button} onClick={handleClick}>Show less</button>
            }
        </div>
    );

};
ArticleTextToggleButton.propTypes = {
    toggleContent: PropTypes.func.isRequired
}
export default ArticleTextToggleButton;