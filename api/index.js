import express from "express";
import { renderPage } from 'vike/server';

const app = express();

app.get("/", async (req, res) => {
  const { url } = req
  console.log('Request to url:', url)
  if (url === undefined) {
    throw new Error('req.url is undefined')
  }

  const pageContextInit = { urlOriginal: url }
  const pageContext = await renderPage(pageContextInit)
  const { httpResponse } = pageContext
  console.log('httpResponse', !!httpResponse)

  if (!httpResponse) {
    res.statusCode = 200
    res.end()
    return
  }

  const { body, statusCode, headers } = httpResponse
  res.statusCode = statusCode
  headers.forEach(([name, value]) => res.setHeader(name, value))
  res.end(body)
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
