import {
  GlobalStyle,
  ContainerStyle,
  TitleStyle
} from "./global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import ListForm from "./components/ListForm";

function App() {

  return (
    <div className="App">
      <ContainerStyle>
        <TitleStyle>Fomulário de usuários</TitleStyle>
        <Form />
        <ListForm />
      </ContainerStyle>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </div>
  )
}

export default App
