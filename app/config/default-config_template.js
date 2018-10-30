  module.exports = {
      version: {
          dist: '0.1.0 beta'
      },
      server: {
          host: 'localhost',
          port: 3009
      },
      secret: {
          key: 'yodamaster'
      },
      postgres: {
          poolSettings: {
              user: 'postgres',
              database: 'DATABASE_NAME',
              password: 'DATABASE_PASS',
              host: 'DATABASE_IP',
              port: '5432',
              max: 10,
              idleTimeoutMillis: 30000
          }
      },
  };