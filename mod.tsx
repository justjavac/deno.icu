// You need to import `h` factory function as Deno Deploy
// uses it instead of `React.createElement`
import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        >
        </meta>
        <title>Deno I See You</title>
      </head>
      <body
        style={{
          fontSize: 50,
          height: " 100vh",
          margin: 0,
          padding: 0,
          color: "#212529",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Deno I See You</div>
      </body>
    </html>
  );
}

addEventListener("fetch", (event) => {
  const response = new Response(renderToString(<App />), {
    headers: { "content-type": "text/html; charset=uft-8" },
  });

  event.respondWith(response);
});
