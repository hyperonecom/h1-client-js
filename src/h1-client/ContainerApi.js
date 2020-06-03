/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Container', 'model/ContainerCreate', 'model/ContainerPostAccessrights', 'model/ContainerServices', 'model/ContainerUpdate', 'model/Event', 'model/InlineResponse2004', 'model/InlineResponse400'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Container'), require('../model/ContainerCreate'), require('../model/ContainerPostAccessrights'), require('../model/ContainerServices'), require('../model/ContainerUpdate'), require('../model/Event'), require('../model/InlineResponse2004'), require('../model/InlineResponse400'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.ContainerApi = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.Container, root.HyperoneClient.ContainerCreate, root.HyperoneClient.ContainerPostAccessrights, root.HyperoneClient.ContainerServices, root.HyperoneClient.ContainerUpdate, root.HyperoneClient.Event, root.HyperoneClient.InlineResponse2004, root.HyperoneClient.InlineResponse400);
  }
}(this, function(ApiClient, Container, ContainerCreate, ContainerPostAccessrights, ContainerServices, ContainerUpdate, Event, InlineResponse2004, InlineResponse400) {
  'use strict';

  /**
   * Container service.
   * @module h1-client/ContainerApi
   * @version 0.0.3
   */

  /**
   * Constructs a new ContainerApi. 
   * @alias module:h1-client/ContainerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/restart
     * Action restart
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerActionRestartWithHttpInfo = function(containerId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerActionRestart");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-idempotency-key': opts['xIdempotencyKey']
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}/actions/restart', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/restart
     * Action restart
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerActionRestart = function(containerId, opts) {
      return this.containerActionRestartWithHttpInfo(containerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/start
     * Action start
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerActionStartWithHttpInfo = function(containerId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerActionStart");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-idempotency-key': opts['xIdempotencyKey']
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}/actions/start', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/start
     * Action start
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerActionStart = function(containerId, opts) {
      return this.containerActionStartWithHttpInfo(containerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/stop
     * Action stop
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerActionStopWithHttpInfo = function(containerId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerActionStop");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-idempotency-key': opts['xIdempotencyKey']
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}/actions/stop', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/stop
     * Action stop
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerActionStop = function(containerId, opts) {
      return this.containerActionStopWithHttpInfo(containerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create container
     * @param {module:model/ContainerCreate} containerCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerCreateWithHttpInfo = function(containerCreate, opts) {
      opts = opts || {};
      var postBody = containerCreate;
      // verify the required parameter 'containerCreate' is set
      if (containerCreate === undefined || containerCreate === null) {
        throw new Error("Missing the required parameter 'containerCreate' when calling containerCreate");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-idempotency-key': opts['xIdempotencyKey']
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create
     * Create container
     * @param {module:model/ContainerCreate} containerCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerCreate = function(containerCreate, opts) {
      return this.containerCreateWithHttpInfo(containerCreate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.containerDeleteWithHttpInfo = function(containerId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerDelete");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi(
        '/container/{containerId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.containerDelete = function(containerId) {
      return this.containerDeleteWithHttpInfo(containerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} containerId ID of container
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerDeleteAccessrightsIdentityWithHttpInfo = function(containerId, identity) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerDeleteAccessrightsIdentity");
      }
      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling containerDeleteAccessrightsIdentity");
      }

      var pathParams = {
        'containerId': containerId,
        'identity': identity
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} containerId ID of container
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerDeleteAccessrightsIdentity = function(containerId, identity) {
      return this.containerDeleteAccessrightsIdentityWithHttpInfo(containerId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} containerId ID of container
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.containerDeleteTagKeyWithHttpInfo = function(containerId, key) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerDeleteTagKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling containerDeleteTagKey");
      }

      var pathParams = {
        'containerId': containerId,
        'key': key
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/container/{containerId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag/:key
     * @param {String} containerId ID of container
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.containerDeleteTagKey = function(containerId, key) {
      return this.containerDeleteTagKeyWithHttpInfo(containerId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} containerId ID of container
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContainerServices} and HTTP response
     */
    this.containerGetServicesServiceIdWithHttpInfo = function(containerId, serviceId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerGetServicesServiceId");
      }
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling containerGetServicesServiceId");
      }

      var pathParams = {
        'containerId': containerId,
        'serviceId': serviceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ContainerServices;
      return this.apiClient.callApi(
        '/container/{containerId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services/:serviceId
     * @param {String} containerId ID of container
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContainerServices}
     */
    this.containerGetServicesServiceId = function(containerId, serviceId) {
      return this.containerGetServicesServiceIdWithHttpInfo(containerId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.containerGetTagWithHttpInfo = function(containerId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerGetTag");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/container/{containerId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.containerGetTag = function(containerId) {
      return this.containerGetTagWithHttpInfo(containerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List container
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Container>} and HTTP response
     */
    this.containerListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'tag': opts['tag'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Container];
      return this.apiClient.callApi(
        '/container', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List
     * List container
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Container>}
     */
    this.containerList = function(opts) {
      return this.containerListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.containerListAccessrightsWithHttpInfo = function(containerId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerListAccessrights");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi(
        '/container/{containerId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.containerListAccessrights = function(containerId) {
      return this.containerListAccessrightsWithHttpInfo(containerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /process
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse2004>} and HTTP response
     */
    this.containerListProcessWithHttpInfo = function(containerId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerListProcess");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [InlineResponse2004];
      return this.apiClient.callApi(
        '/container/{containerId}/process', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /process
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2004>}
     */
    this.containerListProcess = function(containerId) {
      return this.containerListProcessWithHttpInfo(containerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit (default to 100)
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.containerListQueueWithHttpInfo = function(containerId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerListQueue");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
        '$limit': opts['limit'],
        '$skip': opts['skip'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Event];
      return this.apiClient.callApi(
        '/container/{containerId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} containerId ID of container
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit (default to 100)
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.containerListQueue = function(containerId, opts) {
      return this.containerListQueueWithHttpInfo(containerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ContainerServices>} and HTTP response
     */
    this.containerListServicesWithHttpInfo = function(containerId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerListServices");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ContainerServices];
      return this.apiClient.callApi(
        '/container/{containerId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ContainerServices>}
     */
    this.containerListServices = function(containerId) {
      return this.containerListServicesWithHttpInfo(containerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} containerId ID of container
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.containerPatchTagWithHttpInfo = function(containerId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerPatchTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling containerPatchTag");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/container/{containerId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} containerId ID of container
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.containerPatchTag = function(containerId, requestBody) {
      return this.containerPatchTagWithHttpInfo(containerId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} containerId ID of container
     * @param {module:model/ContainerPostAccessrights} containerPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerPostAccessrightsWithHttpInfo = function(containerId, containerPostAccessrights) {
      var postBody = containerPostAccessrights;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerPostAccessrights");
      }
      // verify the required parameter 'containerPostAccessrights' is set
      if (containerPostAccessrights === undefined || containerPostAccessrights === null) {
        throw new Error("Missing the required parameter 'containerPostAccessrights' when calling containerPostAccessrights");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} containerId ID of container
     * @param {module:model/ContainerPostAccessrights} containerPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerPostAccessrights = function(containerId, containerPostAccessrights) {
      return this.containerPostAccessrightsWithHttpInfo(containerId, containerPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} containerId ID of container
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.containerPutTagWithHttpInfo = function(containerId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerPutTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling containerPutTag");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/container/{containerId}/tag', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} containerId ID of container
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.containerPutTag = function(containerId, requestBody) {
      return this.containerPutTagWithHttpInfo(containerId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single container
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerShowWithHttpInfo = function(containerId) {
      var postBody = null;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerShow");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get
     * Returns a single container
     * @param {String} containerId ID of container
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerShow = function(containerId) {
      return this.containerShowWithHttpInfo(containerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified container
     * @param {String} containerId ID of container
     * @param {module:model/ContainerUpdate} containerUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */
    this.containerUpdateWithHttpInfo = function(containerId, containerUpdate) {
      var postBody = containerUpdate;
      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling containerUpdate");
      }
      // verify the required parameter 'containerUpdate' is set
      if (containerUpdate === undefined || containerUpdate === null) {
        throw new Error("Missing the required parameter 'containerUpdate' when calling containerUpdate");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Container;
      return this.apiClient.callApi(
        '/container/{containerId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * Returns modified container
     * @param {String} containerId ID of container
     * @param {module:model/ContainerUpdate} containerUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */
    this.containerUpdate = function(containerId, containerUpdate) {
      return this.containerUpdateWithHttpInfo(containerId, containerUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
