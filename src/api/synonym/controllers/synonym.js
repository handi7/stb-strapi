"use strict";

module.exports = {
    async getAll(ctx) {
      try {
        const count = await strapi.db.query("api::synonym.synonym").count();
        const data = await strapi.db.query("api::synonym.synonym").findMany();
        ctx.send({ count, data }, 200);
      } catch (error) {
        ctx.send(error, 500);
      }
    },
  
    async get(ctx) {
      try {
        const page = ctx.request.query.page || 1;
        const limit = ctx.request.query.size || 10;
        const key = ctx.request.query.key || "";
  
        const offset = (page - 1) * limit;
  
        const count = await strapi.db
          .query("api::synonym.synonym")
          .count({ where: { ind: { $startsWith: key } } });
  
        const data = await strapi.db.query("api::synonym.synonym").findMany({
          where: { ind: { $startsWith: key } },
          populate: { category: true, images: true },
          offset,
          limit,
        });
  
        const totalPages = Math.ceil(count / +limit);
        const currentPage = +page;
        const prevPage = +page - 1 || null;
        const nextPage = +page + 1 > Math.ceil(count / +limit) ? null : +page + 1;
  
        const prevQuery =
          +page - 1
            ? `page=${page - 1}&size=${limit}${key ? `&key=${key}` : ""}`
            : null;
  
        const nextQuery =
          +page + 1 > Math.ceil(count / limit)
            ? null
            : `page=${+page + 1}&size=${limit}${key ? `&key=${key}` : ""}`;
  
        ctx.send({
          count,
          data,
          totalPages,
          currentPage,
          prevPage,
          nextPage,
          prevQuery,
          nextQuery,
        });
      } catch (error) {
        console.log(error);
        ctx.send(error, 500);
      }
    },};
