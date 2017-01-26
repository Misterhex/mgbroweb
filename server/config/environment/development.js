'use strict';

// Development specific configuration
// ==================================
module.exports = {
  postgres: "postgres://" + process.env.POSTGRES_USER + ":" + process.env.POSTGRES_PASSWORD + "@" + process.env.POSTGRES_PORT_5432_TCP_ADDR + "/" + process.env.POSTGRES_DB,
  seedDB: true
};
