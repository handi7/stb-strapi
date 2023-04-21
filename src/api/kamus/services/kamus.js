'use strict';

/**
 * kamus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kamus.kamus');
