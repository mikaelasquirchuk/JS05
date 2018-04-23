# JS05 Class 11 - AJAX and APIs continued

## Review

### API requests 
* https:// = protocol
* google.com = domain name
* / maps = path
* ? xyz = parameters
    * An API key is a parameter.
* When you make an API request, you should provide:
    * URL
    * Method: 
        * GET = pulls information 
        * POST = pushes information
        * PUT / PATCH = replaces information
        * DELETE = removes information
    * Data Type (JSON)
    * Any applicable parameters (e.g. API key)

### fetch
* fetch method is a way to create AJAX request
* fetch is based on Promises

``` 
fetch (URL, OPTIONS) 
    .then () // purpose is to transform data into JSON
    .then () // do what we want to the data = success handler
    .catch () // failure handler
```

* Defined automatically for us
* This is supported by all major browsers; but there's also a polyfill if needed

