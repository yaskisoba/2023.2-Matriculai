import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "../Home";
import ButtonCadastrar from "../../components/Button";
import * as C from "./styles";
import axios from "axios";
import useAuth from "../../hooks/useAuth";  


import { 
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  Select,
  Text,
  Stack,
  Alert,
  AlertIcon,
  useToast,
  
} from "@chakra-ui/react";


const CreateTrilhas = () => {
  const { createEletivas } = useAuth();
  const navigate = useNavigate();
  const toastIdRef = React.useRef()

  const toast = useToast();  
  const [nomeTrilha, setTrilha] = useState("");
  const [descricao, setDescricao] = useState("");
  const [serie, setSerie] = useState("");
  const [eletivas, setEletivas] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = async () => {
    if (!nomeTrilha || !descricao || !serie || !eletivas) {
      
      setError("Preencha todos os campos");
       return;
    };
    console.log(nomeTrilha);
    console.log(descricao);
    console.log(serie);
    console.log(eletivas);

    try {
      const response = await axios.post('localhost:3000', {nomeTrilha, descricao, serie, eletivas   });
      
      if (response.status === 200) {
        
        toast({
          title: 'Trilha cadastrada.',
          description: "Trilha cadastrada com sucesso!",
          status: 'success',
          duration: 2800,
          isClosable: true,
          position: 'top'
        })

        // Sucesso, redirecionar ou realizar outras ações necessárias
        navigate("/home");
      } else {
        // Exibir mensagem de erro
        setError(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Imprime informações detalhadas sobre o erro Axios
        console.error("Erro ao fazer cadastro - Status:", error.response?.status);
        console.error("Erro ao fazer cadastro - Data:", error.response?.data);
      } else {
        console.error("Erro ao cadastrar:", error);
      }
      
      setError("Erro ao cadastrar. Tente novamente mais tarde.");
    }

  }
  return (
    <ChakraProvider>
        
        
        <C.Container>
          <C.Content>

          <Box  alignSelf={'center'} >
            <FormControl display="flex" flexDirection="column" gap="4">
              
              <Center paddingTop='5'>
                <C.titulo >
                  <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} as={'b'}>CADASTRO DE ELETIVAS</Text>
                </C.titulo>
              </Center>

              <Stack spacing={2}>

              
              <FormLabel  color= '#243A69'>Nome da trilha </FormLabel>
              <Input
                type='text' 
                size='lg'
                isRequired
                placeholder='Nome da trilha'
                value={nomeTrilha}
                onChange={(e)=>[setTrilha(e.target.value), setError("")]}
                />

              <FormLabel color= '#243A69'>Descrição da trilha</FormLabel> 
              <Input 
                type='text'
                isRequired
                placeholder='Descrição da trilha'
                value={descricao}
                onChange={(e)=>[setDescricao(e.target.value), setError("")]}
                />

              <FormLabel color= '#243A69'>Série</FormLabel> 
              <Select
                type='text'
                placeholder='Selecione a série' 
                _placeholder={{opacity:1, color: '#243A69' }} 
                isRequired
                value={serie}
                onChange={(e)=>[setSerie(e.target.value), setError("")]}
                >
                <option value='option1'> 1</option>
                <option value='option2'> 2</option>
                <option value='option3'> 3</option>
              </Select>

              <FormLabel color= '#243A69'>Eletivas relacionadas </FormLabel>
              <Select
                type='text'
                placeholder='Selecione as eletivas relacionadas' 
                _placeholder={{opacity:1, color: '#243A69' }} 
                isRequired
                value={serie}
                onChange={(e)=>[setSerie(e.target.value), setError("")]}
                >
                <option value='option1'> 1</option>
                <option value='option2'> 2</option>
                <option value='option3'> 3</option>
              </Select>

              <FormLabel color= '#243A69'>Professor Responsável</FormLabel> 
              <Input
                type='text' 
                isRequired
                placeholder='Professor Responsável'
                value={professor}
                onChange={(e) => [setProfessor(e.target.value), setError("")]}
                />
              
              <FormLabel color= '#243A69'>Número de vagas</FormLabel> 
              <Input
                type='text' 
                isRequired
                placeholder='Número de vagas'
                value={vagas}
                onChange={(e)=>[setVagas(e.target.value), setError("")]}
                />
              
              <FormLabel color= '#243A69'>Horário da aula</FormLabel> 
              <Input
                type='text'
                isRequired
                placeholder='Horário da aula'
                value={horario}
                onChange={(e)=>[setHorario(e.target.value), setError("")]}
                />
              <C.labelError>{error}</C.labelError>   
              <Center paddingBottom={5}>

              <ButtonCadastrar Text="Cadastrar" onClick={handleCadastro}> </ButtonCadastrar>
              </Center>
              </Stack>
              
            </FormControl>
          </Box>
          </C.Content>
        </C.Container>
      
    </ChakraProvider>
   
      
  );
};

export default CreateTrilhas;