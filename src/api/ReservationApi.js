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
    define(['ApiClient', 'model/Event', 'model/InlineObject57', 'model/InlineObject58', 'model/InlineObject59', 'model/Reservation', 'model/ReservationServices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/InlineObject57'), require('../model/InlineObject58'), require('../model/InlineObject59'), require('../model/Reservation'), require('../model/ReservationServices'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ReservationApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.InlineObject57, root.HyperOneApi.InlineObject58, root.HyperOneApi.InlineObject59, root.HyperOneApi.Reservation, root.HyperOneApi.ReservationServices);
  }
}(this, function(ApiClient, Event, InlineObject57, InlineObject58, InlineObject59, Reservation, ReservationServices) {
  'use strict';

  /**
   * Reservation service.
   * @module api/ReservationApi
   * @version 1
   */

  /**
   * Constructs a new ReservationApi. 
   * @alias module:api/ReservationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the actionReservationAssign operation.
     * @callback module:api/ReservationApi~actionReservationAssignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /actions/assign
     * Action assign
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~actionReservationAssignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.actionReservationAssign = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling actionReservationAssign");
      }


      var pathParams = {
        'reservationId': reservationId
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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation/{reservationId}/actions/assign', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionReservationExtend operation.
     * @callback module:api/ReservationApi~actionReservationExtendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /actions/extend
     * Action extend
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~actionReservationExtendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.actionReservationExtend = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling actionReservationExtend");
      }


      var pathParams = {
        'reservationId': reservationId
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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation/{reservationId}/actions/extend', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionReservationUnassign operation.
     * @callback module:api/ReservationApi~actionReservationUnassignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /actions/unassign
     * Action unassign
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~actionReservationUnassignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.actionReservationUnassign = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling actionReservationUnassign");
      }


      var pathParams = {
        'reservationId': reservationId
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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation/{reservationId}/actions/unassign', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createReservation operation.
     * @callback module:api/ReservationApi~createReservationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Create reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject57} opts.inlineObject57 
     * @param {module:api/ReservationApi~createReservationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.createReservation = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject57'];


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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReservation operation.
     * @callback module:api/ReservationApi~deleteReservationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~deleteReservationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReservation = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling deleteReservation");
      }


      var pathParams = {
        'reservationId': reservationId
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
        '/reservation/{reservationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listReservation operation.
     * @callback module:api/ReservationApi~listReservationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reservation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List reservation
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {module:api/ReservationApi~listReservationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reservation>}
     */
    this.listReservation = function(opts, callback) {
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
      var returnType = [Reservation];

      return this.apiClient.callApi(
        '/reservation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationDeleteaccessrightsIdentity operation.
     * @callback module:api/ReservationApi~operationReservationDeleteaccessrightsIdentityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /accessrights/:identity
     * @param {String} reservationId ID of reservation
     * @param {String} identity identity
     * @param {module:api/ReservationApi~operationReservationDeleteaccessrightsIdentityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.operationReservationDeleteaccessrightsIdentity = function(reservationId, identity, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationDeleteaccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling operationReservationDeleteaccessrightsIdentity");
      }


      var pathParams = {
        'reservationId': reservationId,
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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation/{reservationId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationDeletetagKey operation.
     * @callback module:api/ReservationApi~operationReservationDeletetagKeyCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tag/:key
     * @param {String} reservationId ID of reservation
     * @param {String} key key
     * @param {module:api/ReservationApi~operationReservationDeletetagKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    this.operationReservationDeletetagKey = function(reservationId, key, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationDeletetagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling operationReservationDeletetagKey");
      }


      var pathParams = {
        'reservationId': reservationId,
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
        '/reservation/{reservationId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationGetservicesServiceId operation.
     * @callback module:api/ReservationApi~operationReservationGetservicesServiceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReservationServices} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /services/:serviceId
     * @param {String} reservationId ID of reservation
     * @param {String} serviceId serviceId
     * @param {module:api/ReservationApi~operationReservationGetservicesServiceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReservationServices}
     */
    this.operationReservationGetservicesServiceId = function(reservationId, serviceId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationGetservicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling operationReservationGetservicesServiceId");
      }


      var pathParams = {
        'reservationId': reservationId,
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
      var returnType = ReservationServices;

      return this.apiClient.callApi(
        '/reservation/{reservationId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationGettag operation.
     * @callback module:api/ReservationApi~operationReservationGettagCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tag/
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~operationReservationGettagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    this.operationReservationGettag = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationGettag");
      }


      var pathParams = {
        'reservationId': reservationId
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
        '/reservation/{reservationId}/tag/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationListaccessrights operation.
     * @callback module:api/ReservationApi~operationReservationListaccessrightsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /accessrights/
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~operationReservationListaccessrightsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    this.operationReservationListaccessrights = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationListaccessrights");
      }


      var pathParams = {
        'reservationId': reservationId
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
        '/reservation/{reservationId}/accessrights/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationListqueue operation.
     * @callback module:api/ReservationApi~operationReservationListqueueCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /queue/
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~operationReservationListqueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.operationReservationListqueue = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationListqueue");
      }


      var pathParams = {
        'reservationId': reservationId
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
        '/reservation/{reservationId}/queue/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationListservices operation.
     * @callback module:api/ReservationApi~operationReservationListservicesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReservationServices>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /services/
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~operationReservationListservicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReservationServices>}
     */
    this.operationReservationListservices = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationListservices");
      }


      var pathParams = {
        'reservationId': reservationId
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
      var returnType = [ReservationServices];

      return this.apiClient.callApi(
        '/reservation/{reservationId}/services/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationPatchtag operation.
     * @callback module:api/ReservationApi~operationReservationPatchtagCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tag/
     * @param {String} reservationId ID of reservation
     * @param {Object.<String, {String: String}>} requestBody 
     * @param {module:api/ReservationApi~operationReservationPatchtagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    this.operationReservationPatchtag = function(reservationId, requestBody, callback) {
      var postBody = requestBody;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationPatchtag");
      }

      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling operationReservationPatchtag");
      }


      var pathParams = {
        'reservationId': reservationId
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
        '/reservation/{reservationId}/tag/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the operationReservationPostaccessrights operation.
     * @callback module:api/ReservationApi~operationReservationPostaccessrightsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /accessrights/
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject59} opts.inlineObject59 
     * @param {module:api/ReservationApi~operationReservationPostaccessrightsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.operationReservationPostaccessrights = function(reservationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject59'];

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling operationReservationPostaccessrights");
      }


      var pathParams = {
        'reservationId': reservationId
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
        '/reservation/{reservationId}/accessrights/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the showReservation operation.
     * @callback module:api/ReservationApi~showReservationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get
     * Returns a single reservation
     * @param {String} reservationId ID of reservation
     * @param {module:api/ReservationApi~showReservationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.showReservation = function(reservationId, callback) {
      var postBody = null;

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling showReservation");
      }


      var pathParams = {
        'reservationId': reservationId
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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation/{reservationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReservation operation.
     * @callback module:api/ReservationApi~updateReservationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update
     * Returns modified reservation
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject58} opts.inlineObject58 
     * @param {module:api/ReservationApi~updateReservationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reservation}
     */
    this.updateReservation = function(reservationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject58'];

      // verify the required parameter 'reservationId' is set
      if (reservationId === undefined || reservationId === null) {
        throw new Error("Missing the required parameter 'reservationId' when calling updateReservation");
      }


      var pathParams = {
        'reservationId': reservationId
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
      var returnType = Reservation;

      return this.apiClient.callApi(
        '/reservation/{reservationId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
