import "./App.css";
import Testimonio from "./Componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>This is what several students say about the Sena: </h1>

        <Testimonio
          nombre="Gabriel Ramirez"
          pais="colombia"
          imagen="1"
          empresa="Indra"
          testimonio="I am a student, I consider myself a person with the need to learn new things,
         I characterize myself as charismatic, collaborative and resilient, 
         I like to work in a team and generate new ideas that can help the organization,Sena helped me get the job of my dreams in Indra."
        />
        <Testimonio
          nombre="Fernando Trujillo"
          pais="colombia"
          imagen="2"
          empresa="Nexsys"
          testimonio="I am a student, I consider myself a person who likes to work in a team ,
         I characterize myself as a person who likes constant change, I like to help people and create strong bonds, I'm very grateful to Sena  for helpeing  me find a job with  Nexsys."
        />
        <Testimonio
          nombre="Catherine Rodriguez"
          pais="colombia"
          imagen="3"
          empresa="Bigview"
          testimonio="Hi, I'm Catherine. I love everything about you. Teamwork is what I enjoy the most, I invest my time in improving as a person and being able to fulfill my dreams, I thank alsena for helping me find this wonderful bigview company."
        />
      </div>
    </div>
  );
}

export default App;
