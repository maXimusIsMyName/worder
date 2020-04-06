import * as protocol from "./protocol";
export const detailsById = (id) => {
  return protocol.dictById(id).then( response => response.json())
};
export const dicts = () => {
  return protocol.dictsId().then( response => response.json())
};
export const words = (id) => {
  return protocol.wordsByDictId(id).then( response => response.json())
};
