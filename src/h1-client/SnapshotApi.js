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
    define(['ApiClient', 'model/Event', 'model/InlineResponse400', 'model/Snapshot', 'model/SnapshotCreate', 'model/SnapshotPostAccessrights', 'model/SnapshotServices', 'model/SnapshotUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineResponse400'), require('../model/Snapshot'), require('../model/SnapshotCreate'), require('../model/SnapshotPostAccessrights'), require('../model/SnapshotServices'), require('../model/SnapshotUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.SnapshotApi = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.Event, root.HyperoneClient.InlineResponse400, root.HyperoneClient.Snapshot, root.HyperoneClient.SnapshotCreate, root.HyperoneClient.SnapshotPostAccessrights, root.HyperoneClient.SnapshotServices, root.HyperoneClient.SnapshotUpdate);
  }
}(this, function(ApiClient, Event, InlineResponse400, Snapshot, SnapshotCreate, SnapshotPostAccessrights, SnapshotServices, SnapshotUpdate) {
  'use strict';

  /**
   * Snapshot service.
   * @module h1-client/SnapshotApi
   * @version 0.0.3
   */

  /**
   * Constructs a new SnapshotApi. 
   * @alias module:h1-client/SnapshotApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create
     * Create snapshot
     * @param {module:model/SnapshotCreate} snapshotCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Snapshot} and HTTP response
     */
    this.snapshotCreateWithHttpInfo = function(snapshotCreate, opts) {
      opts = opts || {};
      var postBody = snapshotCreate;
      // verify the required parameter 'snapshotCreate' is set
      if (snapshotCreate === undefined || snapshotCreate === null) {
        throw new Error("Missing the required parameter 'snapshotCreate' when calling snapshotCreate");
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
      var returnType = Snapshot;
      return this.apiClient.callApi(
        '/snapshot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create
     * Create snapshot
     * @param {module:model/SnapshotCreate} snapshotCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    this.snapshotCreate = function(snapshotCreate, opts) {
      return this.snapshotCreateWithHttpInfo(snapshotCreate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.snapshotDeleteWithHttpInfo = function(snapshotId) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotDelete");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.snapshotDelete = function(snapshotId) {
      return this.snapshotDeleteWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} snapshotId ID of snapshot
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Snapshot} and HTTP response
     */
    this.snapshotDeleteAccessrightsIdentityWithHttpInfo = function(snapshotId, identity) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotDeleteAccessrightsIdentity");
      }
      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling snapshotDeleteAccessrightsIdentity");
      }

      var pathParams = {
        'snapshotId': snapshotId,
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
      var returnType = Snapshot;
      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} snapshotId ID of snapshot
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    this.snapshotDeleteAccessrightsIdentity = function(snapshotId, identity) {
      return this.snapshotDeleteAccessrightsIdentityWithHttpInfo(snapshotId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} snapshotId ID of snapshot
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.snapshotDeleteTagKeyWithHttpInfo = function(snapshotId, key) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotDeleteTagKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling snapshotDeleteTagKey");
      }

      var pathParams = {
        'snapshotId': snapshotId,
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
        '/snapshot/{snapshotId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag/:key
     * @param {String} snapshotId ID of snapshot
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.snapshotDeleteTagKey = function(snapshotId, key) {
      return this.snapshotDeleteTagKeyWithHttpInfo(snapshotId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} snapshotId ID of snapshot
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnapshotServices} and HTTP response
     */
    this.snapshotGetServicesServiceIdWithHttpInfo = function(snapshotId, serviceId) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotGetServicesServiceId");
      }
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling snapshotGetServicesServiceId");
      }

      var pathParams = {
        'snapshotId': snapshotId,
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
      var returnType = SnapshotServices;
      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services/:serviceId
     * @param {String} snapshotId ID of snapshot
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnapshotServices}
     */
    this.snapshotGetServicesServiceId = function(snapshotId, serviceId) {
      return this.snapshotGetServicesServiceIdWithHttpInfo(snapshotId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.snapshotGetTagWithHttpInfo = function(snapshotId) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotGetTag");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.snapshotGetTag = function(snapshotId) {
      return this.snapshotGetTagWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List snapshot
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.vault Filter by vault
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Snapshot>} and HTTP response
     */
    this.snapshotListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'vault': opts['vault'],
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
      var returnType = [Snapshot];
      return this.apiClient.callApi(
        '/snapshot', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List
     * List snapshot
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.vault Filter by vault
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Snapshot>}
     */
    this.snapshotList = function(opts) {
      return this.snapshotListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.snapshotListAccessrightsWithHttpInfo = function(snapshotId) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotListAccessrights");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.snapshotListAccessrights = function(snapshotId) {
      return this.snapshotListAccessrightsWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} snapshotId ID of snapshot
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.snapshotListQueueWithHttpInfo = function(snapshotId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotListQueue");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} snapshotId ID of snapshot
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.snapshotListQueue = function(snapshotId, opts) {
      return this.snapshotListQueueWithHttpInfo(snapshotId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SnapshotServices>} and HTTP response
     */
    this.snapshotListServicesWithHttpInfo = function(snapshotId) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotListServices");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
      var returnType = [SnapshotServices];
      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SnapshotServices>}
     */
    this.snapshotListServices = function(snapshotId) {
      return this.snapshotListServicesWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.snapshotPatchTagWithHttpInfo = function(snapshotId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotPatchTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling snapshotPatchTag");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.snapshotPatchTag = function(snapshotId, requestBody) {
      return this.snapshotPatchTagWithHttpInfo(snapshotId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotPostAccessrights} snapshotPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Snapshot} and HTTP response
     */
    this.snapshotPostAccessrightsWithHttpInfo = function(snapshotId, snapshotPostAccessrights) {
      var postBody = snapshotPostAccessrights;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotPostAccessrights");
      }
      // verify the required parameter 'snapshotPostAccessrights' is set
      if (snapshotPostAccessrights === undefined || snapshotPostAccessrights === null) {
        throw new Error("Missing the required parameter 'snapshotPostAccessrights' when calling snapshotPostAccessrights");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
      var returnType = Snapshot;
      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotPostAccessrights} snapshotPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    this.snapshotPostAccessrights = function(snapshotId, snapshotPostAccessrights) {
      return this.snapshotPostAccessrightsWithHttpInfo(snapshotId, snapshotPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.snapshotPutTagWithHttpInfo = function(snapshotId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotPutTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling snapshotPutTag");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/tag', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.snapshotPutTag = function(snapshotId, requestBody) {
      return this.snapshotPutTagWithHttpInfo(snapshotId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single snapshot
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Snapshot} and HTTP response
     */
    this.snapshotShowWithHttpInfo = function(snapshotId) {
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotShow");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
      var returnType = Snapshot;
      return this.apiClient.callApi(
        '/snapshot/{snapshotId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get
     * Returns a single snapshot
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    this.snapshotShow = function(snapshotId) {
      return this.snapshotShowWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified snapshot
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotUpdate} snapshotUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Snapshot} and HTTP response
     */
    this.snapshotUpdateWithHttpInfo = function(snapshotId, snapshotUpdate) {
      var postBody = snapshotUpdate;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotUpdate");
      }
      // verify the required parameter 'snapshotUpdate' is set
      if (snapshotUpdate === undefined || snapshotUpdate === null) {
        throw new Error("Missing the required parameter 'snapshotUpdate' when calling snapshotUpdate");
      }

      var pathParams = {
        'snapshotId': snapshotId
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
      var returnType = Snapshot;
      return this.apiClient.callApi(
        '/snapshot/{snapshotId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * Returns modified snapshot
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotUpdate} snapshotUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    this.snapshotUpdate = function(snapshotId, snapshotUpdate) {
      return this.snapshotUpdateWithHttpInfo(snapshotId, snapshotUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));