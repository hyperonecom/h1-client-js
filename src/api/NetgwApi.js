/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Event from '../model/Event';
import Netgw from '../model/Netgw';
import NetgwActionAttach from '../model/NetgwActionAttach';
import NetgwCreate from '../model/NetgwCreate';
import NetgwPostAccessrights from '../model/NetgwPostAccessrights';
import NetgwServices from '../model/NetgwServices';
import NetgwUpdate from '../model/NetgwUpdate';

/**
* Netgw service.
* @module api/NetgwApi
* @version 0.0.2
*/
export default class NetgwApi {

    /**
    * Constructs a new NetgwApi. 
    * @alias module:api/NetgwApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * /actions/attach
     * Action attach
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwActionAttach} netgwActionAttach 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    netgwActionAttachWithHttpInfo(netgwId, netgwActionAttach) {
      let postBody = netgwActionAttach;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwActionAttach");
      }

      // verify the required parameter 'netgwActionAttach' is set
      if (netgwActionAttach === undefined || netgwActionAttach === null) {
        throw new Error("Missing the required parameter 'netgwActionAttach' when calling netgwActionAttach");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Netgw;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/actions/attach', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/attach
     * Action attach
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwActionAttach} netgwActionAttach 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    netgwActionAttach(netgwId, netgwActionAttach) {
      return this.netgwActionAttachWithHttpInfo(netgwId, netgwActionAttach)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/detach
     * Action detach
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    netgwActionDetachWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwActionDetach");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Netgw;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/actions/detach', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/detach
     * Action detach
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    netgwActionDetach(netgwId) {
      return this.netgwActionDetachWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create netgw
     * @param {module:model/NetgwCreate} netgwCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netgw} and HTTP response
     */
    netgwCreateWithHttpInfo(netgwCreate) {
      let postBody = netgwCreate;

      // verify the required parameter 'netgwCreate' is set
      if (netgwCreate === undefined || netgwCreate === null) {
        throw new Error("Missing the required parameter 'netgwCreate' when calling netgwCreate");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Netgw;

      return this.apiClient.callApi(
        '/netgw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create
     * Create netgw
     * @param {module:model/NetgwCreate} netgwCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    netgwCreate(netgwCreate) {
      return this.netgwCreateWithHttpInfo(netgwCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    netgwDeleteWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwDelete");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/netgw/{netgwId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    netgwDelete(netgwId) {
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
    netgwDeleteAccessrightsIdentityWithHttpInfo(netgwId, identity) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwDeleteAccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling netgwDeleteAccessrightsIdentity");
      }


      let pathParams = {
        'netgwId': netgwId,
        'identity': identity
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Netgw;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} netgwId ID of netgw
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    netgwDeleteAccessrightsIdentity(netgwId, identity) {
      return this.netgwDeleteAccessrightsIdentityWithHttpInfo(netgwId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} netgwId ID of netgw
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    netgwDeleteTagKeyWithHttpInfo(netgwId, key) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwDeleteTagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling netgwDeleteTagKey");
      }


      let pathParams = {
        'netgwId': netgwId,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/tag/{key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/:key
     * @param {String} netgwId ID of netgw
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    netgwDeleteTagKey(netgwId, key) {
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
    netgwGetServicesServiceIdWithHttpInfo(netgwId, serviceId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwGetServicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling netgwGetServicesServiceId");
      }


      let pathParams = {
        'netgwId': netgwId,
        'serviceId': serviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NetgwServices;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/services/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/:serviceId
     * @param {String} netgwId ID of netgw
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetgwServices}
     */
    netgwGetServicesServiceId(netgwId, serviceId) {
      return this.netgwGetServicesServiceIdWithHttpInfo(netgwId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    netgwGetTagWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwGetTag");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    netgwGetTag(netgwId) {
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Netgw>} and HTTP response
     */
    netgwListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Netgw];

      return this.apiClient.callApi(
        '/netgw', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * List netgw
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Netgw>}
     */
    netgwList(opts) {
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
    netgwListAccessrightsWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwListAccessrights");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];

      return this.apiClient.callApi(
        '/netgw/{netgwId}/accessrights', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    netgwListAccessrights(netgwId) {
      return this.netgwListAccessrightsWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    netgwListQueueWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwListQueue");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Event];

      return this.apiClient.callApi(
        '/netgw/{netgwId}/queue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /queue
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    netgwListQueue(netgwId) {
      return this.netgwListQueueWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NetgwServices>} and HTTP response
     */
    netgwListServicesWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwListServices");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [NetgwServices];

      return this.apiClient.callApi(
        '/netgw/{netgwId}/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NetgwServices>}
     */
    netgwListServices(netgwId) {
      return this.netgwListServicesWithHttpInfo(netgwId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    netgwPatchTagWithHttpInfo(netgwId, body) {
      let postBody = body;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwPatchTag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling netgwPatchTag");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/netgw/{netgwId}/tag', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} netgwId ID of netgw
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    netgwPatchTag(netgwId, body) {
      return this.netgwPatchTagWithHttpInfo(netgwId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwPostAccessrights} netgwPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    netgwPostAccessrightsWithHttpInfo(netgwId, netgwPostAccessrights) {
      let postBody = netgwPostAccessrights;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwPostAccessrights");
      }

      // verify the required parameter 'netgwPostAccessrights' is set
      if (netgwPostAccessrights === undefined || netgwPostAccessrights === null) {
        throw new Error("Missing the required parameter 'netgwPostAccessrights' when calling netgwPostAccessrights");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/netgw/{netgwId}/accessrights', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwPostAccessrights} netgwPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    netgwPostAccessrights(netgwId, netgwPostAccessrights) {
      return this.netgwPostAccessrightsWithHttpInfo(netgwId, netgwPostAccessrights)
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
    netgwShowWithHttpInfo(netgwId) {
      let postBody = null;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwShow");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Netgw;

      return this.apiClient.callApi(
        '/netgw/{netgwId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Returns a single netgw
     * @param {String} netgwId ID of netgw
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    netgwShow(netgwId) {
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
    netgwUpdateWithHttpInfo(netgwId, netgwUpdate) {
      let postBody = netgwUpdate;

      // verify the required parameter 'netgwId' is set
      if (netgwId === undefined || netgwId === null) {
        throw new Error("Missing the required parameter 'netgwId' when calling netgwUpdate");
      }

      // verify the required parameter 'netgwUpdate' is set
      if (netgwUpdate === undefined || netgwUpdate === null) {
        throw new Error("Missing the required parameter 'netgwUpdate' when calling netgwUpdate");
      }


      let pathParams = {
        'netgwId': netgwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Netgw;

      return this.apiClient.callApi(
        '/netgw/{netgwId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Returns modified netgw
     * @param {String} netgwId ID of netgw
     * @param {module:model/NetgwUpdate} netgwUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netgw}
     */
    netgwUpdate(netgwId, netgwUpdate) {
      return this.netgwUpdateWithHttpInfo(netgwId, netgwUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
