import React, { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("moni");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleChangeEmail} type="email" name="email" />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
