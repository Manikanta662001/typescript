

const themeSettings = (mode: "light" | "dark") => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#90caf9",
            },
            secondary: {
              main: "#f48fb1",
            },
          }
        : {
            primary: {
              main: "#1976d2",
            },
            secondary: {
              main: "#f50057",
            },
          }),
    },
  };
};

export default themeSettings;
