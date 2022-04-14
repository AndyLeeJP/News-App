export const addClip = ({ clip }) => {
  return {
    type: "ADD_ClIP",
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: "DELETE_ClIP",
    clip,
  };
};
