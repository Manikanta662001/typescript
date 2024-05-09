import React, { useEffect, useState } from "react";
import { QuotesInterface } from "../interfaces";

function RandomQuoteGenerator() {
  const [allQuotes, setAllQuotes] = useState<QuotesInterface[]>([]);
  const [quote, setQuote] = useState<QuotesInterface>({} as QuotesInterface);
  const handleNewQuote = () => {
    const singleQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    setQuote(singleQuote);
  };
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((resp) => {
        setAllQuotes(resp);
        setQuote(resp[0]);
      })
      .catch((error) => alert(error.message));
  }, []);
  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={() => handleNewQuote()}>New Quote</button>
      <div>
        <h2>"{quote?.text}"</h2>
        <p>-{quote?.author}</p>
      </div>
    </div>
  );
}

export default RandomQuoteGenerator;
