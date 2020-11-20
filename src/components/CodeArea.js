import React, { useState } from "react";
import styled from "styled-components";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const CodeAreaBox = styled(Editor)`
  background-color: #1D1E22;
  resize:horizontal;
`

const CodeArea = ({ placeholder }) => {
  const [codeValue, setCodeValue] = useState('');

  const onChange = (e) => {
    setCodeValue(e.target.value)
  }
  return (
    <CodeAreaBox
      id={placeholder}
      placeholder={placeholder}
      onValueChange={e => setCodeValue(e)}
      value={codeValue}
      highlight={code => highlight(code, languages.js)}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  )
};

export default CodeArea;
