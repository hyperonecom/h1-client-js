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
    define(['ApiClient', 'model/Event', 'model/InlineObject16', 'model/InlineObject17', 'model/InlineObject18', 'model/InlineObject19', 'model/Ip', 'model/Network', 'model/NetworkServices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineObject16'), require('../model/InlineObject17'), require('../model/InlineObject18'), require('../model/InlineObject19'), require('../model/Ip'), require('../model/Network'), require('../model/NetworkServices'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.NetworkApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.InlineObject16, root.HyperOneApi.InlineObject17, root.HyperOneApi.InlineObject18, root.HyperOneApi.InlineObject19, root.HyperOneApi.Ip, root.HyperOneApi.Network, root.HyperOneApi.NetworkServices);
  }
}(this, function(ApiClient, Event, InlineObject16, InlineObject17, InlineObject18, InlineObject19, Ip, Network, NetworkServices) {
  'use strict';

  /**
   * Network service.
   * @module api/NetworkApi
   * @version 1
   */

  /**
   * Constructs a new NetworkApi. 
   * @alias module:api/NetworkApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create
     * Create network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Network} and HTTP response
     */
    this.createNetworkWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject16'];


      var pathParams = {
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
      var returnType = Network;

      return this.apiClient.callApi(
        '/network', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create
     * Create network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Network}
     */
    this.createNetwork = function(opts) {
      return this.createNetworkWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteNetworkWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetwork");
      }


      var pathParams = {
        'networkId': networkId
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/network/{networkId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteNetwork = function(networkId) {
      return this.deleteNetworkWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List network
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Network>} and HTTP response
     */
    this.listNetworkWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
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
      var returnType = [Network];

      return this.apiClient.callApi(
        '/network', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * List network
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Network>}
     */
    this.listNetwork = function(opts) {
      return this.listNetworkWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} networkId ID of network
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Network} and HTTP response
     */
    this.operationNetworkDeleteaccessrightsIdentityWithHttpInfo = function(networkId, identity) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkDeleteaccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling operationNetworkDeleteaccessrightsIdentity");
      }


      var pathParams = {
        'networkId': networkId,
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
      var returnType = Network;

      return this.apiClient.callApi(
        '/network/{networkId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} networkId ID of network
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Network}
     */
    this.operationNetworkDeleteaccessrightsIdentity = function(networkId, identity) {
      return this.operationNetworkDeleteaccessrightsIdentityWithHttpInfo(networkId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /ip/:ipId
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.operationNetworkDeleteipIpIdWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkDeleteipIpId");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = Ip;

      return this.apiClient.callApi(
        '/network/{networkId}/ip/:ipId', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /ip/:ipId
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.operationNetworkDeleteipIpId = function(networkId) {
      return this.operationNetworkDeleteipIpIdWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} networkId ID of network
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.operationNetworkDeletetagKeyWithHttpInfo = function(networkId, key) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkDeletetagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling operationNetworkDeletetagKey");
      }


      var pathParams = {
        'networkId': networkId,
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
        '/network/{networkId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/:key
     * @param {String} networkId ID of network
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.operationNetworkDeletetagKey = function(networkId, key) {
      return this.operationNetworkDeletetagKeyWithHttpInfo(networkId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /ip/:ipId
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.operationNetworkGetipIpIdWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkGetipIpId");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = Ip;

      return this.apiClient.callApi(
        '/network/{networkId}/ip/:ipId', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /ip/:ipId
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.operationNetworkGetipIpId = function(networkId) {
      return this.operationNetworkGetipIpIdWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} networkId ID of network
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkServices} and HTTP response
     */
    this.operationNetworkGetservicesServiceIdWithHttpInfo = function(networkId, serviceId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkGetservicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling operationNetworkGetservicesServiceId");
      }


      var pathParams = {
        'networkId': networkId,
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
      var returnType = NetworkServices;

      return this.apiClient.callApi(
        '/network/{networkId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/:serviceId
     * @param {String} networkId ID of network
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkServices}
     */
    this.operationNetworkGetservicesServiceId = function(networkId, serviceId) {
      return this.operationNetworkGetservicesServiceIdWithHttpInfo(networkId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.operationNetworkGettagWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkGettag");
      }


      var pathParams = {
        'networkId': networkId
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
        '/network/{networkId}/tag/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.operationNetworkGettag = function(networkId) {
      return this.operationNetworkGettagWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.operationNetworkListaccessrightsWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkListaccessrights");
      }


      var pathParams = {
        'networkId': networkId
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
        '/network/{networkId}/accessrights/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.operationNetworkListaccessrights = function(networkId) {
      return this.operationNetworkListaccessrightsWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /ip
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Ip>} and HTTP response
     */
    this.operationNetworkListipWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkListip");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = [Ip];

      return this.apiClient.callApi(
        '/network/{networkId}/ip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /ip
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Ip>}
     */
    this.operationNetworkListip = function(networkId) {
      return this.operationNetworkListipWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.operationNetworkListqueueWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkListqueue");
      }


      var pathParams = {
        'networkId': networkId
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
        '/network/{networkId}/queue/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /queue/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.operationNetworkListqueue = function(networkId) {
      return this.operationNetworkListqueueWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NetworkServices>} and HTTP response
     */
    this.operationNetworkListservicesWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkListservices");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = [NetworkServices];

      return this.apiClient.callApi(
        '/network/{networkId}/services/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NetworkServices>}
     */
    this.operationNetworkListservices = function(networkId) {
      return this.operationNetworkListservicesWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/
     * @param {String} networkId ID of network
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.operationNetworkPatchtagWithHttpInfo = function(networkId, requestBody) {
      var postBody = requestBody;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkPatchtag");
      }

      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling operationNetworkPatchtag");
      }


      var pathParams = {
        'networkId': networkId
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
        '/network/{networkId}/tag/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/
     * @param {String} networkId ID of network
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.operationNetworkPatchtag = function(networkId, requestBody) {
      return this.operationNetworkPatchtagWithHttpInfo(networkId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/
     * @param {String} networkId ID of network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.inlineObject19 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    this.operationNetworkPostaccessrightsWithHttpInfo = function(networkId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject19'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkPostaccessrights");
      }


      var pathParams = {
        'networkId': networkId
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
        '/network/{networkId}/accessrights/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/
     * @param {String} networkId ID of network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.inlineObject19 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    this.operationNetworkPostaccessrights = function(networkId, opts) {
      return this.operationNetworkPostaccessrightsWithHttpInfo(networkId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /ip
     * @param {String} networkId ID of network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.inlineObject18 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.operationNetworkPostipWithHttpInfo = function(networkId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject18'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling operationNetworkPostip");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = Ip;

      return this.apiClient.callApi(
        '/network/{networkId}/ip', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /ip
     * @param {String} networkId ID of network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.inlineObject18 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.operationNetworkPostip = function(networkId, opts) {
      return this.operationNetworkPostipWithHttpInfo(networkId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single network
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Network} and HTTP response
     */
    this.showNetworkWithHttpInfo = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling showNetwork");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = Network;

      return this.apiClient.callApi(
        '/network/{networkId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Returns a single network
     * @param {String} networkId ID of network
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Network}
     */
    this.showNetwork = function(networkId) {
      return this.showNetworkWithHttpInfo(networkId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified network
     * @param {String} networkId ID of network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Network} and HTTP response
     */
    this.updateNetworkWithHttpInfo = function(networkId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject17'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetwork");
      }


      var pathParams = {
        'networkId': networkId
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
      var returnType = Network;

      return this.apiClient.callApi(
        '/network/{networkId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Returns modified network
     * @param {String} networkId ID of network
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Network}
     */
    this.updateNetwork = function(networkId, opts) {
      return this.updateNetworkWithHttpInfo(networkId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
