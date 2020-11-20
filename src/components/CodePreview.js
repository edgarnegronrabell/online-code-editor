import React from "react";
import styled from "styled-components/macro";

const PreviewBox = styled.iframe`
  width:100%;
  border: 2px solid lightgray;
  background-color: #414452;
`

const CodePreview = () => {
  return <PreviewBox id="code-preview" ></PreviewBox>;
};

export default CodePreview;
