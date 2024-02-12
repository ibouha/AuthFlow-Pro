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

function SignUp() {
  return (
    <div className="flex justify-center mt-[100px]">
      <Card className="w-[450px] h-[450px]">
        <CardHeader>
          <CardTitle className="text-5xl text-blue-600">Register</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter Your UserName</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
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

export default SignUp;
