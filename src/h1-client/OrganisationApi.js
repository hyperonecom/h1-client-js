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
    define(['ApiClient', 'model/AccessrightsUserRole', 'model/Billing', 'model/Event', 'model/InlineResponse400', 'model/Organisation', 'model/OrganisationActionPaymentAssign', 'model/OrganisationActionTransferAccept', 'model/OrganisationCreate', 'model/OrganisationPostAccessrights', 'model/OrganisationUpdate', 'model/Payment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessrightsUserRole'), require('../model/Billing'), require('../model/Event'), require('../model/InlineResponse400'), require('../model/Organisation'), require('../model/OrganisationActionPaymentAssign'), require('../model/OrganisationActionTransferAccept'), require('../model/OrganisationCreate'), require('../model/OrganisationPostAccessrights'), require('../model/OrganisationUpdate'), require('../model/Payment'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.OrganisationApi = factory(root.HyperoneClient.ApiClient, root.HyperoneClient.AccessrightsUserRole, root.HyperoneClient.Billing, root.HyperoneClient.Event, root.HyperoneClient.InlineResponse400, root.HyperoneClient.Organisation, root.HyperoneClient.OrganisationActionPaymentAssign, root.HyperoneClient.OrganisationActionTransferAccept, root.HyperoneClient.OrganisationCreate, root.HyperoneClient.OrganisationPostAccessrights, root.HyperoneClient.OrganisationUpdate, root.HyperoneClient.Payment);
  }
}(this, function(ApiClient, AccessrightsUserRole, Billing, Event, InlineResponse400, Organisation, OrganisationActionPaymentAssign, OrganisationActionTransferAccept, OrganisationCreate, OrganisationPostAccessrights, OrganisationUpdate, Payment) {
  'use strict';

  /**
   * Organisation service.
   * @module h1-client/OrganisationApi
   * @version 0.0.3
   */

  /**
   * Constructs a new OrganisationApi. 
   * @alias module:h1-client/OrganisationApi
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationActionPaymentAssignWithHttpInfo = function(organisationId, organisationActionPaymentAssign, opts) {
      opts = opts || {};
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
        'x-idempotency-key': opts['xIdempotencyKey']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationActionPaymentAssign = function(organisationId, organisationActionPaymentAssign, opts) {
      return this.organisationActionPaymentAssignWithHttpInfo(organisationId, organisationActionPaymentAssign, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/transfer_accept
     * Action transfer_accept
     * @param {String} organisationId ID of organisation
     * @param {module:model/OrganisationActionTransferAccept} organisationActionTransferAccept 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationActionTransferAcceptWithHttpInfo = function(organisationId, organisationActionTransferAccept, opts) {
      opts = opts || {};
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
        'x-idempotency-key': opts['xIdempotencyKey']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationActionTransferAccept = function(organisationId, organisationActionTransferAccept, opts) {
      return this.organisationActionTransferAcceptWithHttpInfo(organisationId, organisationActionTransferAccept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create organisation
     * @param {module:model/OrganisationCreate} organisationCreate 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organisation} and HTTP response
     */
    this.organisationCreateWithHttpInfo = function(organisationCreate, opts) {
      opts = opts || {};
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
        'x-idempotency-key': opts['xIdempotencyKey']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.xIdempotencyKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organisation}
     */
    this.organisationCreate = function(organisationCreate, opts) {
      return this.organisationCreateWithHttpInfo(organisationCreate, opts)
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
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
      var returnType = {'String': 'String'};
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
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
      var returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/organisation/{organisationId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
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
     * /billing
     * @param {String} organisationId ID of organisation
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start start
     * @param {Date} opts.end end
     * @param {String} opts.resourceType resource.type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Billing>} and HTTP response
     */
    this.organisationListBillingWithHttpInfo = function(organisationId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationListBilling");
      }

      var pathParams = {
        'organisationId': organisationId
      };
      var queryParams = {
        'start': opts['start'],
        'end': opts['end'],
        'resource.type': opts['resourceType'],
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
      var returnType = [Billing];
      return this.apiClient.callApi(
        '/organisation/{organisationId}/billing', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /billing
     * @param {String} organisationId ID of organisation
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start start
     * @param {Date} opts.end end
     * @param {String} opts.resourceType resource.type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Billing>}
     */
    this.organisationListBilling = function(organisationId, opts) {
      return this.organisationListBillingWithHttpInfo(organisationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /payment
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Payment>} and HTTP response
     */
    this.organisationListPaymentWithHttpInfo = function(organisationId) {
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationListPayment");
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
      var returnType = [Payment];
      return this.apiClient.callApi(
        '/organisation/{organisationId}/payment', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /payment
     * @param {String} organisationId ID of organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Payment>}
     */
    this.organisationListPayment = function(organisationId) {
      return this.organisationListPaymentWithHttpInfo(organisationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} organisationId ID of organisation
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.organisationListQueueWithHttpInfo = function(organisationId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationListQueue");
      }

      var pathParams = {
        'organisationId': organisationId
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
        '/organisation/{organisationId}/queue', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /queue
     * @param {String} organisationId ID of organisation
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit $limit
     * @param {Number} opts.skip $skip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.organisationListQueue = function(organisationId, opts) {
      return this.organisationListQueueWithHttpInfo(organisationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
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
      var returnType = {'String': 'String'};
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
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
     * /tag
     * @param {String} organisationId ID of organisation
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.organisationPutTagWithHttpInfo = function(organisationId, requestBody) {
      var postBody = requestBody;
      // verify the required parameter 'organisationId' is set
      if (organisationId === undefined || organisationId === null) {
        throw new Error("Missing the required parameter 'organisationId' when calling organisationPutTag");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling organisationPutTag");
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
      var returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/organisation/{organisationId}/tag', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * /tag
     * @param {String} organisationId ID of organisation
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.organisationPutTag = function(organisationId, requestBody) {
      return this.organisationPutTagWithHttpInfo(organisationId, requestBody)
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
