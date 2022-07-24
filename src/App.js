import React from 'react';
import './App.css';
import CountdownPage from "./pages/Countdown";

function App() {
  // Change date to current day and time to test countdown finished state
  return (
    <CountdownPage date='2022-07-28T00:00:00' />
  );
}

export default App;
