import { useRef } from "react";

const Test = () => {
  const handleRef = useRef(null);

  const handleRefChange = () => {
    if (handleRef.current) {
      handleRef.current.style.display = "none";
    }
  };

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg"
        alt="my image"
        width="200"
        ref={handleRef}
      />
      <button onClick={handleRefChange}>Click me</button>
    </div>
  );
};

export default Test;
