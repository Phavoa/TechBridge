const Button = ({ content, bgColor }) => {
  const className = bgColor === "secondary" ? "button secondary" : "button";
  return <button className={className}>{content}</button>;
};

export default Button;
