import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'
import Header from "../Home";
import ButtonCadastrar from "../../components/Button";
import * as C from "./styles";


import { 
  Input,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Select,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react"
import { Heading } from "chakra-ui";


const CreateEletivas = () => {
  return (
   <Box h="100vh">
        <Header></Header>
    <Center
      as="header"
      h={150}
      bg="teal.500"
      color='#F4F4F2'
      fontweight="bold"
      fontSize="4xl"
      pb="8"
      Content
      >     
    </Center>
    
    <Flex
      maxHeight='100vh'
      width='full'
      align="center"
      justify="center"
      bg="blackAlpha.200"
      //h="calc(100vh - 200 px)"
    >
      <Box
        
        px={12}
        py={12}
        width='full'
        maxWidth='450px'
        textAlign='center'
        boxShadow='lg'
        background='#F4F4F2'
        borderRadius='6px'
        >
          <form action="" autoComplete='off'>
            <FormControl display="flex" flexDirection="column" gap="4">
                        
              <Heading>
                <Text color='#243A69' fontSize='2xl' > Cadastro de Eletivas</Text>
              </Heading>
               <FormLabel>Nome da eletiva</FormLabel>
              <Input  
                //placeholder =  'Nome da eletiva' 
                //_placeholder={{opacity:1, color: 'inherit' }} 
                color= '#243A69' size='ls'
                isRequired 
              />
              <Input 
                placeholder =  'Descrição'  
                _placeholder={{opacity:1, color: 'inherit' }} 
                color= '#243A69' 
                size='md'
                isRequired 
              />
              <Select 
                placeholder='Selecione a série' 
                _placeholder={{opacity:1, color: 'inherit' }} 
                color= '#243A69' 
                size='md'
                isRequired
              >
                <option value='option1'> 1</option>
                <option value='option2'> 2</option>
                <option value='option3'> 3</option>
              </Select>

              <Input 
               //placeholder =  'Professor Responsável'  
                //_placeholder={{opacity:1, color: 'inherit' }} 
                //color= '#243A69' 
                //size='md'
                isRequired
              />
              <Input 
                placeholder =  'Número de vagas'  
                _placeholder={{opacity:1, color: 'inherit' }} 
                color= '#243A69' 
                size='md'
                isRequired
              />
              <Input 
                placeholder =  'Horário da aula'  
                _placeholder={{opacity:1, color: 'inherit' }} 
                color= '#243A69'
                size='md'
                isRequired 
              />
              
              <ButtonCadastrar Text="Cadastrar" />
                
              
            </FormControl>
          </form>
      </Box>
      
    </Flex>
   </Box>
      
  );
};

export default CreateEletivas;