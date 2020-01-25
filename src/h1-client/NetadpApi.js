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
    define(['ApiClient', 'model/Event', 'model/InlineResponse400', 'model/Netadp', 'model/NetadpActionFirewallAdd', 'model/NetadpPostAccessrights', 'model/NetadpServices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineResponse400'), require('../model/Netadp'), require('../model/NetadpActionFirewallAdd'), require('../model/NetadpPostAccessrights'), require('../model/NetadpServices'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.NetadpApi = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.Event, root.HyperoneClient.InlineResponse400, root.HyperoneClient.Netadp, root.HyperoneClient.NetadpActionFirewallAdd, root.HyperoneClient.NetadpPostAccessrights, root.HyperoneClient.NetadpServices);
  }
}(this, function(ApiClient, Event, InlineResponse400, Netadp, NetadpActionFirewallAdd, NetadpPostAccessrights, NetadpServices) {
  'use strict';

  /**
   * Netadp service.
   * @module h1-client/NetadpApi
   * @version 0.0.3
   */

  /**
   * Constructs a new NetadpApi. 
   * @alias module:h1-client/NetadpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/firewall_add
     * Action firewall_add
     * @param {String} netadpId ID of netadp
     * @param {module:model/NetadpActionFirewallAdd} netadpActionFirewallAdd 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netadp} and HTTP response
     */
    this.netadpActionFirewallAddWithHttpInfo = function(netadpId, netadpActionFirewallAdd, opts) {
      opts = opts || {};
      var postBody = netadpActionFirewallAdd;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpActionFirewallAdd");
      }
      // verify the required parameter 'netadpActionFirewallAdd' is set
      if (netadpActionFirewallAdd === undefined || netadpActionFirewallAdd === null) {
        throw new Error("Missing the required parameter 'netadpActionFirewallAdd' when calling netadpActionFirewallAdd");
      }

      var pathParams = {
        'netadpId': netadpId
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
      var returnType = Netadp;
      return this.apiClient.callApi(
        '/netadp/{netadpId}/actions/firewall_add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/firewall_add
     * Action firewall_add
     * @param {String} netadpId ID of netadp
     * @param {module:model/NetadpActionFirewallAdd} netadpActionFirewallAdd 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netadp}
     */
    this.netadpActionFirewallAdd = function(netadpId, netadpActionFirewallAdd, opts) {
      return this.netadpActionFirewallAddWithHttpInfo(netadpId, netadpActionFirewallAdd, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/firewall_remove
     * Action firewall_remove
     * @param {String} netadpId ID of netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netadp} and HTTP response
     */
    this.netadpActionFirewallRemoveWithHttpInfo = function(netadpId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpActionFirewallRemove");
      }

      var pathParams = {
        'netadpId': netadpId
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
      var returnType = Netadp;
      return this.apiClient.callApi(
        '/netadp/{netadpId}/actions/firewall_remove', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/firewall_remove
     * Action firewall_remove
     * @param {String} netadpId ID of netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netadp}
     */
    this.netadpActionFirewallRemove = function(netadpId, opts) {
      return this.netadpActionFirewallRemoveWithHttpInfo(netadpId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} netadpId ID of netadp
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netadp} and HTTP response
     */
    this.netadpDeleteAccessrightsIdentityWithHttpInfo = function(netadpId, identity) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpDeleteAccessrightsIdentity");
      }
      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling netadpDeleteAccessrightsIdentity");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} netadpId ID of netadp
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netadp}
     */
    this.netadpDeleteAccessrightsIdentity = function(netadpId, identity) {
      return this.netadpDeleteAccessrightsIdentityWithHttpInfo(netadpId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} netadpId ID of netadp
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netadpDeleteTagKeyWithHttpInfo = function(netadpId, key) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpDeleteTagKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling netadpDeleteTagKey");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag/:key
     * @param {String} netadpId ID of netadp
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netadpDeleteTagKey = function(netadpId, key) {
      return this.netadpDeleteTagKeyWithHttpInfo(netadpId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} netadpId ID of netadp
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetadpServices} and HTTP response
     */
    this.netadpGetServicesServiceIdWithHttpInfo = function(netadpId, serviceId) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpGetServicesServiceId");
      }
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling netadpGetServicesServiceId");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services/:serviceId
     * @param {String} netadpId ID of netadp
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetadpServices}
     */
    this.netadpGetServicesServiceId = function(netadpId, serviceId) {
      return this.netadpGetServicesServiceIdWithHttpInfo(netadpId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netadpGetTagWithHttpInfo = function(netadpId) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpGetTag");
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
        '/netadp/{netadpId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netadpGetTag = function(netadpId) {
      return this.netadpGetTagWithHttpInfo(netadpId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.assignedResource Filter by assigned.resource
     * @param {String} opts.assignedId Filter by assigned.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Netadp>} and HTTP response
     */
    this.netadpListWithHttpInfo = function(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List
     * List netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.assignedResource Filter by assigned.resource
     * @param {String} opts.assignedId Filter by assigned.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Netadp>}
     */
    this.netadpList = function(opts) {
      return this.netadpListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.netadpListAccessrightsWithHttpInfo = function(netadpId) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpListAccessrights");
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
        '/netadp/{netadpId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.netadpListAccessrights = function(netadpId) {
      return this.netadpListAccessrightsWithHttpInfo(netadpId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} netadpId ID of netadp
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.netadpListQueueWithHttpInfo = function(netadpId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpListQueue");
      }

      var pathParams = {
        'netadpId': netadpId
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
        '/netadp/{netadpId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} netadpId ID of netadp
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.netadpListQueue = function(netadpId, opts) {
      return this.netadpListQueueWithHttpInfo(netadpId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NetadpServices>} and HTTP response
     */
    this.netadpListServicesWithHttpInfo = function(netadpId) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpListServices");
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
        '/netadp/{netadpId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NetadpServices>}
     */
    this.netadpListServices = function(netadpId) {
      return this.netadpListServicesWithHttpInfo(netadpId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netadpId ID of netadp
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netadpPatchTagWithHttpInfo = function(netadpId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpPatchTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling netadpPatchTag");
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
        '/netadp/{netadpId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} netadpId ID of netadp
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netadpPatchTag = function(netadpId, requestBody) {
      return this.netadpPatchTagWithHttpInfo(netadpId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} netadpId ID of netadp
     * @param {module:model/NetadpPostAccessrights} netadpPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netadp} and HTTP response
     */
    this.netadpPostAccessrightsWithHttpInfo = function(netadpId, netadpPostAccessrights) {
      var postBody = netadpPostAccessrights;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpPostAccessrights");
      }
      // verify the required parameter 'netadpPostAccessrights' is set
      if (netadpPostAccessrights === undefined || netadpPostAccessrights === null) {
        throw new Error("Missing the required parameter 'netadpPostAccessrights' when calling netadpPostAccessrights");
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
      var returnType = Netadp;
      return this.apiClient.callApi(
        '/netadp/{netadpId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} netadpId ID of netadp
     * @param {module:model/NetadpPostAccessrights} netadpPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netadp}
     */
    this.netadpPostAccessrights = function(netadpId, netadpPostAccessrights) {
      return this.netadpPostAccessrightsWithHttpInfo(netadpId, netadpPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netadpId ID of netadp
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.netadpPutTagWithHttpInfo = function(netadpId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpPutTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling netadpPutTag");
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
        '/netadp/{netadpId}/tag', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} netadpId ID of netadp
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.netadpPutTag = function(netadpId, requestBody) {
      return this.netadpPutTagWithHttpInfo(netadpId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single netadp
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netadp} and HTTP response
     */
    this.netadpShowWithHttpInfo = function(netadpId) {
      var postBody = null;
      // verify the required parameter 'netadpId' is set
      if (netadpId === undefined || netadpId === null) {
        throw new Error("Missing the required parameter 'netadpId' when calling netadpShow");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get
     * Returns a single netadp
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netadp}
     */
    this.netadpShow = function(netadpId) {
      return this.netadpShowWithHttpInfo(netadpId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));