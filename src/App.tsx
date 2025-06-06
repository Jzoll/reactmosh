import Alert from "./components/Alert";
import Button from "./components/Button";
import ButtonClose from "./components/ButtonClose";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="warning" onClick={() => console.log("Clicked")}>
        Press Me
      </Button>
      <ButtonClose></ButtonClose>
    </div>
  );
}

export default App;
