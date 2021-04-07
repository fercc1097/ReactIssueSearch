import React from "react";

const ResultItem = ({ issue }) => {
  const { title } = issue;
  const { labels } = issue;
  console.log(`labels`, labels);
  return (
    <li className="issue">
      <a className="issue--link" target="blank" href={issue.html_url}>
        <p>Title: {title}</p>
        <div className="issue--labels">
          {labels.map((label) => {
            return (
              <div
                className="issue--label"
                style={{ backgroundColor: `#${label.color}` }}
                key={label.id}
              >
                {" "}
                {label.name}{" "}
              </div>
            );
          })}
        </div>
      </a>
    </li>
  );
};

export default ResultItem;
