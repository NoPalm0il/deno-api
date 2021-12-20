import "https://deno.land/x/dotenv/load.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const port = parseInt(Deno.env.get("PORT") || "8080");

const app = new Application();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ??
        "localhost"
    }:${port}`,
  );
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
