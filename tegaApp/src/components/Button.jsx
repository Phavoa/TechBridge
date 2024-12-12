const Button = ({content, bgColor}) => {
  return (
    <button className={bgColor} style={{width: "100%"}}>
        {content}
    </button>
  )
}

export default Button