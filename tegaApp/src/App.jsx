import Button from "./components/Button";
import Inputs from "./components/Inputs";


const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#eee",
        width: "100vw",
        gap: "40px"
      }}
    >
      <div>
        <h1>facebook</h1>
        <p>Facebook helps you connect and share with the people in your life</p>
      </div>

      <div style={{}}>
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Inputs
            inputType={"text"}
            placeholder={"Email address or phone number"}
          />
          <Inputs inputType={"password"} placeholder={"Password"} />
          <Button content={"Log in"} bgColor={"bgColor-login"} />

          <p style={{color: "blue"}}>Forgotten password?</p>

          <Button content={"Log in"} bgColor={"bgColor-new"} />

        </div>
        <p style={{ textAlign: "center" }}>
          <strong>Create a Page</strong> for a celebrity brand or business
        </p>
      </div>
    </div>
  );
};

export default App;
