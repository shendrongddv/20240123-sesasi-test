import { useState } from "react";
import axios from "axios";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    await axios.post("http://62.72.13.124/api/login", userData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(userData);

    // Reset Form
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <section className="p-4">
        <div className="container">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-1">
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
