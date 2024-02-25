import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:3020/api/users/register", {
      username: inputs.name,
      email: inputs.email,
      password: inputs.password,
    });
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    navigate("/login");
  };

  return (
    <div className="flex justify-center mt-[100px]">
      <Card className="w-[450px] h-[450px]">
        <CardHeader>
          <CardTitle className="text-5xl text-blue-600">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter Your UserName</Label>
                <Input
                  onChange={handleChange}
                  value={inputs.name}
                  id="name"
                  placeholder="Your Name"
                  name="name" // Add name attribute
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div>
                  <Label htmlFor="email">Enter Your Email</Label>
                  <Input
                    value={inputs.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Your Email"
                    name="email" // Add name attribute
                  />
                </div>
                <div>
                  <Label htmlFor="password">Enter Your Password</Label>
                  <Input
                    value={inputs.password}
                    onChange={handleChange}
                    type="password"
                    id="password"
                    placeholder="Enter a Password"
                    name="password" // Add name attribute
                  />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-500 my-5">
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <CardDescription className="ml-6">
            Already have an account?{" "}
            <Link to={"/login"} className="text-black font-bold">
              Sign In
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
