import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { history } from "../../services/history";
import { Container } from "../../styles/global";
import { Form } from "./style";

export const StudantStore = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const [isSubmiting, setIsSubmiting] = useState(false);

  async function createStudent(e: FormEvent) {
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

      await api.post("/alunos", data);

      setIsSubmiting(false);

      toast.success("Aluno adicionado");

      history.push("/");
    } catch (error) {
      setIsSubmiting(false);

      toast.error("Aluno não adicionado");
    }
  }

  return (
    <Container>
      <Link to="/">Voltar</Link>
      <h1>Adicionar Aluno</h1>

      <Loading isLoading={isSubmiting} />

      <Form onSubmit={createStudent}>
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
