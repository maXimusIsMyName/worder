let test_data = {
  ids: [0],
  dict: {
    id: 0,
    name: "dict1",
    languages: ["english", "russian"],
    description:
      "test dictionary that contains 5 words to test how the app works",
    "word-count": 4,
    words: [0, 1, 3, 4]
  },
  words: [

    {
      id: 0,
      translations: [
        { name: "english", content: "hi" },
        { name: "russian", content: "privet" },
      ],
    },
    {
      id: 1,
      translations: [
        { name: "english", content: "bye" },
        { name: "russian", content: "poka" },
      ],
    },
    {
      id: 2,
      translations: [
        { name: "english", content: "good" },
        { name: "russian", content: "horosho" },
      ],
    },
    {
      id: 3,
      translations: [
        { name: "english", content: "ready" },
        { name: "russian", content: "gotov" },
      ],
    },
    {
      id: 4,
      translations: [
        { name: "english", content: "local" },
        { name: "russian", content: "lokalniy" },
      ],
    },
  ],
};
export const authorize = () => {
  throw Error("not supported yet");
};
export const registration = () => {
  throw Error("not supported yet");
};

export const resetPassword = () => {
  throw Error("not supported yet");
};

export const userData = () => {
  throw Error("not supported yet");
};
export const updateUserData = () => {
  throw Error("not supported yet");
};
export const dictsId = () => {
  return Promise.resolve(
    new Response(JSON.stringify( test_data.ids ), { status: 200 })
  );
};
export const dictById = (id) => {
  return Promise.resolve(
    new Response(JSON.stringify(test_data.dict), { status: 200 })
  );
};
export const wordsByDictId = (id) => {
  return Promise.resolve(
    new Response(JSON.stringify( test_data.words ), { status: 200 })
  );
};
