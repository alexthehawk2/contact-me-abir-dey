import React from "react";

const Failure = () => {
  return (
    <main>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Oh Snap!</h1>
          <p className="col-md-8 fs-4">
            There was problem while submitting the from, please try again
          </p>
          <a href="/">
            <button className="btn btn-lg btn-warning" type="submit">
              Try Again
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Failure;
