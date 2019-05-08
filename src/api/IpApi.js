/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
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
    define(['ApiClient', 'model/Event', 'model/InlineResponse400', 'model/Ip', 'model/IpActionAssociate', 'model/IpActionTransfer', 'model/IpCreate', 'model/IpPostAccessrights', 'model/IpServices', 'model/IpUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineResponse400'), require('../model/Ip'), require('../model/IpActionAssociate'), require('../model/IpActionTransfer'), require('../model/IpCreate'), require('../model/IpPostAccessrights'), require('../model/IpServices'), require('../model/IpUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.IpApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.InlineResponse400, root.HyperOneApi.Ip, root.HyperOneApi.IpActionAssociate, root.HyperOneApi.IpActionTransfer, root.HyperOneApi.IpCreate, root.HyperOneApi.IpPostAccessrights, root.HyperOneApi.IpServices, root.HyperOneApi.IpUpdate);
  }
}(this, function(ApiClient, Event, InlineResponse400, Ip, IpActionAssociate, IpActionTransfer, IpCreate, IpPostAccessrights, IpServices, IpUpdate) {
  'use strict';

  /**
   * Ip service.
   * @module api/IpApi
   * @version 0.0.2
   */

  /**
   * Constructs a new IpApi. 
   * @alias module:api/IpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/allocate
     * Action allocate
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipActionAllocateWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipActionAllocate");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/actions/allocate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/allocate
     * Action allocate
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipActionAllocate = function(ipId) {
      return this.ipActionAllocateWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/associate
     * Action associate
     * @param {String} ipId ID of ip
     * @param {module:model/IpActionAssociate} ipActionAssociate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipActionAssociateWithHttpInfo = function(ipId, ipActionAssociate) {
      var postBody = ipActionAssociate;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipActionAssociate");
      }
      // verify the required parameter 'ipActionAssociate' is set
      if (ipActionAssociate === undefined || ipActionAssociate === null) {
        throw new Error("Missing the required parameter 'ipActionAssociate' when calling ipActionAssociate");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/actions/associate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/associate
     * Action associate
     * @param {String} ipId ID of ip
     * @param {module:model/IpActionAssociate} ipActionAssociate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipActionAssociate = function(ipId, ipActionAssociate) {
      return this.ipActionAssociateWithHttpInfo(ipId, ipActionAssociate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/disassociate
     * Action disassociate
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipActionDisassociateWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipActionDisassociate");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/actions/disassociate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/disassociate
     * Action disassociate
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipActionDisassociate = function(ipId) {
      return this.ipActionDisassociateWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/release
     * Action release
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipActionReleaseWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipActionRelease");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/actions/release', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/release
     * Action release
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipActionRelease = function(ipId) {
      return this.ipActionReleaseWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/transfer
     * Action transfer
     * @param {String} ipId ID of ip
     * @param {module:model/IpActionTransfer} ipActionTransfer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipActionTransferWithHttpInfo = function(ipId, ipActionTransfer) {
      var postBody = ipActionTransfer;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipActionTransfer");
      }
      // verify the required parameter 'ipActionTransfer' is set
      if (ipActionTransfer === undefined || ipActionTransfer === null) {
        throw new Error("Missing the required parameter 'ipActionTransfer' when calling ipActionTransfer");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/actions/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/transfer
     * Action transfer
     * @param {String} ipId ID of ip
     * @param {module:model/IpActionTransfer} ipActionTransfer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipActionTransfer = function(ipId, ipActionTransfer) {
      return this.ipActionTransferWithHttpInfo(ipId, ipActionTransfer)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create ip
     * @param {module:model/IpCreate} ipCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipCreateWithHttpInfo = function(ipCreate) {
      var postBody = ipCreate;
      // verify the required parameter 'ipCreate' is set
      if (ipCreate === undefined || ipCreate === null) {
        throw new Error("Missing the required parameter 'ipCreate' when calling ipCreate");
      }

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
      var returnType = Ip;
      return this.apiClient.callApi(
        '/ip', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create
     * Create ip
     * @param {module:model/IpCreate} ipCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipCreate = function(ipCreate) {
      return this.ipCreateWithHttpInfo(ipCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.ipDeleteWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipDelete");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.ipDelete = function(ipId) {
      return this.ipDeleteWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} ipId ID of ip
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipDeleteAccessrightsIdentityWithHttpInfo = function(ipId, identity) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipDeleteAccessrightsIdentity");
      }
      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling ipDeleteAccessrightsIdentity");
      }

      var pathParams = {
        'ipId': ipId,
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
      var returnType = Ip;
      return this.apiClient.callApi(
        '/ip/{ipId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} ipId ID of ip
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipDeleteAccessrightsIdentity = function(ipId, identity) {
      return this.ipDeleteAccessrightsIdentityWithHttpInfo(ipId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} ipId ID of ip
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.ipDeleteTagKeyWithHttpInfo = function(ipId, key) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipDeleteTagKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling ipDeleteTagKey");
      }

      var pathParams = {
        'ipId': ipId,
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
      var returnType = Object;
      return this.apiClient.callApi(
        '/ip/{ipId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag/:key
     * @param {String} ipId ID of ip
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.ipDeleteTagKey = function(ipId, key) {
      return this.ipDeleteTagKeyWithHttpInfo(ipId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} ipId ID of ip
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpServices} and HTTP response
     */
    this.ipGetServicesServiceIdWithHttpInfo = function(ipId, serviceId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipGetServicesServiceId");
      }
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling ipGetServicesServiceId");
      }

      var pathParams = {
        'ipId': ipId,
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
      var returnType = IpServices;
      return this.apiClient.callApi(
        '/ip/{ipId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services/:serviceId
     * @param {String} ipId ID of ip
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpServices}
     */
    this.ipGetServicesServiceId = function(ipId, serviceId) {
      return this.ipGetServicesServiceIdWithHttpInfo(ipId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.ipGetTagWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipGetTag");
      }

      var pathParams = {
        'ipId': ipId
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
      var returnType = Object;
      return this.apiClient.callApi(
        '/ip/{ipId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.ipGetTag = function(ipId) {
      return this.ipGetTagWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List ip
     * @param {Object} opts Optional parameters
     * @param {String} opts.network Filter by network
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Ip>} and HTTP response
     */
    this.ipListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'network': opts['network'],
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
      var returnType = [Ip];
      return this.apiClient.callApi(
        '/ip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List
     * List ip
     * @param {Object} opts Optional parameters
     * @param {String} opts.network Filter by network
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Ip>}
     */
    this.ipList = function(opts) {
      return this.ipListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.ipListAccessrightsWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipListAccessrights");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.ipListAccessrights = function(ipId) {
      return this.ipListAccessrightsWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.ipListQueueWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipListQueue");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.ipListQueue = function(ipId) {
      return this.ipListQueueWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/IpServices>} and HTTP response
     */
    this.ipListServicesWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipListServices");
      }

      var pathParams = {
        'ipId': ipId
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
      var returnType = [IpServices];
      return this.apiClient.callApi(
        '/ip/{ipId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /services
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/IpServices>}
     */
    this.ipListServices = function(ipId) {
      return this.ipListServicesWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} ipId ID of ip
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.ipPatchTagWithHttpInfo = function(ipId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipPatchTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling ipPatchTag");
      }

      var pathParams = {
        'ipId': ipId
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
      var returnType = Object;
      return this.apiClient.callApi(
        '/ip/{ipId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} ipId ID of ip
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.ipPatchTag = function(ipId, requestBody) {
      return this.ipPatchTagWithHttpInfo(ipId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} ipId ID of ip
     * @param {module:model/IpPostAccessrights} ipPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipPostAccessrightsWithHttpInfo = function(ipId, ipPostAccessrights) {
      var postBody = ipPostAccessrights;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipPostAccessrights");
      }
      // verify the required parameter 'ipPostAccessrights' is set
      if (ipPostAccessrights === undefined || ipPostAccessrights === null) {
        throw new Error("Missing the required parameter 'ipPostAccessrights' when calling ipPostAccessrights");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} ipId ID of ip
     * @param {module:model/IpPostAccessrights} ipPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipPostAccessrights = function(ipId, ipPostAccessrights) {
      return this.ipPostAccessrightsWithHttpInfo(ipId, ipPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single ip
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipShowWithHttpInfo = function(ipId) {
      var postBody = null;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipShow");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get
     * Returns a single ip
     * @param {String} ipId ID of ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipShow = function(ipId) {
      return this.ipShowWithHttpInfo(ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified ip
     * @param {String} ipId ID of ip
     * @param {module:model/IpUpdate} ipUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ip} and HTTP response
     */
    this.ipUpdateWithHttpInfo = function(ipId, ipUpdate) {
      var postBody = ipUpdate;
      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling ipUpdate");
      }
      // verify the required parameter 'ipUpdate' is set
      if (ipUpdate === undefined || ipUpdate === null) {
        throw new Error("Missing the required parameter 'ipUpdate' when calling ipUpdate");
      }

      var pathParams = {
        'ipId': ipId
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
        '/ip/{ipId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * Returns modified ip
     * @param {String} ipId ID of ip
     * @param {module:model/IpUpdate} ipUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ip}
     */
    this.ipUpdate = function(ipId, ipUpdate) {
      return this.ipUpdateWithHttpInfo(ipId, ipUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
