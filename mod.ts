import { html } from "https://deno.land/x/html/mod.ts";

async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/style.css")) {
    const style = new URL("style.css", import.meta.url);
    return fetch(style);
  }

  if (pathname.startsWith("/favicon.svg")) {
    const style = new URL("favicon.svg", import.meta.url);
    return fetch(style);
  }

  return new Response(
    html`<!doctype html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Deno I See You</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/style.css" />
    </head>
    
    <body>
        <div>Deno I See You</div>
    </body>
    
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
