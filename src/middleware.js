import {defineMiddleware, sequence} from "astro:middleware";
import { middleware } from "astro:i18n"; // Astro's own i18n routing config

export const userMiddleware = defineMiddleware(async (ctx, next) => {
  // this response might come from Astro's i18n middleware, and it might return a 404
  const response = await next();
  // the /about page is an exception and we want to render it
  if (ctx.url.startsWith("/about")) {
    return new Response("About page", {
      status: 200
    });
  } else {
    return response;
  }
});


export const onRequest = sequence(
  userMiddleware,
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true
  })
)