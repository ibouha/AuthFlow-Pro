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
function Login() {
  return (
    <div className="flex justify-center mt-[100px] ">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-5xl text-blue-600">Login</CardTitle>
          <CardDescription className="mt-3">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="text-black font-bold">
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <div>
                  <Label htmlFor="email">Enter Your Email</Label>
                  <Input id="email" placeholder="Your Email" />
                </div>
                <div>
                  <Label htmlFor="password">Enter Your Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter a Password"
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-500">Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
