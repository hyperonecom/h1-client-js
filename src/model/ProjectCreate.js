/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProjectCreateAccessRights'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectCreateAccessRights'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.ProjectCreate = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ProjectCreateAccessRights);
  }
}(this, function(ApiClient, ProjectCreateAccessRights) {
  'use strict';



  /**
   * The ProjectCreate model module.
   * @module model/ProjectCreate
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ProjectCreate</code>.
   * @alias module:model/ProjectCreate
   * @class
   * @param name {String} 
   * @param organisation {String} 
   */
  var exports = function(name, organisation) {
    var _this = this;

    _this['name'] = name;
    _this['organisation'] = organisation;
  };

  /**
   * Constructs a <code>ProjectCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectCreate} obj Optional instance to populate.
   * @return {module:model/ProjectCreate} The populated <code>ProjectCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('accessRights')) {
        obj['accessRights'] = ApiClient.convertToType(data['accessRights'], [ProjectCreateAccessRights]);
      }
      if (data.hasOwnProperty('organisation')) {
        obj['organisation'] = ApiClient.convertToType(data['organisation'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/ProjectCreateAccessRights>} accessRights
   */
  exports.prototype['accessRights'] = undefined;
  /**
   * @member {String} organisation
   */
  exports.prototype['organisation'] = undefined;
  /**
   * @member {Object} tag
   */
  exports.prototype['tag'] = undefined;



  return exports;
}));


