import { html } from "https://deno.land/x/html/mod.ts";

function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/favicon.svg")) {
    const favicon = new URL("favicon.svg", import.meta.url);
    return fetch(favicon);
  }

  return new Response(
    html`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <title>Deno I See You</title>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <style type="text/css">
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 50px;
              height: 100vh;
              margin: 0;
              padding: 0;
              color: #212529;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
        </head>

        <body>
          <div>Deno I See You</div>
        </body>
      </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
