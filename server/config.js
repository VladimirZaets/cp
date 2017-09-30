export default {
    "server": {
        "port": 1337
    },
    "logger": {
        "level": "debug",
        "colorize": true
    },
    "db": {
        "client": "postgresql",
        "connection": {
            "database": "my_db",
            "user":     "username",
            "password": "password"
        },
        "pool": {
            "min": 2,
            "max": 10
        },
        "migrations": {
            "tableName": "knex_migrations"
        }

    }
};

