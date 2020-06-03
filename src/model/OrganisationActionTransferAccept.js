/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
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
    root.HyperoneClient.OrganisationActionTransferAccept = factory(root.HyperoneClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrganisationActionTransferAccept model module.
   * @module model/OrganisationActionTransferAccept
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>OrganisationActionTransferAccept</code>.
   * @alias module:model/OrganisationActionTransferAccept
   * @class
   * @param payment {String} 
   * @param project {String} 
   */
  var exports = function(payment, project) {
    var _this = this;

    _this['payment'] = payment;
    _this['project'] = project;
  };

  /**
   * Constructs a <code>OrganisationActionTransferAccept</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganisationActionTransferAccept} obj Optional instance to populate.
   * @return {module:model/OrganisationActionTransferAccept} The populated <code>OrganisationActionTransferAccept</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('payment')) {
        obj['payment'] = ApiClient.convertToType(data['payment'], 'String');
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} payment
   */
  exports.prototype['payment'] = undefined;
  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;



  return exports;
}));


