import request, { gql } from "graphql-request";

const API_URL = process.env.REACT_APP_API || "";
interface GenerateNonceVariables<T> {
  address: T;
}

interface NonceReturn {
  data: {
    GenerateNonce: string;
  };
}

const getNonceApi = async (
  variables: GenerateNonceVariables<string>
): Promise<NonceReturn> => {
  const response = await request(
    API_URL,
    gql`
      mutation generateNonce($address: String!) {
        GenerateNonce(address: $address)
      }
    `,
    variables
  );

  return response;
};

export type VerifySigVariables<T> = {
  address: T;
  signature: String;
};

export type VerifySigReturn = {
  data: {
    VerifySignature: boolean;
  };
};

const verifySigQuery = gql`
  mutation verifySignature($address: String!, $signature: String!) {
    VerifySignature(address: $address, signature: $signature)
  }
`;

const verifySigApi = async (
  variables: VerifySigVariables<string>
): Promise<VerifySigReturn> => {
  const response = await request(API_URL, verifySigQuery, variables);

  return response;
};

export { getNonceApi, verifySigApi, verifySigQuery };
