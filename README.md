![cf](https://i.imgur.com/7v5ASc8.png) 12: Express Middleware
======

<img src="https://travis-ci.com/mrebb/12-express-middleware.svg?branch=madhu">

## TRAVIS: https://travis-ci.com/mrebb/12-express-middleware

## HEROKU: https://express-middleware.herokuapp.com 

## Express middleware

* Handles GET, POST, PUT, DELETE methods for any model that is added to existing models directory
* GET handles 'api/v1/tweets' when queryString has valid or empty ID
* POST handles 'api/v1/tweets' with request body passed . 
* DELETE handles 'api/v1/tweets' when queryString has valid or empty ID 
* Errors are handled when there is a bad request

## Tests
* Test for api that returns a status code of 404 for routes that have not been registered
* `GET`: test for 404: Responds with 'not found' for valid requests made with an id that was not found
* `GET`: test for 400: Respond with 'bad request' if no id was provided in the request
* `GET`: test for 200: Responds with response body for a request made with a valid id
* `POST`: test for 400: Responds with 'bad request' if no request body was provided or the body was invalid
* `POST`: test for 200: Responds with the body content for a post request with a valid body
* `PUT`: test for 200: Responds with the body content for a put request for existing record with a valid body
* `DELETE`: test for 404: Respond with 'bad request' if no id was provided in the request
* `DELETE`: test for 200: Responds with provided id for a request made with a valid id
* `404`: page not found for all other routes that are not handled by API.