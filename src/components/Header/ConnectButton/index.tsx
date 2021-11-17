import React from "react";
import { Button } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../../Shared/utils";

const ConnectButton = () => {
  // const { active, account, library, connector, activate, deactivate } =
  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleClick = () => {
    if (active) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <Button colorScheme="green" onClick={handleClick}>
      {active
        ? `${account?.slice(0, 5)}...${account?.slice(
            account.length - 4,
            account.length
          )}`
        : "Connect"}
    </Button>
  );
};

export default ConnectButton;
