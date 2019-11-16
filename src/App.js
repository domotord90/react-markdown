import React, { useState, useEffect } from "react";
import marked from "marked";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) =>
    `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

  const getMarkedDownText = () => {
    const rawMarkup = marked(text, {
      sanitize: true,
      renderer: renderer,
      breaks: true
    });
    return { __html: rawMarkup };
  };

  const onChange = e => {
    const { value } = e.target;
    setText(value);
  };

  useEffect(() => {
    setText(
      "# React\n## How to use React\n[Getting started with React](https://reactjs.org/docs/getting-started.html)\nIn the example below, we embed the result of calling a JavaScript function, `formatName(user)`, into an `<h1>` element.\n```javascript\n    function formatName(user) {\n      return user.firstName + ' ' + user.lastName;\n    }\n```\n* Add React in One Minute\n* Optional: Try React with JSX(no bundler necessary!)\n >Should I Use Single or Double Quotes for Strings in Javascript\n >-BYETEACHER\n![React logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)\nThis is a random **bolded** text"
    );
  }, []);

  return (
    <div className="main-wrapper">
      <div className="editor-wrapper">
        <textarea id="editor" onChange={onChange} value={text} />
      </div>
      <div id="preview" dangerouslySetInnerHTML={getMarkedDownText()} />
    </div>
  );
};

export default App;
