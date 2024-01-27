const async = require("async");

async
  .parallel([
    async.reflect(async () => await Promise.resolve("like")),
    async.reflect(async () => await Promise.resolve("comment")),
    async.reflect(async () => await Promise.reject("share")),
  ])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
