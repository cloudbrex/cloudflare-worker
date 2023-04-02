const base = "https://example.com/blog"
const statusCode = 301

async function handleRequest(request) {
  const excludedPaths = ['/wp-login.php', '/wp-admin', '/wp-admin/']
  const url = new URL(request.url)
  const { pathname, search, hash } = url
  const destinationURL = base + pathname + search + hash

  if (excludedPaths.some(path => pathname.startsWith(path))) {
    return fetch(request)
  } else {
    return Response.redirect(destinationURL, statusCode)
  }
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
