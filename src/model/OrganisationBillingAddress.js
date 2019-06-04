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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.OrganisationBillingAddress = factory(root.HyperOneApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrganisationBillingAddress model module.
   * @module model/OrganisationBillingAddress
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>OrganisationBillingAddress</code>.
   * @alias module:model/OrganisationBillingAddress
   * @class
   * @param street {String} 
   * @param zipcode {String} 
   * @param city {String} 
   * @param country {String} 
   */
  var exports = function(street, zipcode, city, country) {
    var _this = this;

    _this['street'] = street;
    _this['zipcode'] = zipcode;
    _this['city'] = city;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>OrganisationBillingAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganisationBillingAddress} obj Optional instance to populate.
   * @return {module:model/OrganisationBillingAddress} The populated <code>OrganisationBillingAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


