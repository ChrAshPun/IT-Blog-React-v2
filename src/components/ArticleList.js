import React from "react";
import "../style2.css";
// Components
import Article from "./Article";

const ArticleList = ({ filteredArticles }) => {
  return (
    <div className="article-list">
      {filteredArticles.map((article) => {
        return <Article article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
