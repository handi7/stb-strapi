"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-kamuses",
      handler: "kamus.getAll",
    },
    {
      method: "GET",
      path: "/kamuses",
      handler: "kamus.get",
    },
    {
      method: "GET",
      path: "/kamus/:bab",
      handler: "kamus.getByBab",
    },
    {
      method: "GET",
      path: "/search-kamus",
      handler: "kamus.search",
    },
    //   {
    //     method: "DELETE",
    //     path: "/product/:id",
    //     handler: "product.delete",
    //   },
  ],
};
