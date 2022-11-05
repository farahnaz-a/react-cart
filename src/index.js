import React from "react";
import ReactDOM from "react-dom/client"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyProvider } from "./context";
import App from "./App";





const Home = () => {
   

  return (
    <>
      <MyProvider>
          <App />  
      </MyProvider> 

    </> 

  );

}

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Home />);
