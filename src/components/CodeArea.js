import React, { useEffect } from "react";
import styled from "styled-components";

const CodeArea = ({ placeholder }) => {
  const someCode = <h1>Leira</h1>;
  return <textarea id={placeholder} placeholder={placeholder}></textarea>;
};

export default CodeArea;
