"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-antonyms",
      handler: "antonym.getAll",
    },
    {
      method: "GET",
      path: "/antonyms",
      handler: "antonym.get",
    },
  ],
};
