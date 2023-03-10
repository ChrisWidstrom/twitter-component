import React from "react";

const Author = ({ author }) => (
  <>
    <span className="author">{author.name}</span>
    <span className="handle">{author.handle}</span>
  </>
);

export default Author;
