import { Formulario } from "./components";
import { Header } from "./components";
import { ListadoPacientes } from "./components";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
