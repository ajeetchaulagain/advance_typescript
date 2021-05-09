// const showType = <T>(arg: T): void => {
//   console.log(`typeof ${arg} - ${typeof arg}`);
// };

type GenericType<T> = {
  id: number;
  name: T;
};

const showType = (arg: GenericType<string>) => {
  console.log(`typeof ${arg} - ${typeof arg}`);
};

const showTypeTwo = (arg: GenericType<number>): void => {
  console.log(`typeof ${arg} - ${typeof arg}`);
};

export default showType;
export { showTypeTwo };
