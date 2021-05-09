// Partial Types
// type PartialType = {
//   id: number;
//   firstName: string;
//   lastName: string;
// };

// function showType(args: Partial<PartialType>) {
//   console.log(args);
// }

// showType({ id: 1 });
// // Output: {id: 1}

// showType({ firstName: 'John', lastName: 'Doe' });
// // Output: {firstName: "John", lastName: "Doe"}

interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

const showType = (args: Pick<PickType, 'firstName'>): void => {
  console.log(args);
};

export default showType;
