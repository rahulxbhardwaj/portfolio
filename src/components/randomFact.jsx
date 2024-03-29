import React from 'react';

function CodeEditor() {
  return (
    <a href="https://factapi.vercel.app/">
    <div className="code-editor">
      <div className="header">
        <span className="title">https://factapi.vercel.app/</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M6 6L18 18"></path>
            <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M18 6L6 18"></path>
          </g>
        </svg>
      </div>
      <div className="editor-content">
        <code className="code">
          <p><span className="color-0"></span> <span>{`{`}</span></p>

          <p className="property">
            <span className="color-2">"fact" : </span><span></span>
            <span className="color-1"></span>
          </p>
          <p className="property">
            <span className="color-2">"Bananas are berries, but strawberries aren't."</span>
          </p>
          <p className="property">
            <span className="color-2"></span><span></span>
            <span className="color-1"><span className="color-3"></span><span className="color-3"></span></span>
          </p>
          <p className="property">
          </p>
          <span>{`}`}</span>
        </code>
      </div>
    </div>
      </a>
  )
}

export default CodeEditor;
