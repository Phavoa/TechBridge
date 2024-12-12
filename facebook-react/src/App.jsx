import "./App.css";
import Button from "./components/Button";
import Inputs from "./components/Inputs";

const App = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left">
        <h1>Facebook</h1>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>

      {/* Right Section */}
      <div className="right">
        <Inputs inputType="text" placeholder="Email or phone number" />
        <Inputs inputType="password" placeholder="Password" />
        <Button content="Log In" bgColor="primary" />

        <p className="forgot-password">Forgotten password?</p>

        <Button content="Create New Account" bgColor="secondary" />

        <p className="create-page">
          <strong>Create a Page</strong> for a celebrity, brand, or business.
        </p>
      </div>
    </div>
  );
};

export default App;
