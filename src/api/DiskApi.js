/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/Disk', 'model/DiskActionTransfer', 'model/DiskCreate', 'model/DiskPostAccessrights', 'model/DiskServices', 'model/DiskUpdate', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Disk'), require('../model/DiskActionTransfer'), require('../model/DiskCreate'), require('../model/DiskPostAccessrights'), require('../model/DiskServices'), require('../model/DiskUpdate'), require('../model/Event'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.DiskApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Disk, root.HyperOneApi.DiskActionTransfer, root.HyperOneApi.DiskCreate, root.HyperOneApi.DiskPostAccessrights, root.HyperOneApi.DiskServices, root.HyperOneApi.DiskUpdate, root.HyperOneApi.Event);
  }
}(this, function(ApiClient, Disk, DiskActionTransfer, DiskCreate, DiskPostAccessrights, DiskServices, DiskUpdate, Event) {
  'use strict';

  /**
   * Disk service.
   * @module api/DiskApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DiskApi. 
   * @alias module:api/DiskApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/resize
     * Action resize
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
    this.diskActionResizeWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskActionResize");
      }


      var pathParams = {
        'diskId': diskId
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
      var returnType = Disk;

      return this.apiClient.callApi(
        '/disk/{diskId}/actions/resize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/resize
     * Action resize
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
    this.diskActionResize = function(diskId) {
      return this.diskActionResizeWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/transfer
     * Action transfer
     * @param {String} diskId ID of disk
     * @param {module:model/DiskActionTransfer} diskActionTransfer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
    this.diskActionTransferWithHttpInfo = function(diskId, diskActionTransfer) {
      var postBody = diskActionTransfer;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskActionTransfer");
      }

      // verify the required parameter 'diskActionTransfer' is set
      if (diskActionTransfer === undefined || diskActionTransfer === null) {
        throw new Error("Missing the required parameter 'diskActionTransfer' when calling diskActionTransfer");
      }


      var pathParams = {
        'diskId': diskId
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
      var returnType = Disk;

      return this.apiClient.callApi(
        '/disk/{diskId}/actions/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/transfer
     * Action transfer
     * @param {String} diskId ID of disk
     * @param {module:model/DiskActionTransfer} diskActionTransfer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
    this.diskActionTransfer = function(diskId, diskActionTransfer) {
      return this.diskActionTransferWithHttpInfo(diskId, diskActionTransfer)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create disk
     * @param {module:model/DiskCreate} diskCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
    this.diskCreateWithHttpInfo = function(diskCreate) {
      var postBody = diskCreate;

      // verify the required parameter 'diskCreate' is set
      if (diskCreate === undefined || diskCreate === null) {
        throw new Error("Missing the required parameter 'diskCreate' when calling diskCreate");
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
      var returnType = Disk;

      return this.apiClient.callApi(
        '/disk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create
     * Create disk
     * @param {module:model/DiskCreate} diskCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
    this.diskCreate = function(diskCreate) {
      return this.diskCreateWithHttpInfo(diskCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.diskDeleteWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskDelete");
      }


      var pathParams = {
        'diskId': diskId
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
        '/disk/{diskId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.diskDelete = function(diskId) {
      return this.diskDeleteWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} diskId ID of disk
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
    this.diskDeleteAccessrightsIdentityWithHttpInfo = function(diskId, identity) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskDeleteAccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling diskDeleteAccessrightsIdentity");
      }


      var pathParams = {
        'diskId': diskId,
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
      var returnType = Disk;

      return this.apiClient.callApi(
        '/disk/{diskId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} diskId ID of disk
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
    this.diskDeleteAccessrightsIdentity = function(diskId, identity) {
      return this.diskDeleteAccessrightsIdentityWithHttpInfo(diskId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} diskId ID of disk
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.diskDeleteTagKeyWithHttpInfo = function(diskId, key) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskDeleteTagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling diskDeleteTagKey");
      }


      var pathParams = {
        'diskId': diskId,
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
        '/disk/{diskId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/:key
     * @param {String} diskId ID of disk
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.diskDeleteTagKey = function(diskId, key) {
      return this.diskDeleteTagKeyWithHttpInfo(diskId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} diskId ID of disk
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DiskServices} and HTTP response
     */
    this.diskGetServicesServiceIdWithHttpInfo = function(diskId, serviceId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskGetServicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling diskGetServicesServiceId");
      }


      var pathParams = {
        'diskId': diskId,
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
      var returnType = DiskServices;

      return this.apiClient.callApi(
        '/disk/{diskId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/:serviceId
     * @param {String} diskId ID of disk
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DiskServices}
     */
    this.diskGetServicesServiceId = function(diskId, serviceId) {
      return this.diskGetServicesServiceIdWithHttpInfo(diskId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.diskGetTagWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskGetTag");
      }


      var pathParams = {
        'diskId': diskId
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
        '/disk/{diskId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.diskGetTag = function(diskId) {
      return this.diskGetTagWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List disk
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Disk>} and HTTP response
     */
    this.diskListWithHttpInfo = function(opts) {
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
      var returnType = [Disk];

      return this.apiClient.callApi(
        '/disk', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * List disk
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Disk>}
     */
    this.diskList = function(opts) {
      return this.diskListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.diskListAccessrightsWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskListAccessrights");
      }


      var pathParams = {
        'diskId': diskId
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
        '/disk/{diskId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.diskListAccessrights = function(diskId) {
      return this.diskListAccessrightsWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.diskListQueueWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskListQueue");
      }


      var pathParams = {
        'diskId': diskId
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
        '/disk/{diskId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /queue
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.diskListQueue = function(diskId) {
      return this.diskListQueueWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DiskServices>} and HTTP response
     */
    this.diskListServicesWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskListServices");
      }


      var pathParams = {
        'diskId': diskId
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
      var returnType = [DiskServices];

      return this.apiClient.callApi(
        '/disk/{diskId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DiskServices>}
     */
    this.diskListServices = function(diskId) {
      return this.diskListServicesWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} diskId ID of disk
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.diskPatchTagWithHttpInfo = function(diskId, body) {
      var postBody = body;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskPatchTag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling diskPatchTag");
      }


      var pathParams = {
        'diskId': diskId
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
        '/disk/{diskId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} diskId ID of disk
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.diskPatchTag = function(diskId, body) {
      return this.diskPatchTagWithHttpInfo(diskId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} diskId ID of disk
     * @param {module:model/DiskPostAccessrights} diskPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    this.diskPostAccessrightsWithHttpInfo = function(diskId, diskPostAccessrights) {
      var postBody = diskPostAccessrights;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskPostAccessrights");
      }

      // verify the required parameter 'diskPostAccessrights' is set
      if (diskPostAccessrights === undefined || diskPostAccessrights === null) {
        throw new Error("Missing the required parameter 'diskPostAccessrights' when calling diskPostAccessrights");
      }


      var pathParams = {
        'diskId': diskId
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
        '/disk/{diskId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} diskId ID of disk
     * @param {module:model/DiskPostAccessrights} diskPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    this.diskPostAccessrights = function(diskId, diskPostAccessrights) {
      return this.diskPostAccessrightsWithHttpInfo(diskId, diskPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single disk
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
    this.diskShowWithHttpInfo = function(diskId) {
      var postBody = null;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskShow");
      }


      var pathParams = {
        'diskId': diskId
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
      var returnType = Disk;

      return this.apiClient.callApi(
        '/disk/{diskId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Returns a single disk
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
    this.diskShow = function(diskId) {
      return this.diskShowWithHttpInfo(diskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified disk
     * @param {String} diskId ID of disk
     * @param {module:model/DiskUpdate} diskUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
    this.diskUpdateWithHttpInfo = function(diskId, diskUpdate) {
      var postBody = diskUpdate;

      // verify the required parameter 'diskId' is set
      if (diskId === undefined || diskId === null) {
        throw new Error("Missing the required parameter 'diskId' when calling diskUpdate");
      }

      // verify the required parameter 'diskUpdate' is set
      if (diskUpdate === undefined || diskUpdate === null) {
        throw new Error("Missing the required parameter 'diskUpdate' when calling diskUpdate");
      }


      var pathParams = {
        'diskId': diskId
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
      var returnType = Disk;

      return this.apiClient.callApi(
        '/disk/{diskId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Returns modified disk
     * @param {String} diskId ID of disk
     * @param {module:model/DiskUpdate} diskUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
    this.diskUpdate = function(diskId, diskUpdate) {
      return this.diskUpdateWithHttpInfo(diskId, diskUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
