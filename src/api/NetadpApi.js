/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Event', 'model/InlineObject46', 'model/Netadp', 'model/NetadpServices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineObject46'), require('../model/Netadp'), require('../model/NetadpServices'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.NetadpApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.InlineObject46, root.HyperOneApi.Netadp, root.HyperOneApi.NetadpServices);
  }
}(this, function(ApiClient, Event, InlineObject46, Netadp, NetadpServices) {
  'use strict';

  /**
   * Netadp service.
   * @module api/NetadpApi
   * @version 1
   */

  /**
   * Constructs a new NetadpApi. 
   * @alias module:api/NetadpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listNetadp operation.
     * @callback module:api/NetadpApi~listNetadpCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Netadp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.assignedResource Filter by assigned.resource
     * @param {String} opts.assignedId Filter by assigned.id
     * @param {module:api/NetadpApi~listNetadpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Netadp>}
     */
    this.listNetadp = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'assigned.resource': opts['assignedResource'],
        'assigned.id': opts['assignedId'],
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
      var returnType = [Netadp];

      return this.apiClient.callApi(
        '/netadp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpDeleteaccessrightsIdentity operation.
     * @callback module:api/NetadpApi~operationNetadpDeleteaccessrightsIdentityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Netadp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /accessrights/:identity
     * @param {String} netadpId ID of netadp
     * @param {String} identity identity
     * @param {module:api/NetadpApi~operationNetadpDeleteaccessrightsIdentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Netadp}
     */
    this.operationNetadpDeleteaccessrightsIdentity = function(netadpId, identity, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpDeleteaccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling operationNetadpDeleteaccessrightsIdentity");
      }


      var pathParams = {
        'netadpId': netadpId,
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
      var returnType = Netadp;

      return this.apiClient.callApi(
        '/netadp/{netadpId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpDeletetagKey operation.
     * @callback module:api/NetadpApi~operationNetadpDeletetagKeyCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tag/:key
     * @param {String} netadpId ID of netadp
     * @param {String} key key
     * @param {module:api/NetadpApi~operationNetadpDeletetagKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    this.operationNetadpDeletetagKey = function(netadpId, key, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpDeletetagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling operationNetadpDeletetagKey");
      }


      var pathParams = {
        'netadpId': netadpId,
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
        '/netadp/{netadpId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpGetservicesServiceId operation.
     * @callback module:api/NetadpApi~operationNetadpGetservicesServiceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetadpServices} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /services/:serviceId
     * @param {String} netadpId ID of netadp
     * @param {String} serviceId serviceId
     * @param {module:api/NetadpApi~operationNetadpGetservicesServiceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetadpServices}
     */
    this.operationNetadpGetservicesServiceId = function(netadpId, serviceId, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpGetservicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling operationNetadpGetservicesServiceId");
      }


      var pathParams = {
        'netadpId': netadpId,
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
      var returnType = NetadpServices;

      return this.apiClient.callApi(
        '/netadp/{netadpId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpGettag operation.
     * @callback module:api/NetadpApi~operationNetadpGettagCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tag/
     * @param {String} netadpId ID of netadp
     * @param {module:api/NetadpApi~operationNetadpGettagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    this.operationNetadpGettag = function(netadpId, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpGettag");
      }


      var pathParams = {
        'netadpId': netadpId
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
        '/netadp/{netadpId}/tag/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpListaccessrights operation.
     * @callback module:api/NetadpApi~operationNetadpListaccessrightsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /accessrights/
     * @param {String} netadpId ID of netadp
     * @param {module:api/NetadpApi~operationNetadpListaccessrightsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    this.operationNetadpListaccessrights = function(netadpId, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpListaccessrights");
      }


      var pathParams = {
        'netadpId': netadpId
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
        '/netadp/{netadpId}/accessrights/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpListqueue operation.
     * @callback module:api/NetadpApi~operationNetadpListqueueCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /queue/
     * @param {String} netadpId ID of netadp
     * @param {module:api/NetadpApi~operationNetadpListqueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.operationNetadpListqueue = function(netadpId, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpListqueue");
      }


      var pathParams = {
        'netadpId': netadpId
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
      var returnType = [Event];

      return this.apiClient.callApi(
        '/netadp/{netadpId}/queue/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpListservices operation.
     * @callback module:api/NetadpApi~operationNetadpListservicesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NetadpServices>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /services/
     * @param {String} netadpId ID of netadp
     * @param {module:api/NetadpApi~operationNetadpListservicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NetadpServices>}
     */
    this.operationNetadpListservices = function(netadpId, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpListservices");
      }


      var pathParams = {
        'netadpId': netadpId
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
      var returnType = [NetadpServices];

      return this.apiClient.callApi(
        '/netadp/{netadpId}/services/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpPatchtag operation.
     * @callback module:api/NetadpApi~operationNetadpPatchtagCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tag/
     * @param {String} netadpId ID of netadp
     * @param {Object.<String, {String: String}>} requestBody 
     * @param {module:api/NetadpApi~operationNetadpPatchtagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    this.operationNetadpPatchtag = function(netadpId, requestBody, callback) {
      var postBody = requestBody;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpPatchtag");
      }

      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling operationNetadpPatchtag");
      }


      var pathParams = {
        'netadpId': netadpId
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
        '/netadp/{netadpId}/tag/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationNetadpPostaccessrights operation.
     * @callback module:api/NetadpApi~operationNetadpPostaccessrightsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /accessrights/
     * @param {String} netadpId ID of netadp
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject46} opts.inlineObject46 
     * @param {module:api/NetadpApi~operationNetadpPostaccessrightsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.operationNetadpPostaccessrights = function(netadpId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject46'];

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling operationNetadpPostaccessrights");
      }


      var pathParams = {
        'netadpId': netadpId
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/netadp/{netadpId}/accessrights/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the showNetadp operation.
     * @callback module:api/NetadpApi~showNetadpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Netadp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get
     * Returns a single netadp
     * @param {String} netadpId ID of netadp
     * @param {module:api/NetadpApi~showNetadpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Netadp}
     */
    this.showNetadp = function(netadpId, callback) {
      var postBody = null;

      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling showNetadp");
      }


      var pathParams = {
        'netadpId': netadpId
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
      var returnType = Netadp;

      return this.apiClient.callApi(
        '/netadp/{netadpId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
