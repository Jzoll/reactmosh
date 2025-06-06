import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="warning" onClick={() => console.log("Clicked")}>
        Press Me
      </Button>
    </div>
  );
}

export default App;
