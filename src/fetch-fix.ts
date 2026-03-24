// src/fetch-fix.ts
const fetch = window.fetch.bind(window);
const Request = window.Request;
const Response = window.Response;
const Headers = window.Headers;

export { fetch as default, Request, Response, Headers };
