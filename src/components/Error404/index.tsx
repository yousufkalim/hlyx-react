import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Link
        to="/"
        style={{
          backgroundColor: "var(--button-color)",
          padding: "4px 8px",
          borderRadius: 4,
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Go Back
      </Link>
      <h1>Error404</h1>
    </div>
  );
};

export default Error404;
