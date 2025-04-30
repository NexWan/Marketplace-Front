import type { Route } from "./+types/home";
import { Button } from "@mui/joy";
import { Element} from "react-scroll"
import About from "~/components/about";
import HomeComponent from "~/components/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marketplace" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="h-full w-full">
      <Element name="home" className="h-full bg-main">
        <section>
          <HomeComponent />
        </section>
      </Element>
      <Element name="about">
        <section style={{ height: "100vh" }}>
          <About />
        </section>
      </Element>
    </div>
  )
}
