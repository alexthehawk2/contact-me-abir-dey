// import "./App.css";
import "./assets/styles/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  interface UserData {
    firstName: string;
    lastName: string;
    email: string;
  }
  interface ResponseData {
    status: string;
    message: string;
  }
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const validateFormAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email } = userData;
    if (firstName === "" || lastName === "" || email === "") {
      console.log("invalid");
    } else {
      const subscribingUser: UserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      //Post request to our api
      const res = await axios.post(
        "https://65.2.166.175/submit-details",
        subscribingUser
      );
      const data = res.data as ResponseData;
      if (data.status == "1") {
        window.location.href = "/success";
      } else {
        window.location.href = "/failure";
      }
    }
  };
  useEffect(() => {
    const target = document.getElementById("year");
    const creationYear = 2022;
    const currentYear: number = new Date().getFullYear();
    const range =
      currentYear !== creationYear
        ? `${creationYear}-${currentYear}`
        : `${currentYear}`;
    if (target) {
      target.textContent = range;
    }
  }, []);
  return (
    <>
      <main className="form-signin w-100 d-flex justify-content-center align-items-center">
        <form
          className="d-flex flex-column align-items-center"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={validateFormAndSubmit}
        >
          <img
            className="mb-4"
            src="/img/4529564.jpg"
            alt=""
            width={72}
            height={57}
          />
          <h1>👋 Hello World, This is Abir Dey! 👨‍💻</h1>
          <h1 className="h3 mb-3 fw-normal">
            Enter Your Details Below and I'll Get Back to You ✉️🔙
          </h1>
          <div className="form-floating w-100">
            <input
              name="firstName"
              type="text"
              className="form-control top"
              required
              autoFocus
              value={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating w-100">
            <input
              name="lastName"
              type="text"
              className="form-control middle"
              required
              value={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          <div className="form-floating w-100">
            <input
              name="email"
              type="email"
              className="form-control buttom"
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </main>
      <footer className="bg-dark py-3 justify-content-center d-flex">
        <span className="text-bg-dark">© </span>
        <span id="year" className="text-bg-dark pe-2" />
        <span className="text-bg-dark pe-2"> Abir Dey</span>
        <a
          className="text-bg-dark"
          href="http://github.com/alexthehawk2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            style={{ backgroundColor: "white", borderRadius: "50%" }}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
          </svg>
        </a>
      </footer>
    </>
  );
}

export default App;
