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
    define(['ApiClient', 'model/NetgwActionAttachPrivate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetgwActionAttachPrivate'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.NetgwActionAttach = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.NetgwActionAttachPrivate);
  }
}(this, function(ApiClient, NetgwActionAttachPrivate) {
  'use strict';



  /**
   * The NetgwActionAttach model module.
   * @module model/NetgwActionAttach
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>NetgwActionAttach</code>.
   * @alias module:model/NetgwActionAttach
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NetgwActionAttach</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetgwActionAttach} obj Optional instance to populate.
   * @return {module:model/NetgwActionAttach} The populated <code>NetgwActionAttach</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('private')) {
        obj['private'] = NetgwActionAttachPrivate.constructFromObject(data['private']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NetgwActionAttachPrivate} private
   */
  exports.prototype['private'] = undefined;



  return exports;
}));


