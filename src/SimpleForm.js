import React from "react";

// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = (event) => {
    event.preventDefault();
    
    return input &&
      input.value.indexOf("@") > -1 &&
      onSubmitted({
        EMAIL: input.value
      });
  }

  return (
    <form className={className} style={style} onSubmit={submit}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (input = node)}
        type="email"
        placeholder="Your email"
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default SimpleForm;
