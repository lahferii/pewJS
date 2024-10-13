import Helloworld from "./controller/helloworld.js";
import RouteHandling from "./http/router/index.js";

const hello = new Helloworld()
const route = new RouteHandling()

route.get("/api/", hello.sayHello)