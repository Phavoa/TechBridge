const Inputs = ({inputType, placeholder}) => {

  return (
    <div>
        <input type={inputType} placeholder={placeholder} style={{border: "1px solid black", padding: "10px", width: "100%", borderRadius: "10px"}}/>
    </div>
  )
}

export default Inputs