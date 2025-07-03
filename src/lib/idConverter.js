export const replaceMongoIdArray = (array) => {
  return array.map(({ _id, ...rest }) => ({
    id: _id.toString(),
    ...rest,
  }));
};




export const replaceMongoIdObj = ({ _id, ...rest }) => ({
  id: _id.toString(),
  ...rest,
});

