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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.OrganisationBilling1 = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrganisationBilling1 model module.
   * @module model/OrganisationBilling1
   * @version 1
   */

  /**
   * Constructs a new <code>OrganisationBilling1</code>.
   * @alias module:model/OrganisationBilling1
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OrganisationBilling1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganisationBilling1} obj Optional instance to populate.
   * @return {module:model/OrganisationBilling1} The populated <code>OrganisationBilling1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('nip')) {
        obj['nip'] = ApiClient.convertToType(data['nip'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} nip
   */
  exports.prototype['nip'] = undefined;



  return exports;
}));


