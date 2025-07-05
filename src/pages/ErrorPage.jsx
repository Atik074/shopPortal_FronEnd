import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return(
        <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong 😕</h1>
      <p>{error.statusText || error.message}</p>
      <p>
        <a href="/" style={{ color: "#007bff" }}>Go back to Home</a>
      </p>
    </div>
       
    );
};

export default ErrorPage;