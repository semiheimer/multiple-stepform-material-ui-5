import "./App.css";
import UserForm from "./components/UserForm";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <UserForm />
    </ThemeProvider>
  );
}

export default App;
