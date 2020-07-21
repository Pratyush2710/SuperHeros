import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="error-container">
      <h1>Oops! Page not Found</h1>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
}
