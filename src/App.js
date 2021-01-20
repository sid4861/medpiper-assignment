import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "../src/components/form";
import { Provider as PersonalDetailsProvider } from "./context/personalDetailsContext";
import MyDocument from "./components/resumePreview";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <PersonalDetailsProvider>
      <div className="App">
        <Container fluid>
          <Row style={{height: '100vh'}} >
            <Col md={6}>
              <Form />
            </Col>
            <Col md={6}>
              {/* <PDFViewer style={{width: '100%', height: '100vh'}}> */}
                <MyDocument />
              {/* </PDFViewer> */}
            </Col>
          </Row>
        </Container>
      </div>
    </PersonalDetailsProvider>
  );
}

export default App;
