const micro = require("micro");
const expect = require("expect");
const listen = require("test-listen");
const request = require("request-promise");

let service;

beforeEach(() => (service = micro(require("../index"))));
afterEach(() => service.close());

test("should return 'hello world' as default", async () => {
  const url = await listen(service);
  const body = await request(url);
  expect(body).toBe("Hello world");
});

test("should return given name when supplied", async () => {
  const url = await listen(service);

  var options = {
    method: "POST",
    uri: url,
    body: {
      name: "miss"
    },
    json: true
  };

  const body = await request(options);
  expect(body).toBe("Hello miss");
});
