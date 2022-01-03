import { get } from "lodash";
import React, { FormEvent, useEffect, useState } from "react";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import { primaryDarkColor } from "../../config/colors";
import { api } from "../../services/api";
import { history } from "../../services/history";
import { Container } from "../../styles/global";
import { Form, ProfileImg } from "./style";
import defaultImage from "../../assets/img/image_error.jpg";

export const StudantUpdate = () => {
  const params: any = useParams();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [photo, setPhoto] = useState("");

  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    (async () => {
      setIsSubmiting(true);

      const response = await api.get(`alunos/${params.id}`);

      setNome(response.data.nome);
      setSobrenome(response.data.sobrenome);
      setEmail(response.data.email);
      setIdade(response.data.idade);
      setPeso(response.data.peso);
      setAltura(response.data.altura);

      const loadedPhoto = get(response.data, "Fotos[0].url", "");

      setPhoto(loadedPhoto);

      setIsSubmiting(false);
    })();
  }, [params.id]);

  console.log(photo);

  async function updateStudent(e: FormEvent) {
    e.preventDefault();

    setIsSubmiting(false);

    try {
      const data = {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      };

      await api.put(`/alunos/${params.id}`, data);

      setIsSubmiting(false);

      toast.success("Dados salvos");

      history.push("/");
    } catch (error) {
      setIsSubmiting(false);

      toast.error("Aluno não alterado");
    }
  }

  return (
    <Container>
      <Loading isLoading={isSubmiting} />

      <Link to="/">Voltar</Link>

      <h1>Editar Aluno</h1>

      <ProfileImg>
        {photo ? (
          <img
            src={photo}
            alt={nome}
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />
        ) : (
          <FaUserCircle size={180} color={primaryDarkColor} />
        )}
        <Link to={`/studant/photo/${params.id}`}>
          <FaEdit size={18} />
        </Link>
      </ProfileImg>

      <Form onSubmit={updateStudent}>
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
          />
        </label>
        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            name="sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Sobrenome"
            required
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </label>
        <label htmlFor="idade">
          Idade:
          <input
            name="idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
            placeholder="Idade"
            required
          />
        </label>
        <label htmlFor="peso">
          Peso:
          <input
            name="peso"
            type="number"
            value={peso}
            onChange={(e) => setPeso(Number(e.target.value))}
            placeholder="Peso"
            required
          />
        </label>
        <label htmlFor="altura">
          Altura:
          <input
            name="altura"
            type="number"
            value={altura}
            onChange={(e) => setAltura(Number(e.target.value))}
            placeholder="Altura"
            required
          />
        </label>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
};
