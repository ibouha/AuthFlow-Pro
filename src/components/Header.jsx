import Container from "./ui/Container";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center ">
            <Link to={"/"} className="ml-4 lg:ml-0">
              <img className="h-72 w-auto  " src={logo} alt="AuthFlow Pro" />
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6  md:block">
            <Button asChild variant="ghost">
              <Link to={"login"}>Login</Link>
            </Button>
            <Button asChild variant="ghost" className="bg-blue-500  md:w-auto">
              <Link to={"/register"}>Sign Up</Link>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
