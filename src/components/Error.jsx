import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h2 align="center">Page Not Found</h2>
      <Link to="/">
        <p align="center">Return to home</p>
      </Link>
    </>
  );
}
