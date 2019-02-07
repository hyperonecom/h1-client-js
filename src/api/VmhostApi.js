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
import Vmhost from '../model/Vmhost';
import VmhostActionMoveDisk from '../model/VmhostActionMoveDisk';
import VmhostActionMoveISO from '../model/VmhostActionMoveISO';
import VmhostActionMoveImage from '../model/VmhostActionMoveImage';
import VmhostActionMoveVM from '../model/VmhostActionMoveVM';
import VmhostPostAccessrights from '../model/VmhostPostAccessrights';
import VmhostServices from '../model/VmhostServices';
import VmhostUpdate from '../model/VmhostUpdate';

/**
* Vmhost service.
* @module api/VmhostApi
* @version 0.0.2
*/
export default class VmhostApi {

    /**
    * Constructs a new VmhostApi. 
    * @alias module:api/VmhostApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * /actions/moveDisk
     * Action moveDisk
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveDisk} vmhostActionMoveDisk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostActionMoveDiskWithHttpInfo(vmhostId, vmhostActionMoveDisk) {
      let postBody = vmhostActionMoveDisk;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostActionMoveDisk");
      }

      // verify the required parameter 'vmhostActionMoveDisk' is set
      if (vmhostActionMoveDisk === undefined || vmhostActionMoveDisk === null) {
        throw new Error("Missing the required parameter 'vmhostActionMoveDisk' when calling vmhostActionMoveDisk");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/actions/moveDisk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/moveDisk
     * Action moveDisk
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveDisk} vmhostActionMoveDisk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostActionMoveDisk(vmhostId, vmhostActionMoveDisk) {
      return this.vmhostActionMoveDiskWithHttpInfo(vmhostId, vmhostActionMoveDisk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/moveISO
     * Action moveISO
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveISO} vmhostActionMoveISO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostActionMoveISOWithHttpInfo(vmhostId, vmhostActionMoveISO) {
      let postBody = vmhostActionMoveISO;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostActionMoveISO");
      }

      // verify the required parameter 'vmhostActionMoveISO' is set
      if (vmhostActionMoveISO === undefined || vmhostActionMoveISO === null) {
        throw new Error("Missing the required parameter 'vmhostActionMoveISO' when calling vmhostActionMoveISO");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/actions/moveISO', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/moveISO
     * Action moveISO
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveISO} vmhostActionMoveISO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostActionMoveISO(vmhostId, vmhostActionMoveISO) {
      return this.vmhostActionMoveISOWithHttpInfo(vmhostId, vmhostActionMoveISO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/moveImage
     * Action moveImage
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveImage} vmhostActionMoveImage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostActionMoveImageWithHttpInfo(vmhostId, vmhostActionMoveImage) {
      let postBody = vmhostActionMoveImage;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostActionMoveImage");
      }

      // verify the required parameter 'vmhostActionMoveImage' is set
      if (vmhostActionMoveImage === undefined || vmhostActionMoveImage === null) {
        throw new Error("Missing the required parameter 'vmhostActionMoveImage' when calling vmhostActionMoveImage");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/actions/moveImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/moveImage
     * Action moveImage
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveImage} vmhostActionMoveImage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostActionMoveImage(vmhostId, vmhostActionMoveImage) {
      return this.vmhostActionMoveImageWithHttpInfo(vmhostId, vmhostActionMoveImage)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /actions/moveVM
     * Action moveVM
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveVM} vmhostActionMoveVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostActionMoveVMWithHttpInfo(vmhostId, vmhostActionMoveVM) {
      let postBody = vmhostActionMoveVM;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostActionMoveVM");
      }

      // verify the required parameter 'vmhostActionMoveVM' is set
      if (vmhostActionMoveVM === undefined || vmhostActionMoveVM === null) {
        throw new Error("Missing the required parameter 'vmhostActionMoveVM' when calling vmhostActionMoveVM");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/actions/moveVM', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/moveVM
     * Action moveVM
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostActionMoveVM} vmhostActionMoveVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostActionMoveVM(vmhostId, vmhostActionMoveVM) {
      return this.vmhostActionMoveVMWithHttpInfo(vmhostId, vmhostActionMoveVM)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    vmhostDeleteWithHttpInfo(vmhostId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostDelete");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
        '/vmhost/{vmhostId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    vmhostDelete(vmhostId) {
      return this.vmhostDeleteWithHttpInfo(vmhostId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} vmhostId ID of vmhost
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostDeleteAccessrightsIdentityWithHttpInfo(vmhostId, identity) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostDeleteAccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling vmhostDeleteAccessrightsIdentity");
      }


      let pathParams = {
        'vmhostId': vmhostId,
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} vmhostId ID of vmhost
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostDeleteAccessrightsIdentity(vmhostId, identity) {
      return this.vmhostDeleteAccessrightsIdentityWithHttpInfo(vmhostId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} vmhostId ID of vmhost
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    vmhostDeleteTagKeyWithHttpInfo(vmhostId, key) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostDeleteTagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling vmhostDeleteTagKey");
      }


      let pathParams = {
        'vmhostId': vmhostId,
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
        '/vmhost/{vmhostId}/tag/{key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/:key
     * @param {String} vmhostId ID of vmhost
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    vmhostDeleteTagKey(vmhostId, key) {
      return this.vmhostDeleteTagKeyWithHttpInfo(vmhostId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} vmhostId ID of vmhost
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VmhostServices} and HTTP response
     */
    vmhostGetServicesServiceIdWithHttpInfo(vmhostId, serviceId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostGetServicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling vmhostGetServicesServiceId");
      }


      let pathParams = {
        'vmhostId': vmhostId,
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
      let returnType = VmhostServices;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/services/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/:serviceId
     * @param {String} vmhostId ID of vmhost
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VmhostServices}
     */
    vmhostGetServicesServiceId(vmhostId, serviceId) {
      return this.vmhostGetServicesServiceIdWithHttpInfo(vmhostId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    vmhostGetTagWithHttpInfo(vmhostId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostGetTag");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
        '/vmhost/{vmhostId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    vmhostGetTag(vmhostId) {
      return this.vmhostGetTagWithHttpInfo(vmhostId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List vmhost
     * @param {Object} opts Optional parameters
     * @param {String} opts.enabledServices Filter by enabledServices
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Vmhost>} and HTTP response
     */
    vmhostListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'enabledServices': opts['enabledServices']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Project', 'ServiceAccount', 'Session'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Vmhost];

      return this.apiClient.callApi(
        '/vmhost', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * List vmhost
     * @param {Object} opts Optional parameters
     * @param {String} opts.enabledServices Filter by enabledServices
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Vmhost>}
     */
    vmhostList(opts) {
      return this.vmhostListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    vmhostListAccessrightsWithHttpInfo(vmhostId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostListAccessrights");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
        '/vmhost/{vmhostId}/accessrights', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    vmhostListAccessrights(vmhostId) {
      return this.vmhostListAccessrightsWithHttpInfo(vmhostId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    vmhostListQueueWithHttpInfo(vmhostId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostListQueue");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
        '/vmhost/{vmhostId}/queue', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /queue
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    vmhostListQueue(vmhostId) {
      return this.vmhostListQueueWithHttpInfo(vmhostId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/VmhostServices>} and HTTP response
     */
    vmhostListServicesWithHttpInfo(vmhostId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostListServices");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = [VmhostServices];

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/VmhostServices>}
     */
    vmhostListServices(vmhostId) {
      return this.vmhostListServicesWithHttpInfo(vmhostId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag
     * @param {String} vmhostId ID of vmhost
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    vmhostPatchTagWithHttpInfo(vmhostId, body) {
      let postBody = body;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostPatchTag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling vmhostPatchTag");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
        '/vmhost/{vmhostId}/tag', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag
     * @param {String} vmhostId ID of vmhost
     * @param {Object} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    vmhostPatchTag(vmhostId, body) {
      return this.vmhostPatchTagWithHttpInfo(vmhostId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostPostAccessrights} vmhostPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    vmhostPostAccessrightsWithHttpInfo(vmhostId, vmhostPostAccessrights) {
      let postBody = vmhostPostAccessrights;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostPostAccessrights");
      }

      // verify the required parameter 'vmhostPostAccessrights' is set
      if (vmhostPostAccessrights === undefined || vmhostPostAccessrights === null) {
        throw new Error("Missing the required parameter 'vmhostPostAccessrights' when calling vmhostPostAccessrights");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
        '/vmhost/{vmhostId}/accessrights', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostPostAccessrights} vmhostPostAccessrights 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    vmhostPostAccessrights(vmhostId, vmhostPostAccessrights) {
      return this.vmhostPostAccessrightsWithHttpInfo(vmhostId, vmhostPostAccessrights)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single vmhost
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostShowWithHttpInfo(vmhostId) {
      let postBody = null;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostShow");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Returns a single vmhost
     * @param {String} vmhostId ID of vmhost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostShow(vmhostId) {
      return this.vmhostShowWithHttpInfo(vmhostId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified vmhost
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostUpdate} vmhostUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Vmhost} and HTTP response
     */
    vmhostUpdateWithHttpInfo(vmhostId, vmhostUpdate) {
      let postBody = vmhostUpdate;

      // verify the required parameter 'vmhostId' is set
      if (vmhostId === undefined || vmhostId === null) {
        throw new Error("Missing the required parameter 'vmhostId' when calling vmhostUpdate");
      }

      // verify the required parameter 'vmhostUpdate' is set
      if (vmhostUpdate === undefined || vmhostUpdate === null) {
        throw new Error("Missing the required parameter 'vmhostUpdate' when calling vmhostUpdate");
      }


      let pathParams = {
        'vmhostId': vmhostId
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
      let returnType = Vmhost;

      return this.apiClient.callApi(
        '/vmhost/{vmhostId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Returns modified vmhost
     * @param {String} vmhostId ID of vmhost
     * @param {module:model/VmhostUpdate} vmhostUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Vmhost}
     */
    vmhostUpdate(vmhostId, vmhostUpdate) {
      return this.vmhostUpdateWithHttpInfo(vmhostId, vmhostUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}