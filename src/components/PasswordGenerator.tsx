import React, { useState } from "react";

function PasswordGenerator() {
  const [characters, setCharacters] = useState<string>(
    "abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ1234567890"
  );
  const [password, setPassword] = useState<string>("");
  const handleGenerate = () => {
    let generatedPassword = "";
    for (let i = 0; i < 8; i++) {
      const randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      generatedPassword += randomCharacter;
    }
    setPassword(generatedPassword);
  };
  return (
    <div>
      <h1>Password Generator</h1>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        maxLength={8}
      />
      <button onClick={() => handleGenerate()}>Generate A Password</button>
    </div>
  );
}

export default PasswordGenerator;
