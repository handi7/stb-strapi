'use strict';

/**
 * synonym service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::synonym.synonym');
