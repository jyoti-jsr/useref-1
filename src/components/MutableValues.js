import { useRef } from "react";

const MutableValue = () => {
  const initialValue = 0;
  const reference = useRef(initialValue);
  // console.log(reference); //{current:0}
  const handleClick = () => {
    reference.current++;
    console.log(`clicked ${reference.current} times`);
  };
  console.log(`I rendered`);
  // Updating the reference value countRef.current++
  // doesn't trigger component re-rendering.
  return (
    <>
      <h5>mutable values</h5>
      <button onClick={() => handleClick()}>Click</button>
    </>
  );
};
export default MutableValue;
