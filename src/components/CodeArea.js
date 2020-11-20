import React, { useEffect } from "react";
import styled from "styled-components";

const CodeAreaBox = styled.textarea`
  background-color: #1D1E22;
  resize:horizontal;
`

const CodeArea = ({ placeholder }) => {
  const someCode = <h1>Leira</h1>;
  return <CodeAreaBox id={placeholder} placeholder={placeholder}></CodeAreaBox>;
};

export default CodeArea;
