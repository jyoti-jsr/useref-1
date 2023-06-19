import { useRef, useState } from "react";

// ====== the 2 main differences between reference and state:

// 1. Updating a reference doesn't trigger re-rendering,
//    while updating the state makes the component re-render;
// 2. The reference update is synchronous (the updated reference value is available right away),
//    while the state update is asynchronous (the state variable is updated after re-rendering).

const DifferenceBetweenUseRefAndState = () => {
  const [count, setCount] = useState(0);
  const initialValue = 0;
  const reference = useRef(initialValue);

  const handleClick1 = () => {
    // setCount((c) => c + 1);
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };
  console.log(`I rendered while using useState`);

  const handleClick2 = () => {
    reference.current++;
    console.log(`clicked ${reference.current} times`);
  };
  console.log(`I rendered while using useRef`);

  return (
    <>
      <h2> useState - Count : {count}</h2>
      <button onClick={() => handleClick1()}>Click to inc count</button>
      <h2> useRef - Count : {reference.current}</h2>
      <button onClick={() => handleClick2()}>Click to inc count</button>
    </>
  );
};
export default DifferenceBetweenUseRefAndState;
