/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Event', 'model/InlineResponse400', 'model/Netgw', 'model/NetgwActionAttach', 'model/NetgwCreate', 'model/NetgwPostAccessrights', 'model/NetgwServices', 'model/NetgwUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineResponse400'), require('../model/Netgw'), require('../model/NetgwActionAttach'), require('../model/NetgwCreate'), require('../model/NetgwPostAccessrights'), require('../model/NetgwServices'), require('../model/NetgwUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.NetgwApi = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.Event, root.HyperoneClient.InlineResponse400, root.HyperoneClient.Netgw, root.HyperoneClient.NetgwActionAttach, root.HyperoneClient.NetgwCreate, root.HyperoneClient.NetgwPostAccessrights, root.HyperoneClient.NetgwServices, root.HyperoneClient.NetgwUpdate);
  }
}(this, function(ApiClient, Event, InlineResponse400, Netgw, NetgwActionAttach, NetgwCreate, NetgwPostAccessrights, NetgwServices, NetgwUpdate) {
  'use strict';

  /**
   * Netgw service.
   * @module h1-client/NetgwApi
   * @version 0.0.3
   */

  /**
   * Constructs a new NetgwApi. 
   * @alias module:h1-client/NetgwApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/attach
     * Action attach
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwActionAttach} netgwActionAttach 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwActionAttachWithHttpInfo = function(netgwId, netgwActionAttach, opts) {
      opts = opts || {};
      var postBody = netgwActionAttach;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwActionAttach");
      }
      // verify the required parameter 'netgwActionAttach' is set
      if (netgwActionAttach === undefined || netgwActionAttach === null) {
        throw new Error("Missing the required parameter 'netgwActionAttach' when calling netgwActionAttach");
      }

      var pathParams = {
        'netgwId': netgwId
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw/{netgwId}/actions/attach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/attach
     * Action attach
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwActionAttach} netgwActionAttach 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwActionAttach = function(netgwId, netgwActionAttach, opts) {
      return this.netgwActionAttachWithHttpInfo(netgwId, netgwActionAttach, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/detach
     * Action detach
     * @param {String} netgwId ID of netgw
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwActionDetachWithHttpInfo = function(netgwId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwActionDetach");
      }

      var pathParams = {
        'netgwId': netgwId
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw/{netgwId}/actions/detach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/detach
     * Action detach
     * @param {String} netgwId ID of netgw
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwActionDetach = function(netgwId, opts) {
      return this.netgwActionDetachWithHttpInfo(netgwId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create netgw
     * @param {module:model/NetgwCreate} netgwCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwCreateWithHttpInfo = function(netgwCreate, opts) {
      opts = opts || {};
      var postBody = netgwCreate;
      // verify the required parameter 'netgwCreate' is set
      if (netgwCreate === undefined || netgwCreate === null) {
        throw new Error("Missing the required parameter 'netgwCreate' when calling netgwCreate");
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create
     * Create netgw
     * @param {module:model/NetgwCreate} netgwCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwCreate = function(netgwCreate, opts) {
      return this.netgwCreateWithHttpInfo(netgwCreate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.netgwDeleteWithHttpInfo = function(netgwId) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwDelete");
      }

      var pathParams = {
        'netgwId': netgwId
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
        '/netgw/{netgwId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.netgwDelete = function(netgwId) {
      return this.netgwDeleteWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} netgwId ID of netgw
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwDeleteAccessrightsIdentityWithHttpInfo = function(netgwId, identity) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwDeleteAccessrightsIdentity");
      }
      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling netgwDeleteAccessrightsIdentity");
      }

      var pathParams = {
        'netgwId': netgwId,
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw/{netgwId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} netgwId ID of netgw
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwDeleteAccessrightsIdentity = function(netgwId, identity) {
      return this.netgwDeleteAccessrightsIdentityWithHttpInfo(netgwId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} netgwId ID of netgw
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netgwDeleteTagKeyWithHttpInfo = function(netgwId, key) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwDeleteTagKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling netgwDeleteTagKey");
      }

      var pathParams = {
        'netgwId': netgwId,
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
        '/netgw/{netgwId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag/:key
     * @param {String} netgwId ID of netgw
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netgwDeleteTagKey = function(netgwId, key) {
      return this.netgwDeleteTagKeyWithHttpInfo(netgwId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} netgwId ID of netgw
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetgwServices} and HTTP response
     */
    this.netgwGetServicesServiceIdWithHttpInfo = function(netgwId, serviceId) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwGetServicesServiceId");
      }
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling netgwGetServicesServiceId");
      }

      var pathParams = {
        'netgwId': netgwId,
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
      var returnType = NetgwServices;
      return this.apiClient.callApi(
        '/netgw/{netgwId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services/:serviceId
     * @param {String} netgwId ID of netgw
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetgwServices}
     */
    this.netgwGetServicesServiceId = function(netgwId, serviceId) {
      return this.netgwGetServicesServiceIdWithHttpInfo(netgwId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netgwGetTagWithHttpInfo = function(netgwId) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwGetTag");
      }

      var pathParams = {
        'netgwId': netgwId
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
        '/netgw/{netgwId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netgwGetTag = function(netgwId) {
      return this.netgwGetTagWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List netgw
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Netgw>} and HTTP response
     */
    this.netgwListWithHttpInfo = function(opts) {
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
      var returnType = [Netgw];
      return this.apiClient.callApi(
        '/netgw', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List
     * List netgw
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Netgw>}
     */
    this.netgwList = function(opts) {
      return this.netgwListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.netgwListAccessrightsWithHttpInfo = function(netgwId) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwListAccessrights");
      }

      var pathParams = {
        'netgwId': netgwId
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
        '/netgw/{netgwId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.netgwListAccessrights = function(netgwId) {
      return this.netgwListAccessrightsWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} netgwId ID of netgw
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.netgwListQueueWithHttpInfo = function(netgwId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwListQueue");
      }

      var pathParams = {
        'netgwId': netgwId
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
        '/netgw/{netgwId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} netgwId ID of netgw
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.netgwListQueue = function(netgwId, opts) {
      return this.netgwListQueueWithHttpInfo(netgwId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NetgwServices>} and HTTP response
     */
    this.netgwListServicesWithHttpInfo = function(netgwId) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwListServices");
      }

      var pathParams = {
        'netgwId': netgwId
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
      var returnType = [NetgwServices];
      return this.apiClient.callApi(
        '/netgw/{netgwId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NetgwServices>}
     */
    this.netgwListServices = function(netgwId) {
      return this.netgwListServicesWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netgwPatchTagWithHttpInfo = function(netgwId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwPatchTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling netgwPatchTag");
      }

      var pathParams = {
        'netgwId': netgwId
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
        '/netgw/{netgwId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netgwPatchTag = function(netgwId, requestBody) {
      return this.netgwPatchTagWithHttpInfo(netgwId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwPostAccessrights} netgwPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwPostAccessrightsWithHttpInfo = function(netgwId, netgwPostAccessrights) {
      var postBody = netgwPostAccessrights;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwPostAccessrights");
      }
      // verify the required parameter 'netgwPostAccessrights' is set
      if (netgwPostAccessrights === undefined || netgwPostAccessrights === null) {
        throw new Error("Missing the required parameter 'netgwPostAccessrights' when calling netgwPostAccessrights");
      }

      var pathParams = {
        'netgwId': netgwId
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw/{netgwId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwPostAccessrights} netgwPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwPostAccessrights = function(netgwId, netgwPostAccessrights) {
      return this.netgwPostAccessrightsWithHttpInfo(netgwId, netgwPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netgwPutTagWithHttpInfo = function(netgwId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwPutTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling netgwPutTag");
      }

      var pathParams = {
        'netgwId': netgwId
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
        '/netgw/{netgwId}/tag', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netgwPutTag = function(netgwId, requestBody) {
      return this.netgwPutTagWithHttpInfo(netgwId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single netgw
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwShowWithHttpInfo = function(netgwId) {
      var postBody = null;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwShow");
      }

      var pathParams = {
        'netgwId': netgwId
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw/{netgwId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get
     * Returns a single netgw
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwShow = function(netgwId) {
      return this.netgwShowWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified netgw
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwUpdate} netgwUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    this.netgwUpdateWithHttpInfo = function(netgwId, netgwUpdate) {
      var postBody = netgwUpdate;
      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwUpdate");
      }
      // verify the required parameter 'netgwUpdate' is set
      if (netgwUpdate === undefined || netgwUpdate === null) {
        throw new Error("Missing the required parameter 'netgwUpdate' when calling netgwUpdate");
      }

      var pathParams = {
        'netgwId': netgwId
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
      var returnType = Netgw;
      return this.apiClient.callApi(
        '/netgw/{netgwId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * Returns modified netgw
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwUpdate} netgwUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    this.netgwUpdate = function(netgwId, netgwUpdate) {
      return this.netgwUpdateWithHttpInfo(netgwId, netgwUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));