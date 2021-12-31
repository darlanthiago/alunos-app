import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { get } from "lodash";
import { api } from "../../services/api";
import { Container } from "../../styles/global";
import { ProfilePicture, StudantContainer } from "./style";
import {
  FaEdit,
  FaUserCircle,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";

type PhotosData = {
  url: string;
  filename: string;
};

type StudantsData = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
  peso: number;
  altura: number;
  Fotos: PhotosData[];
};

export const Studant = () => {
  const [studants, setStudants] = useState<StudantsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/alunos");
        setStudants(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Não foi possível carregar os alunos");
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <Loading isLoading={isLoading} />

      <StudantContainer>
        {studants.map((item, index) => (
          <div key={index}>
            <ProfilePicture>
              {get(item, "Fotos[0].url", false) ? (
                <img src={item.Fotos[0].url} alt={item.Fotos[0].filename} />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{item.nome}</span>
            <span>{item.email}</span>

            <Link to={`/studant/${item.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/studant/${item.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation size={16} />
          </div>
        ))}
      </StudantContainer>
    </Container>
  );
};
