import React from "react";
import styled from "styled-components";

const PreviewBox = styled.iframe`
  width:100%;
  border: 2px solid lightgray;
  background-color: #414452;
`

const CodePreview = () => {
  const something = 1;
  return <PreviewBox id="code-preview"></PreviewBox>;
};

export default CodePreview;
