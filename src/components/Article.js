import React from "react";

const Article = ({ article }) => {
  return (
    <div className="article">
      <div className="article-left-subsection">
        <p className="category">{article.category}</p>
        <h1 className="article-title">{article.title}</h1>
        {/* regular article */}
        <p className="article-subtitle">{article.subtitle}</p>
        <p className="article-description">{article.description}</p>
          {article.instructions
            ? <ol>{article.instructions.map((step) => {
                return <li>{step}</li>;
              })}</ol>
            : null}
        {/* multi-step article */}
          {article.subtitleOne ? (
            <p className="article-subtitle">{article.subtitleOne}</p>
          ) : null}
          {article.descriptionOne ? (
            <p className="article-description">{article.descriptionOne}</p>
          ) : null}
       
          {article.instructionsOne
            ?  (<ol>{article.instructionsOne.map((step) => {
                return <li>{step}</li>;
              })}</ol>)
            : null}
          {article.subtitleTwo ? (
            <p className="article-subtitle">{article.subtitleTwo}</p>
          ) : null}
          {article.descriptionTwo ? (
            <p className="article-description">{article.descriptionTwo}</p>
          ) : null}
          {article.instructionsTwo
            ? (<ol>{article.instructionsTwo.map((step) => {
                return <li>{step}</li>;
              })}</ol>)
            : null}
          {article.subtitleThree ? (
            <p className="article-subtitle">{article.subtitleThree}</p>
          ) : null}
          {article.descriptionThree ? (
            <p className="article-description">{article.descriptionThree}</p>
          ) : null}
          {article.instructionsThree
            ? (<ol>{article.instructionsThree.map((step) => {
                return <li>{step}</li>;
              })}</ol>)
            : null}
        {article.subtitleFour ? (
          <p className="article-subtitle">{article.subtitleFour}</p>
        ) : null}
        {article.descriptionFour ? (
          <p className="article-description">{article.descriptionFour}</p>
        ) : null}
          {article.instructionsFour
            ? (<ol>{article.instructionsFour.map((step) => {
                return <li>{step}</li>;
              })}</ol>)
            : null}
        {/* notes section */}
        {article.notes ? (
          <div className="article-notes">{article.notes}</div>
        ) : null}
      </div>
      <div className="article-right-subsection">
        <img src={article.img} alt={article.alt} />
        {article.img2 ? <img src={article.img2} alt={article.alt2} /> : null}
        {article.img3 ? <img src={article.img3} alt={article.alt3} /> : null}
      </div>
    </div>
  );
};

export default Article;
