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
    define(['ApiClient', 'model/AccessrightsUserRole', 'model/Event', 'model/InlineResponse400', 'model/Organisation', 'model/OrganisationActionPaymentAssign', 'model/OrganisationActionTransferAccept', 'model/OrganisationCreate', 'model/OrganisationPostAccessrights', 'model/OrganisationUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessrightsUserRole'), require('../model/Event'), require('../model/InlineResponse400'), require('../model/Organisation'), require('../model/OrganisationActionPaymentAssign'), require('../model/OrganisationActionTransferAccept'), require('../model/OrganisationCreate'), require('../model/OrganisationPostAccessrights'), require('../model/OrganisationUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.OrganisationApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.AccessrightsUserRole, root.HyperOneApi.Event, root.HyperOneApi.InlineResponse400, root.HyperOneApi.Organisation, root.HyperOneApi.OrganisationActionPaymentAssign, root.HyperOneApi.OrganisationActionTransferAccept, root.HyperOneApi.OrganisationCreate, root.HyperOneApi.OrganisationPostAccessrights, root.HyperOneApi.OrganisationUpdate);
  }
}(this, function(ApiClient, AccessrightsUserRole, Event, InlineResponse400, Organisation, OrganisationActionPaymentAssign, OrganisationActionTransferAccept, OrganisationCreate, OrganisationPostAccessrights, OrganisationUpdate) {
  'use strict';

  /**
   * Organisation service.
   * @module api/OrganisationApi
   * @version 0.0.2
   */

  /**
   * Constructs a new OrganisationApi. 
   * @alias module:api/OrganisationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/payment_assign
     * Action payment_assign
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationActionPaymentAssign} organisationActionPaymentAssign 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationActionPaymentAssignWithHttpInfo = function(organisationId, organisationActionPaymentAssign) {
      var postBody = organisationActionPaymentAssign;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationActionPaymentAssign");
      }
      // verify the required parameter 'organisationActionPaymentAssign' is set
      if (organisationActionPaymentAssign === undefined || organisationActionPaymentAssign === null) {
        throw new Error("Missing the required parameter 'organisationActionPaymentAssign' when calling organisationActionPaymentAssign");
      }

      var pathParams = {
        'organisationId': organisationId
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
      var returnType = Organisation;
      return this.apiClient.callApi(
        '/organisation/{organisationId}/actions/payment_assign', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/payment_assign
     * Action payment_assign
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationActionPaymentAssign} organisationActionPaymentAssign 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationActionPaymentAssign = function(organisationId, organisationActionPaymentAssign) {
      return this.organisationActionPaymentAssignWithHttpInfo(organisationId, organisationActionPaymentAssign)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/transfer_accept
     * Action transfer_accept
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationActionTransferAccept} organisationActionTransferAccept 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationActionTransferAcceptWithHttpInfo = function(organisationId, organisationActionTransferAccept) {
      var postBody = organisationActionTransferAccept;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationActionTransferAccept");
      }
      // verify the required parameter 'organisationActionTransferAccept' is set
      if (organisationActionTransferAccept === undefined || organisationActionTransferAccept === null) {
        throw new Error("Missing the required parameter 'organisationActionTransferAccept' when calling organisationActionTransferAccept");
      }

      var pathParams = {
        'organisationId': organisationId
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
      var returnType = Organisation;
      return this.apiClient.callApi(
        '/organisation/{organisationId}/actions/transfer_accept', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /actions/transfer_accept
     * Action transfer_accept
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationActionTransferAccept} organisationActionTransferAccept 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationActionTransferAccept = function(organisationId, organisationActionTransferAccept) {
      return this.organisationActionTransferAcceptWithHttpInfo(organisationId, organisationActionTransferAccept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create organisation
     * @param {module:model/OrganisationCreate} organisationCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationCreateWithHttpInfo = function(organisationCreate) {
      var postBody = organisationCreate;
      // verify the required parameter 'organisationCreate' is set
      if (organisationCreate === undefined || organisationCreate === null) {
        throw new Error("Missing the required parameter 'organisationCreate' when calling organisationCreate");
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
      var returnType = Organisation;
      return this.apiClient.callApi(
        '/organisation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create
     * Create organisation
     * @param {module:model/OrganisationCreate} organisationCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationCreate = function(organisationCreate) {
      return this.organisationCreateWithHttpInfo(organisationCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:id
     * @param {String} organisationId ID of organisation
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.organisationDeleteAccessrightsIdWithHttpInfo = function(organisationId, id) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationDeleteAccessrightsId");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organisationDeleteAccessrightsId");
      }

      var pathParams = {
        'organisationId': organisationId,
        'id': id
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
        '/organisation/{organisationId}/accessrights/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights/:id
     * @param {String} organisationId ID of organisation
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.organisationDeleteAccessrightsId = function(organisationId, id) {
      return this.organisationDeleteAccessrightsIdWithHttpInfo(organisationId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} organisationId ID of organisation
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.organisationDeleteTagKeyWithHttpInfo = function(organisationId, key) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationDeleteTagKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling organisationDeleteTagKey");
      }

      var pathParams = {
        'organisationId': organisationId,
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
        '/organisation/{organisationId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag/:key
     * @param {String} organisationId ID of organisation
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.organisationDeleteTagKey = function(organisationId, key) {
      return this.organisationDeleteTagKeyWithHttpInfo(organisationId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.organisationGetTagWithHttpInfo = function(organisationId) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationGetTag");
      }

      var pathParams = {
        'organisationId': organisationId
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
        '/organisation/{organisationId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.organisationGetTag = function(organisationId) {
      return this.organisationGetTagWithHttpInfo(organisationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List organisation
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.billingCompany Filter by billing.company
     * @param {Number} opts.limit Filter by $limit
     * @param {Boolean} opts.active Filter by active
     * @param {String} opts.accessRightsId Filter by accessRights.id
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Organisation>} and HTTP response
     */
    this.organisationListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'billing.company': opts['billingCompany'],
        '$limit': opts['limit'],
        'active': opts['active'],
        'accessRights.id': opts['accessRightsId'],
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
      var returnType = [Organisation];
      return this.apiClient.callApi(
        '/organisation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List
     * List organisation
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.billingCompany Filter by billing.company
     * @param {Number} opts.limit Filter by $limit
     * @param {Boolean} opts.active Filter by active
     * @param {String} opts.accessRightsId Filter by accessRights.id
     * @param {Object.<String, {String: String}>} opts.tag Filter by tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Organisation>}
     */
    this.organisationList = function(opts) {
      return this.organisationListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AccessrightsUserRole>} and HTTP response
     */
    this.organisationListAccessrightsWithHttpInfo = function(organisationId) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationListAccessrights");
      }

      var pathParams = {
        'organisationId': organisationId
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
      var returnType = [AccessrightsUserRole];
      return this.apiClient.callApi(
        '/organisation/{organisationId}/accessrights', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AccessrightsUserRole>}
     */
    this.organisationListAccessrights = function(organisationId) {
      return this.organisationListAccessrightsWithHttpInfo(organisationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.organisationListQueueWithHttpInfo = function(organisationId) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationListQueue");
      }

      var pathParams = {
        'organisationId': organisationId
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
        '/organisation/{organisationId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.organisationListQueue = function(organisationId) {
      return this.organisationListQueueWithHttpInfo(organisationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.organisationPatchTagWithHttpInfo = function(organisationId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationPatchTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling organisationPatchTag");
      }

      var pathParams = {
        'organisationId': organisationId
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
        '/organisation/{organisationId}/tag', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.organisationPatchTag = function(organisationId, requestBody) {
      return this.organisationPatchTagWithHttpInfo(organisationId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationPostAccessrights} organisationPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.organisationPostAccessrightsWithHttpInfo = function(organisationId, organisationPostAccessrights) {
      var postBody = organisationPostAccessrights;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationPostAccessrights");
      }
      // verify the required parameter 'organisationPostAccessrights' is set
      if (organisationPostAccessrights === undefined || organisationPostAccessrights === null) {
        throw new Error("Missing the required parameter 'organisationPostAccessrights' when calling organisationPostAccessrights");
      }

      var pathParams = {
        'organisationId': organisationId
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
      var returnType = null;
      return this.apiClient.callApi(
        '/organisation/{organisationId}/accessrights', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /accessrights
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationPostAccessrights} organisationPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.organisationPostAccessrights = function(organisationId, organisationPostAccessrights) {
      return this.organisationPostAccessrightsWithHttpInfo(organisationId, organisationPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single organisation
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationShowWithHttpInfo = function(organisationId) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationShow");
      }

      var pathParams = {
        'organisationId': organisationId
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
      var returnType = Organisation;
      return this.apiClient.callApi(
        '/organisation/{organisationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get
     * Returns a single organisation
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationShow = function(organisationId) {
      return this.organisationShowWithHttpInfo(organisationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified organisation
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationUpdate} organisationUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationUpdateWithHttpInfo = function(organisationId, organisationUpdate) {
      var postBody = organisationUpdate;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationUpdate");
      }
      // verify the required parameter 'organisationUpdate' is set
      if (organisationUpdate === undefined || organisationUpdate === null) {
        throw new Error("Missing the required parameter 'organisationUpdate' when calling organisationUpdate");
      }

      var pathParams = {
        'organisationId': organisationId
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
      var returnType = Organisation;
      return this.apiClient.callApi(
        '/organisation/{organisationId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * Returns modified organisation
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationUpdate} organisationUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationUpdate = function(organisationId, organisationUpdate) {
      return this.organisationUpdateWithHttpInfo(organisationId, organisationUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
