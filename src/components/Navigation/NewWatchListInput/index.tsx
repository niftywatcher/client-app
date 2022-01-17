import { HStack, Input, Spinner } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

type NewWatchListInputProps = {
  value: string;
  disabled: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSetWatchList: () => void;
  loading: boolean;
};

const NewWatchListInput = ({
  value,
  setValue,
  handleSetWatchList,
  disabled,
  loading,
}: NewWatchListInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <HStack>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Input
            maxW="140px"
            color="white"
            variant="unstyled"
            placeholder="New Watchlist"
            backgroundColor={isFocused ? "gray.800" : "black"}
            padding="2"
            value={value}
            isDisabled={disabled}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSetWatchList();
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <AddIcon
            cursor="pointer"
            color="green.300"
            onClick={handleSetWatchList}
          />
        </>
      )}
    </HStack>
  );
};

export default NewWatchListInput;
