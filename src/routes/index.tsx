import React from "react";
import { chakra, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SplitView from "../components/SplitView";
import dimensions from "../Shared/utils/dimensions";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <chakra.main
        height={`calc(100vh - ${dimensions.headerHeight}px)`}
        overflow="hidden"
      >
        <SplitView
          left={<Navigation />}
          right={
            <chakra.section
              h="100%"
              w="100%"
              paddingTop="50px"
              overflow="scroll"
            >
              <Container maxW="container.xl" padding="0 50px" h="100%">
                <Outlet />
              </Container>
            </chakra.section>
          }
          align="flex-start"
        />
      </chakra.main>
    </>
  );
};

export default Layout;
