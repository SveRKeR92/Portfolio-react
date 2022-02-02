import { Alert } from "react-bootstrap";

function App() {
  return (
    <>
      {      
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))
      }
    </>
  );
}

export default App;
