import { Home } from "./home";
import { ModalProvider } from "./components/creategroup/groupcontext";

function App() {
  return (
   <>
    <ModalProvider>
      <Home />
    </ModalProvider>
   </>
  );
}

export default App;