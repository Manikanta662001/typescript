import React, { useEffect, useState } from "react";
import emojis from "./emojis.json";
import { Button } from "@mui/material";
interface EmojisState {
  title: string;
  symbol: string;
  keywords: string;
}

function EmojiSearch() {
  const [allEmojis, setAllEmojis] = useState<EmojisState[]>(emojis);
  const [searchedVal, setSearchedVal] = useState<string>("");
  const [filteredEmojis, setFilteredEmojis] = useState<EmojisState[]>(emojis);
  const [message, setMessage] = useState<string>("");

  const handleSearch = (e: any) => {
    setSearchedVal(e.target.value);
  };
  const handleMessageSend = () => {
    if (message.trim().length > 0) {
      window.alert("Message Sent Successfully");
      setMessage("");
    } else {
      window.alert("Enter a Valid Message");
    }
  };
  useEffect(() => {
    const filtered = allEmojis.filter((emoji) =>
      emoji.title.toLowerCase().includes(searchedVal.toLowerCase())
    );
    setFilteredEmojis(filtered);
  }, [searchedVal]);
  return (
    <div>
      <form>
        <h1>Emoji Search</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a Message to send"
            value={message}
            onChange={(e: any) =>
              setMessage((prevmsg) => prevmsg + e.target.value)
            }
          />
          <Button variant="outlined" onClick={() => handleMessageSend()}>
            Send Message
          </Button>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search for an Emoji"
            onChange={handleSearch}
            value={searchedVal}
          />
        </div>
        {filteredEmojis.map((emoji) => {
          return (
            <Button
              key={emoji.title}
              onClick={() => setMessage((prevmsg) => prevmsg + emoji.symbol)}
            >
              {emoji.symbol}
            </Button>
          );
        })}
      </form>
    </div>
  );
}

export default EmojiSearch;
