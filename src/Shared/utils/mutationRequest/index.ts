import request from "graphql-request";

const API_URL = process.env.REACT_APP_API || "";

// TODO: how to pass generic return

export const mutationRequest = async <
  TQuery extends string,
  TVariables extends object,
  TData
>(
  query: TQuery,
  variables: TVariables
): Promise<TData> => {
  return await request(API_URL, query, variables);
};
