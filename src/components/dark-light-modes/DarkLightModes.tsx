import React from "react";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDataContext } from "../../AuthContext";

const DarkLightModes = () => {
  const { mode, handleSetMode } = useDataContext();
  return (
    <div>
      <IconButton onClick={handleSetMode}>
        {mode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </div>
  );
};

export default DarkLightModes;
