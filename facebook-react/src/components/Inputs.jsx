const Inputs = ({ inputType, placeholder }) => {
  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
};

export default Inputs;
