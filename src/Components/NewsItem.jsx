import React from "react";

const NewsItem = (props) => {
  let { title, desctiption, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://i.ytimg.com/vi/2Das6YoPy8Y/maxresdefault.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desctiption}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}{" "}
              ({source})
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btm-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

// https://newsapi.org/v2/top-headlines?country=us&apiKey=f109f4c6a69f453a9f272fcd1a5bb731

export default NewsItem;
