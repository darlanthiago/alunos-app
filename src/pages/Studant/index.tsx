import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { get } from "lodash";
import { api } from "../../services/api";
import { Container } from "../../styles/global";
import { Button, ProfilePicture, StudantContainer } from "./style";
import { FaEdit, FaUserCircle, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import defaultImage from "../../assets/img/image_error.jpg";

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

  async function handleDelete(id: number) {
    try {
      setIsLoading(true);

      await api.delete(`/alunos/${id}`);

      const filtered = studants.filter((s) => s.id !== id);

      setStudants(filtered);

      setIsLoading(false);

      toast.success("Aluno removido");
    } catch (error) {
      setIsLoading(false);

      toast.error("Não foi possível remover");
    }
  }

  return (
    <Container>
      <h1>Alunos</h1>

      <Loading isLoading={isLoading} />

      <Button>
        <Link to="/studant/create">Adicionar aluno</Link>
      </Button>

      <StudantContainer>
        {studants.map((item, index) => (
          <div key={index}>
            <ProfilePicture>
              {get(item, "Fotos[0].url", false) ? (
                <img
                  src={item.Fotos[0].url}
                  alt={item.Fotos[0].filename}
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{item.nome}</span>
            <span>{item.email}</span>

            <Link to={`/studant/update/${item.id}`}>
              <FaEdit size={16} />
            </Link>
            <FaWindowClose size={16} onClick={() => handleDelete(item.id)} />
          </div>
        ))}
      </StudantContainer>
    </Container>
  );
};
