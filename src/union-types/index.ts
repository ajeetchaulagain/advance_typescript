type UnionType = string | number;

const showType = (arg: UnionType): void => {
  console.log(`typeof ${arg} - ${typeof arg}`);
};

export default showType;
