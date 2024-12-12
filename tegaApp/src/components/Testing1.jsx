import { useState } from 'react';

const Test2 = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleStateChange = () => {
    setIsImageVisible(!isImageVisible); 
  };

  return (
    <div>
      {isImageVisible && (
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg"
          alt="my image"
          width="200"
        />
      )}

      <button onClick={handleStateChange}>Click me</button>
    </div>
  );
};

export default Test2;
