import React from "react";
import "./CodeSnippet.css";

const CodeSnippet = () => (
  <div className="code-snippet">
    <div className="code-line">
      <span className="token-keyword">const </span>
      <span className="token-var">developer</span>
      <span className="token-punctuation"> = {"{"}</span>
    </div>
    <div className="code-line code-indent">
      <span className="token-key">name</span>
      <span className="token-punctuation">: </span>
      <span className="token-string">"Denis Gusev"</span>
      <span className="token-punctuation">,</span>
    </div>
    <div className="code-line code-indent">
      <span className="token-key">stack</span>
      <span className="token-punctuation">: </span>
      <span className="token-bracket">[</span>
      <span className="token-string">"Java"</span>
      <span className="token-punctuation">, </span>
      <span className="token-string">"Spring Boot"</span>
      <span className="token-punctuation">, </span>
      <span className="token-string">"React"</span>
      <span className="token-punctuation">, </span>
      <span className="token-string">"Node.js"</span>
      <span className="token-bracket">]</span>
      <span className="token-punctuation">,</span>
    </div>
    <div className="code-line code-indent">
      <span className="token-key">status</span>
      <span className="token-punctuation">: </span>
      <span className="token-string">"open to opportunities"</span>
      <span className="token-punctuation">,</span>
    </div>
    <div className="code-line code-indent">
      <span className="token-key">passion</span>
      <span className="token-punctuation">: </span>
      <span className="token-string">"building scalable systems"</span>
      <span className="token-punctuation">,</span>
    </div>
    <div className="code-line">
      <span className="token-punctuation">{"}"}</span>
    </div>
  </div>
);

export default CodeSnippet;
