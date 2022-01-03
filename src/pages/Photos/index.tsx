import { get } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { history } from "../../services/history";
import { Container } from "../../styles/global";
import { Form } from "./style";

export const Photos = () => {
  const params: any = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/alunos/${params.id}`);

        const loadedPhoto = get(response.data, "Fotos[0].url", "");

        setPhoto(loadedPhoto);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        history.goBack();
      }
    })();
  }, [params.id]);

  async function handleChange(e: any) {
    const file = e.target.files[0];

    const fileUrl = URL.createObjectURL(file);

    setPhoto(fileUrl);

    const formData = new FormData();

    formData.append("foto", file);
    formData.append("aluno_id", params.id);

    try {
      setIsLoading(true);

      await api.post(`/fotos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Foto enviada com sucesso");

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Erro ao enviar foto");
      history.goBack();
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Foto do Aluno</h1>

      <Form>
        <label htmlFor="foto">
          {photo ? <img src={photo} alt="Foto" /> : "Selecionar"}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>

      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
};
