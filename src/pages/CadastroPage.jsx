import { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import image from "../assets/sei-site.jpeg"
// import api from "../api/api";

function CadastroPage() {
  // const navigate = useNavigate()
  const [form, setForm] = useState({
    googleID: "",
    autor: "",
    ranking: 0,
    categoria: "",
    imagemCapa: "",
    idioma: "",
    qtdPaginas: 0,
    titulo: "",
    subtitulo: "",
    ultPagLida: 0,
    anotacoes: "",
    dataInicio: "",
    dataConclusao: "",
    tipo: "",
    caminho: "",
    status: "Ler",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // try {
    //   // const livro = await api.post(
    //   //   "/books/",
    //   //   form
    //   );

      setForm({
        googleID: "",
        autor: "",
        ranking: "",
        categoria: "",
        imagemCapa: "",
        idioma: "",
        qtdPaginas: "",
        titulo: "",
        subtitulo: "",
        ultPagLida: "",
        anotacoes: "",
        dataInicio: "",
        dataConclusao: "",
        tipo: "",
        caminho: "",
        status: "Ler",
      });

      toast.success("Cadastro concluído com sucesso!!");
      // navigate(`/livro/${livro.data._id}`)
    // } catch (error) {
    //   console.log(error);
    //   toast.error("o Cadastro não pode ser concluído");
    // }
  }

  return (
    <div>
      <h1 style={{ textAlign: "start" }}>Cadastrar Processo</h1>
      <Container>
        <Row>
          <Col className="col-3">
            
              <img
                // variant="top"
                style={{ width: "14rem", height: "13rem", marginTop: "30px", border: "1px solid #ddd", borderRadius:"5px" }}
                src={form.imagemCapa? form.imagemCapa : image}
                alt="capa do livro"
              />
            
            <div className="buttons">
              <Form.Group>
                <Button
                  style={{marginRight:"15px"}}
                  variant="secondary"
                  disabled = {form.titulo === "" ? true:false}
                  onClick={handleSubmit}
                >
                  Salvar
                </Button>{" "}
              </Form.Group>
              <Form.Group>
                <Link to="/">
                  <Button variant="secondary">Voltar</Button>{" "}
                </Link>
              </Form.Group>
            </div>
          </Col>

          <Col>
            <Form>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Número SEI"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="titulo"
                    value={form.titulo}
                    onChange={handleChange}
                    placeholder="Insíra o título do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Servidor"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="subtitulo"
                    value={form.subtitulo}
                    onChange={handleChange}
                    placeholder="Insíra o nome do servidor"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="e-mail do servidor"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="autor"
                    value={form.autor}
                    onChange={handleChange}
                    placeholder="Insíra o nome do autor do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Número de Páginas"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="qtdPaginas"
                    value={form.qtdPaginas}
                    onChange={handleChange}
                    placeholder="Insíra o número de páginas do Livro"
                  />
                </FloatingLabel>
              </Form.Group>


              <FloatingLabel
                  controlId="floatingInput"
                  label="Última Página Lida"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="ultPagLida"
                    value={form.ultPagLida}
                    onChange={handleChange}
                    placeholder="Insíra o número de páginas do Livro"
                  />
                </FloatingLabel>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Categoria"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    placeholder="Insíra o gênero do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              

              <div>
                <Form className="dataLeitura">
                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Leitura iniciada em:"
                      className="mb-3"
                    >
                      <Form.Control
                        type="date"
                        style={{ width: "200px" }}
                        name="dataInicio"
                        value={form.dataInicio}
                        onChange={handleChange}
                        // placeholder="Insíra o título do Livro"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Leitura terminada em:"
                      className="mb-3"
                    >
                      <Form.Control
                        type="date"
                        style={{ width: "200px" }}
                        name="dataConclusao"
                        value={form.dataConclusao}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Form>
              </div>
            </Form>
          </Col>

          <Col className="col">
            <Form>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Avaliação"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="ranking"
                    value={form.ranking}
                    onChange={handleChange}
                    placeholder="De 1 a 5, quanto você gosta do Livro"
                  />
                </FloatingLabel>
              </Form.Group>


              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Assunto"
                  className="mb-3"
                >
                  <Form.Select
                    name="tipo"
                    
                    onChange={handleChange}
                  >
                    <option>Selecione o tipo de Extensão do arquivo</option>
                    <option value="pdf">PSSS</option>
                    <option value="epub">Ressarcimento a Outros Órgãos</option>
                    <option value="físico">Ressarcimento ao TJDFT</option>
                    <option value="físico">Parcelamento de Débito</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>


              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Comentários"
                >
                  <Form.Control
                    as="textarea"
                    name="anotacoes"
                    value={form.anotacoes}
                    onChange={handleChange}
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default CadastroPage;