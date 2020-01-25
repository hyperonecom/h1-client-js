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
    root.HyperoneClient.WebsiteActionUpdateDomain = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The WebsiteActionUpdateDomain model module.
   * @module model/WebsiteActionUpdateDomain
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>WebsiteActionUpdateDomain</code>.
   * @alias module:model/WebsiteActionUpdateDomain
   * @class
   * @param domain {Array.<String>} 
   */
  var exports = function(domain) {
    var _this = this;

    _this['domain'] = domain;
  };

  /**
   * Constructs a <code>WebsiteActionUpdateDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebsiteActionUpdateDomain} obj Optional instance to populate.
   * @return {module:model/WebsiteActionUpdateDomain} The populated <code>WebsiteActionUpdateDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} domain
   */
  exports.prototype['domain'] = undefined;



  return exports;
}));


