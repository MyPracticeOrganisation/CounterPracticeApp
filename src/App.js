import { useState } from "react";
import Accordion from "./Accordian";
import "./App.css";
import Counter from "./Counter";
import Demo from "./Demo";

function App() {
  const accordionData = [
    { title: "Section 1", content: <Counter /> },
    { title: "Section 2", content: <Demo /> },
  ];

  const [openedSection, setOpenedSection] = useState();

  const handleToggle = (title) => {
    setOpenedSection(title);
  };
  return (
    <>
      <h1>Accordion Example</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion
            title={title}
            content={content}
            toggle={handleToggle}
            open={title === openedSection}
          />
        ))}
      </div>
    </>
  );
}

export default App;
