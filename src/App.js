import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import CodeArea from "./components/CodeArea";
import CodePreview from "./components/CodePreview";

const ToggleDarkModeButton = styled.button`
  display: flex;
  margin: 10px;
`;

function App() {
  function compile() {
    const html = document.getElementById("HTML");
    const css = document.getElementById("CSS");
    const js = document.getElementById("JS");
    const code = document.getElementById("code-preview").contentWindow.document;
    document.body.onkeyup = function () {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  useEffect(() => {
    compile();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leira's Code Editor</h1>
      </header>
      <ToggleDarkModeButton>Toggle Dark Mode</ToggleDarkModeButton>
      <CodeArea placeholder="HTML" />
      <CodeArea placeholder="CSS" />
      <CodeArea placeholder="JS" />
      <CodePreview />
    </div>
  );
}

export default App;
