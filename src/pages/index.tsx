import React from 'react';
import { Button, Flex, Heading, VStack, Center, Icon, LightMode } from "@chakra-ui/react";
import SidebarWithHeader from "../components/SideBar";
import NextLink from "next/link";
import { RiPencilLine } from "react-icons/ri";

const Home = () => {
  return (
    <>

        <Flex align="center" justify="center" w="100vw" h="100vh">
          <VStack spacing="10px">
            <Heading>
              Olá bem vindo!
            </Heading>
            <LightMode>
              <NextLink
                href={{
                  pathname: '/users',
                }}
                passHref
              >
                <Button
                  size={"sm"}
                  fontSize={"sm"}
                  colorScheme={"facebook"}
                >
                  ENTRAR
                </Button>
              </NextLink>
            </LightMode>
          </VStack>
        </Flex>

    </>
  )
}

export default Home
