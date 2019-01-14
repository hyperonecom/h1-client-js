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
    root.HyperOneApi.OrganisationorganisationIdBillingAddress = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrganisationorganisationIdBillingAddress model module.
   * @module model/OrganisationorganisationIdBillingAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrganisationorganisationIdBillingAddress</code>.
   * @alias module:model/OrganisationorganisationIdBillingAddress
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OrganisationorganisationIdBillingAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganisationorganisationIdBillingAddress} obj Optional instance to populate.
   * @return {module:model/OrganisationorganisationIdBillingAddress} The populated <code>OrganisationorganisationIdBillingAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * @member {String} street
   */
  exports.prototype['street'] = undefined;



  return exports;
}));


