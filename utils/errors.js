//const NOT_FOUND_ERROR = 400;
//const VALIDATION_ERROR = 401;
//const CAST_ERROR = 402;
//const SERVER_ERROR = 500;
//const SUCCESS = 200;
//const CREATED = 201;

//module.exports = {
//  NOT_FOUND_ERROR,
//  VALIDATION_ERROR,
//  CAST_ERROR,
//  SERVER_ERROR,
//  SUCCESS,
//  CREATED,
//};




const SUCCESS = 200;
const CREATED = 201;

// Client Error Codes
const BAD_REQUEST = 400; // For validation errors, cast errors, or bad input
const UNAUTHORIZED = 401; // For when authentication (logging in) is required
const FORBIDDEN = 403; // For when user is logged in but NOT allowed to do something
const NOT_FOUND = 404; // For when a resource (user, item) is not found

// Server Error Code
const SERVER_ERROR = 500; // For a generic "catch-all" server failure

module.exports = {
  SUCCESS,
  CREATED,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  SERVER_ERROR,
};