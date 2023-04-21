"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-synonyms",
      handler: "synonym.getAll",
    },
    {
      method: "GET",
      path: "/synonyms",
      handler: "synonym.get",
    },
  ],
};
