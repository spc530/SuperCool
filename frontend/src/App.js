import React from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  React.useEffect(() => {
    fetch("/get-users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (users.map((u) => u.email === email && u.pwd === pwd).includes(true)) {
      alert(`Log in succesful ${email}`);
    } else {
      alert(`Wrong log in information. Try again`);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Welcome!</h1>
        <h3>Existing member? Log in here!</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Email:</label>
            <input
              class="form-control"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label> Password: </label>
            <input
              class="form-control"
              type="text"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary" value="Submit">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
}
