import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./PasswordGenerator.css";
import TextField from "@mui/material/TextField";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
const data = {
  small: "abcdefghijklmnopqrstuvwxyz",
  capital: "ABCDFGHIJKLMNOPQRSTUVWXYZ",
  numberchars: "1234567890",
  special: `!@#$%^&*()-_=+[{]}\\|;:\,<.>/?`,
};

function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [allcheckboxes, setAllCheckBoxes] = useState({
    uppercase: false,
    lowercase: true,
    numbers: false,
    specialchars: false,
  });
  const [isCopied, setIsCopied] = useState(false);
  const [pwdlength, setPwdLength] = useState(8);
  const { uppercase, lowercase, numbers, specialchars } = allcheckboxes;
  const { small, capital, numberchars, special } = data;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllCheckBoxes({
      ...allcheckboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setPwdLength(newValue as number);
  };

  const handleGenerate = () => {
    let generatedPassword: string = "";
    let validChars: string = "";
    if (lowercase) validChars += small;
    if (uppercase) validChars += capital;
    if (numbers) validChars += numberchars;
    if (specialchars) validChars += special;
    if (validChars) {
      for (let i = 0; i < pwdlength; i++) {
        const randomCharacter =
          validChars[Math.floor(Math.random() * validChars.length)];
        generatedPassword += randomCharacter;
      }
      setPassword(generatedPassword);
    } else {
      alert("Please Select Atleast one Checkbox");
      setPassword("");
    }
  };

  const handleCopy = () => {
    try {
      window.navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div>
      <form className="pwd-form">
        <h1>Password Generator</h1>
        <TextField
          id="txt"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{ maxLength: 8 }}
        />
        <Button
          variant="outlined"
          color={isCopied ? "success" : "info"}
          onClick={handleCopy}
        >
          {isCopied ? "Copied" : "Copy"}
        </Button>
        <div>
          <Typography id="non-linear-slider" gutterBottom>
            Password Length You Need: <b>{pwdlength}</b>
          </Typography>
          <Slider
            sx={{ width: 200 }}
            value={pwdlength}
            min={6}
            max={20}
            step={1}
            onChange={handleChange}
          />
        </div>
        <div id="allcheckboxes">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={uppercase}
                  name="uppercase"
                  onChange={handleCheckboxChange}
                />
              }
              label="Uppercase"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={lowercase}
                  name="lowercase"
                  onChange={handleCheckboxChange}
                />
              }
              label="Lowercase"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={numbers}
                  name="numbers"
                  onChange={handleCheckboxChange}
                />
              }
              label="Numbers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={specialchars}
                  name="specialchars"
                  onChange={handleCheckboxChange}
                />
              }
              label="Special Characters"
            />
          </FormGroup>
        </div>
        <div id="btn">
          <Button onClick={() => handleGenerate()} variant="contained">
            Generate A Password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PasswordGenerator;
