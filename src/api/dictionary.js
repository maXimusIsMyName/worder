import * as protocol from "./protocol";
import React from 'react'
export const DictContext = React.createContext({});
export const detailsById = (id) => {
  return protocol.dictById(id).then((response) => response.json());
};
export const dicts = () => {
  return protocol.dictsId().then((response) => response.json());
};
export const words = (id) => {
  return protocol.wordsByDictId(id).then((response) => response.json());
};