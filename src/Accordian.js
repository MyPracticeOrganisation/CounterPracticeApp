import "./App.css";

function Accordion({ title, content, toggle, open }) {
  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(title)}>
            <div>{title}</div>
            <div>{open ? "-" : "+"}</div>
          </div>
          {open && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </>
  );
}

export default Accordion;
