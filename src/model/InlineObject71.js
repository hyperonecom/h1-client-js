/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
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
    root.HyperOneApi.InlineObject71 = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineObject71 model module.
   * @module model/InlineObject71
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineObject71</code>.
   * @alias module:model/InlineObject71
   * @class
   * @param iso {String} 
   */
  var exports = function(iso) {
    var _this = this;

    _this['iso'] = iso;
  };

  /**
   * Constructs a <code>InlineObject71</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject71} obj Optional instance to populate.
   * @return {module:model/InlineObject71} The populated <code>InlineObject71</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('iso')) {
        obj['iso'] = ApiClient.convertToType(data['iso'], 'String');
      }
      if (data.hasOwnProperty('vmhost')) {
        obj['vmhost'] = ApiClient.convertToType(data['vmhost'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} iso
   */
  exports.prototype['iso'] = undefined;
  /**
   * @member {String} vmhost
   */
  exports.prototype['vmhost'] = undefined;



  return exports;
}));


