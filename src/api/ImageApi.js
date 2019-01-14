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
    define(['ApiClient', 'model/Event', 'model/Image', 'model/ImageServices', 'model/InlineObject23', 'model/InlineObject24', 'model/InlineObject25', 'model/InlineObject26'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/Image'), require('../model/ImageServices'), require('../model/InlineObject23'), require('../model/InlineObject24'), require('../model/InlineObject25'), require('../model/InlineObject26'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ImageApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.Image, root.HyperOneApi.ImageServices, root.HyperOneApi.InlineObject23, root.HyperOneApi.InlineObject24, root.HyperOneApi.InlineObject25, root.HyperOneApi.InlineObject26);
  }
}(this, function(ApiClient, Event, Image, ImageServices, InlineObject23, InlineObject24, InlineObject25, InlineObject26) {
  'use strict';

  /**
   * Image service.
   * @module api/ImageApi
   * @version 1
   */

  /**
   * Constructs a new ImageApi. 
   * @alias module:api/ImageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * /actions/transfer
     * Action transfer
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject25} opts.inlineObject25 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.actionImageTransferWithHttpInfo = function(imageId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject25'];

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling actionImageTransfer");
      }


      var pathParams = {
        'imageId': imageId
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/{imageId}/actions/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /actions/transfer
     * Action transfer
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject25} opts.inlineObject25 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.actionImageTransfer = function(imageId, opts) {
      return this.actionImageTransferWithHttpInfo(imageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject23} opts.inlineObject23 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.createImageWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject23'];


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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create
     * Create image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject23} opts.inlineObject23 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.createImage = function(opts) {
      return this.createImageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteImageWithHttpInfo = function(imageId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling deleteImage");
      }


      var pathParams = {
        'imageId': imageId
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
        '/image/{imageId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteImage = function(imageId) {
      return this.deleteImageWithHttpInfo(imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * List image
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Image>} and HTTP response
     */
    this.listImageWithHttpInfo = function(opts) {
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
      var returnType = [Image];

      return this.apiClient.callApi(
        '/image', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * List image
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Image>}
     */
    this.listImage = function(opts) {
      return this.listImageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/:identity
     * @param {String} imageId ID of image
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.operationImageDeleteaccessrightsIdentityWithHttpInfo = function(imageId, identity) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageDeleteaccessrightsIdentity");
      }

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling operationImageDeleteaccessrightsIdentity");
      }


      var pathParams = {
        'imageId': imageId,
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/{imageId}/accessrights/{identity}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/:identity
     * @param {String} imageId ID of image
     * @param {String} identity identity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.operationImageDeleteaccessrightsIdentity = function(imageId, identity) {
      return this.operationImageDeleteaccessrightsIdentityWithHttpInfo(imageId, identity)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/:key
     * @param {String} imageId ID of image
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.operationImageDeletetagKeyWithHttpInfo = function(imageId, key) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageDeletetagKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling operationImageDeletetagKey");
      }


      var pathParams = {
        'imageId': imageId,
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
        '/image/{imageId}/tag/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/:key
     * @param {String} imageId ID of image
     * @param {String} key key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.operationImageDeletetagKey = function(imageId, key) {
      return this.operationImageDeletetagKeyWithHttpInfo(imageId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/:serviceId
     * @param {String} imageId ID of image
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageServices} and HTTP response
     */
    this.operationImageGetservicesServiceIdWithHttpInfo = function(imageId, serviceId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageGetservicesServiceId");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling operationImageGetservicesServiceId");
      }


      var pathParams = {
        'imageId': imageId,
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
      var returnType = ImageServices;

      return this.apiClient.callApi(
        '/image/{imageId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/:serviceId
     * @param {String} imageId ID of image
     * @param {String} serviceId serviceId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageServices}
     */
    this.operationImageGetservicesServiceId = function(imageId, serviceId) {
      return this.operationImageGetservicesServiceIdWithHttpInfo(imageId, serviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.operationImageGettagWithHttpInfo = function(imageId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageGettag");
      }


      var pathParams = {
        'imageId': imageId
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
        '/image/{imageId}/tag/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.operationImageGettag = function(imageId) {
      return this.operationImageGettagWithHttpInfo(imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    this.operationImageListaccessrightsWithHttpInfo = function(imageId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageListaccessrights");
      }


      var pathParams = {
        'imageId': imageId
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
        '/image/{imageId}/accessrights/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    this.operationImageListaccessrights = function(imageId) {
      return this.operationImageListaccessrightsWithHttpInfo(imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /queue/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.operationImageListqueueWithHttpInfo = function(imageId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageListqueue");
      }


      var pathParams = {
        'imageId': imageId
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
        '/image/{imageId}/queue/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /queue/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.operationImageListqueue = function(imageId) {
      return this.operationImageListqueueWithHttpInfo(imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /services/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ImageServices>} and HTTP response
     */
    this.operationImageListservicesWithHttpInfo = function(imageId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImageListservices");
      }


      var pathParams = {
        'imageId': imageId
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
      var returnType = [ImageServices];

      return this.apiClient.callApi(
        '/image/{imageId}/services/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /services/
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ImageServices>}
     */
    this.operationImageListservices = function(imageId) {
      return this.operationImageListservicesWithHttpInfo(imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /tag/
     * @param {String} imageId ID of image
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    this.operationImagePatchtagWithHttpInfo = function(imageId, requestBody) {
      var postBody = requestBody;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImagePatchtag");
      }

      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling operationImagePatchtag");
      }


      var pathParams = {
        'imageId': imageId
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
        '/image/{imageId}/tag/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /tag/
     * @param {String} imageId ID of image
     * @param {Object.<String, {String: String}>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    this.operationImagePatchtag = function(imageId, requestBody) {
      return this.operationImagePatchtagWithHttpInfo(imageId, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * /accessrights/
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject26} opts.inlineObject26 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    this.operationImagePostaccessrightsWithHttpInfo = function(imageId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject26'];

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling operationImagePostaccessrights");
      }


      var pathParams = {
        'imageId': imageId
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
        '/image/{imageId}/accessrights/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * /accessrights/
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject26} opts.inlineObject26 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    this.operationImagePostaccessrights = function(imageId, opts) {
      return this.operationImagePostaccessrightsWithHttpInfo(imageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get
     * Returns a single image
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.showImageWithHttpInfo = function(imageId) {
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling showImage");
      }


      var pathParams = {
        'imageId': imageId
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/{imageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get
     * Returns a single image
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.showImage = function(imageId) {
      return this.showImageWithHttpInfo(imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Returns modified image
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject24} opts.inlineObject24 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.updateImageWithHttpInfo = function(imageId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject24'];

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling updateImage");
      }


      var pathParams = {
        'imageId': imageId
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/image/{imageId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Returns modified image
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject24} opts.inlineObject24 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.updateImage = function(imageId, opts) {
      return this.updateImageWithHttpInfo(imageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
