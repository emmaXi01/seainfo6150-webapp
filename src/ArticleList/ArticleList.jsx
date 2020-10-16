import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    let displayContent;

    if (props.articles.length) {
      displayContent = (
        <ul>
          {props.articles.map(article => (
            <li key={article.slug}>
              <ArticleListItem article={article}/>
            </li>
          ))}
        </ul>
      );    
    } else {
      displayContent = <div>"You have no data!"</div>
    }

    return (
      <div>
          {displayContent}
      </div>
    );
    
  };

  ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
  };

export default ArticleList;