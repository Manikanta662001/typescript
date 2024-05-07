import React, { useState, useRef, useEffect } from "react";

interface Props {
  count: number;
}
export const Count: React.FunctionComponent<Props> = (props) => {
  const [val, setval] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setval(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setval("");
    alert("Form is Submitted");
  };
  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current, "2020");
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <h1>Count</h1>
      <h4>{props.count}</h4>
      <h4>{val}</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          onChange={(event) => handleChange(event)}
          value={val}
          ref={inputRef}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
