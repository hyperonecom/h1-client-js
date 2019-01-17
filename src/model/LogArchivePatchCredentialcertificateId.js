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
    root.HyperOneApi.LogArchivePatchCredentialcertificateId = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The LogArchivePatchCredentialcertificateId model module.
   * @module model/LogArchivePatchCredentialcertificateId
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LogArchivePatchCredentialcertificateId</code>.
   * @alias module:model/LogArchivePatchCredentialcertificateId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>LogArchivePatchCredentialcertificateId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogArchivePatchCredentialcertificateId} obj Optional instance to populate.
   * @return {module:model/LogArchivePatchCredentialcertificateId} The populated <code>LogArchivePatchCredentialcertificateId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


