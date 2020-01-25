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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperoneClient) {
      root.HyperoneClient = {};
    }
    root.HyperoneClient.ProjectLimitDisk = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProjectLimitDisk model module.
   * @module model/ProjectLimitDisk
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>ProjectLimitDisk</code>.
   * @alias module:model/ProjectLimitDisk
   * @class
   * @param count {Number} 
   * @param size {Number} 
   */
  var exports = function(count, size) {
    var _this = this;

    _this['count'] = count;
    _this['size'] = size;
  };

  /**
   * Constructs a <code>ProjectLimitDisk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectLimitDisk} obj Optional instance to populate.
   * @return {module:model/ProjectLimitDisk} The populated <code>ProjectLimitDisk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   * @default 3
   */
  exports.prototype['count'] = 3;
  /**
   * @member {Number} size
   * @default 2048
   */
  exports.prototype['size'] = 2048;



  return exports;
}));


