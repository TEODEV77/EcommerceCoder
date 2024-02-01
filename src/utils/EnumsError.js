export default {
    
    USER_ERROR : {
        IDX:1,
        REQUIRED_FIELDS: 10,
        INVALID_FIELDS: 11,
    },
    AUTH_ERROR: {
        IDX:2,
        UNAUTHENTICATED: 21,
        UNAUTHORIZED: 22
    },
    DB_ERROR: {
        IDX:3,
        WRONG_CONNECTION: 31,
        WRONG_CREDENTIALS: 32,
    },
    ROUTING_ERROR: {
        IDX:4,
        ROUTE_NOT_DEFINED: 40,
        ROUTE_NOT_FOUND: 41,
    },
    SERVER: {
        IDX:5,
        INTERNAL_ERROR: 50,
        BAD_REQUEST: 51,
    }

}