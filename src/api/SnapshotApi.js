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
import Snapshot from '../model/Snapshot';
import SnapshotCreate from '../model/SnapshotCreate';
import SnapshotPostAccessrights from '../model/SnapshotPostAccessrights';
import SnapshotServices from '../model/SnapshotServices';
import SnapshotUpdate from '../model/SnapshotUpdate';

/**
* Snapshot service.
* @module api/SnapshotApi
* @version 0.0.2
*/
export default class SnapshotApi {

    /**
    * Constructs a new SnapshotApi. 
    * @alias module:api/SnapshotApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create
     * Create snapshot
     * @param {module:model/SnapshotCreate} snapshotCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Snapshot} and HTTP response
     */
    snapshotCreateWithHttpInfo(snapshotCreate) {
      let postBody = snapshotCreate;

      // verify the required parameter 'snapshotCreate' is set
      if (snapshotCreate === undefined || snapshotCreate === null) {
        throw new Error("Missing the required parameter 'snapshotCreate' when calling snapshotCreate");
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
      let returnType = Snapshot;

      return this.apiClient.callApi(
        '/snapshot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create
     * Create snapshot
     * @param {module:model/SnapshotCreate} snapshotCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    snapshotCreate(snapshotCreate) {
      return this.snapshotCreateWithHttpInfo(snapshotCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    snapshotDeleteWithHttpInfo(snapshotId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotDelete");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    snapshotDelete(snapshotId) {
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
    snapshotDeleteAccessrightsIdentityWithHttpInfo(snapshotId, identity) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotDeleteAccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling snapshotDeleteAccessrightsIdentity");
      }


      let pathParams = {
        'snapshotId': snapshotId,
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
      let returnType = Snapshot;

      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} snapshotId ID of snapshot
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    snapshotDeleteAccessrightsIdentity(snapshotId, identity) {
      return this.snapshotDeleteAccessrightsIdentityWithHttpInfo(snapshotId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} snapshotId ID of snapshot
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    snapshotDeleteTagKeyWithHttpInfo(snapshotId, key) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotDeleteTagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling snapshotDeleteTagKey");
      }


      let pathParams = {
        'snapshotId': snapshotId,
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
        '/snapshot/{snapshotId}/tag/{key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/:key
     * @param {String} snapshotId ID of snapshot
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    snapshotDeleteTagKey(snapshotId, key) {
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
    snapshotGetServicesServiceIdWithHttpInfo(snapshotId, serviceId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotGetServicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling snapshotGetServicesServiceId");
      }


      let pathParams = {
        'snapshotId': snapshotId,
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
      let returnType = SnapshotServices;

      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/services/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/:serviceId
     * @param {String} snapshotId ID of snapshot
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnapshotServices}
     */
    snapshotGetServicesServiceId(snapshotId, serviceId) {
      return this.snapshotGetServicesServiceIdWithHttpInfo(snapshotId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    snapshotGetTagWithHttpInfo(snapshotId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotGetTag");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    snapshotGetTag(snapshotId) {
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Snapshot>} and HTTP response
     */
    snapshotListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'vault': opts['vault']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Snapshot];

      return this.apiClient.callApi(
        '/snapshot', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * List snapshot
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.vault Filter by vault
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Snapshot>}
     */
    snapshotList(opts) {
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
    snapshotListAccessrightsWithHttpInfo(snapshotId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotListAccessrights");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/accessrights', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    snapshotListAccessrights(snapshotId) {
      return this.snapshotListAccessrightsWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    snapshotListQueueWithHttpInfo(snapshotId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotListQueue");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/queue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /queue
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    snapshotListQueue(snapshotId) {
      return this.snapshotListQueueWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SnapshotServices>} and HTTP response
     */
    snapshotListServicesWithHttpInfo(snapshotId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotListServices");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
      let returnType = [SnapshotServices];

      return this.apiClient.callApi(
        '/snapshot/{snapshotId}/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SnapshotServices>}
     */
    snapshotListServices(snapshotId) {
      return this.snapshotListServicesWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    snapshotPatchTagWithHttpInfo(snapshotId, body) {
      let postBody = body;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotPatchTag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling snapshotPatchTag");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/tag', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} snapshotId ID of snapshot
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    snapshotPatchTag(snapshotId, body) {
      return this.snapshotPatchTagWithHttpInfo(snapshotId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotPostAccessrights} snapshotPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    snapshotPostAccessrightsWithHttpInfo(snapshotId, snapshotPostAccessrights) {
      let postBody = snapshotPostAccessrights;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotPostAccessrights");
      }

      // verify the required parameter 'snapshotPostAccessrights' is set
      if (snapshotPostAccessrights === undefined || snapshotPostAccessrights === null) {
        throw new Error("Missing the required parameter 'snapshotPostAccessrights' when calling snapshotPostAccessrights");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
        '/snapshot/{snapshotId}/accessrights', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotPostAccessrights} snapshotPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    snapshotPostAccessrights(snapshotId, snapshotPostAccessrights) {
      return this.snapshotPostAccessrightsWithHttpInfo(snapshotId, snapshotPostAccessrights)
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
    snapshotShowWithHttpInfo(snapshotId) {
      let postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotShow");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
      let returnType = Snapshot;

      return this.apiClient.callApi(
        '/snapshot/{snapshotId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Returns a single snapshot
     * @param {String} snapshotId ID of snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    snapshotShow(snapshotId) {
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
    snapshotUpdateWithHttpInfo(snapshotId, snapshotUpdate) {
      let postBody = snapshotUpdate;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling snapshotUpdate");
      }

      // verify the required parameter 'snapshotUpdate' is set
      if (snapshotUpdate === undefined || snapshotUpdate === null) {
        throw new Error("Missing the required parameter 'snapshotUpdate' when calling snapshotUpdate");
      }


      let pathParams = {
        'snapshotId': snapshotId
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
      let returnType = Snapshot;

      return this.apiClient.callApi(
        '/snapshot/{snapshotId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Returns modified snapshot
     * @param {String} snapshotId ID of snapshot
     * @param {module:model/SnapshotUpdate} snapshotUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Snapshot}
     */
    snapshotUpdate(snapshotId, snapshotUpdate) {
      return this.snapshotUpdateWithHttpInfo(snapshotId, snapshotUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}