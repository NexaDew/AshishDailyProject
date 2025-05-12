import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>you have clicked {count} times</h1>
      <Button
        variant="contained"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click me
      </Button>
    </div>
  );
}

export default App;
