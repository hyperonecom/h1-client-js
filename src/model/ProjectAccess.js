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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ProjectAccess = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProjectAccess model module.
   * @module model/ProjectAccess
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ProjectAccess</code>.
   * @alias module:model/ProjectAccess
   * @class
   * @param path {String} 
   * @param method {module:model/ProjectAccess.MethodEnum} 
   */
  var exports = function(path, method) {
    var _this = this;

    _this['path'] = path;
    _this['method'] = method;
  };

  /**
   * Constructs a <code>ProjectAccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectAccess} obj Optional instance to populate.
   * @return {module:model/ProjectAccess} The populated <code>ProjectAccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {module:model/ProjectAccess.MethodEnum} method
   */
  exports.prototype['method'] = undefined;


  /**
   * Allowed values for the <code>method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MethodEnum = {
    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",
    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",
    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",
    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH",
    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE"  };


  return exports;
}));


