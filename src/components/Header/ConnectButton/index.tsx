import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../../Shared/utils";
import WalletIcon from "./WalletIcon/index";
import { useCookies } from "react-cookie";

const ConnectButton = () => {
  const { active, account, activate, deactivate } = useWeb3React();
  const [, , removeCookie] = useCookies(["jwt"]);

  async function connect() {
    try {
      await activate(injected);
      window.localStorage.removeItem("disconnect");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();

      window.localStorage.setItem("disconnect", "true");
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleClick = () => {
    if (active) {
      disconnect();

      removeCookie("jwt", { path: "/" });
    } else {
      connect();
    }
  };

  return (
    <Button
      colorScheme="green"
      backgroundColor="green.300"
      onClick={handleClick}
    >
      <HStack spacing={2}>
        <WalletIcon />
        {active ? (
          <Text color="black">
            {`${account?.slice(0, 2)}...${account?.slice(
              account.length - 7,
              account.length
            )}`}
          </Text>
        ) : (
          <Text color="black">Connect</Text>
        )}
      </HStack>
    </Button>
  );
};

export default ConnectButton;
