type LeftType = {
  id: number;
  left: string;
};

type RightType = {
  id: number;
  right: string;
};

type IntersectionType = LeftType & RightType;

const showType = (arg: IntersectionType): void => {
  console.log(arg);
};

export default showType;
