import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserForm(props) {
    const [name, setName] = useState("");

    const { user } = useAuth0();
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(user.name)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}