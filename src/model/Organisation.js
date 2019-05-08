/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
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
    define(['ApiClient', 'model/Event', 'model/OrganisationBilling', 'model/OrganisationLimit', 'model/OrganisationTransfer', 'model/ProjectAccessRights', 'model/ProjectRoles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'), require('./OrganisationBilling'), require('./OrganisationLimit'), require('./OrganisationTransfer'), require('./ProjectAccessRights'), require('./ProjectRoles'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.Organisation = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Event, root.HyperOneApi.OrganisationBilling, root.HyperOneApi.OrganisationLimit, root.HyperOneApi.OrganisationTransfer, root.HyperOneApi.ProjectAccessRights, root.HyperOneApi.ProjectRoles);
  }
}(this, function(ApiClient, Event, OrganisationBilling, OrganisationLimit, OrganisationTransfer, ProjectAccessRights, ProjectRoles) {
  'use strict';



  /**
   * The Organisation model module.
   * @module model/Organisation
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Organisation</code>.
   * @alias module:model/Organisation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Organisation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Organisation} obj Optional instance to populate.
   * @return {module:model/Organisation} The populated <code>Organisation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], 'String');
      }
      if (data.hasOwnProperty('flavour')) {
        obj['flavour'] = ApiClient.convertToType(data['flavour'], 'String');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
      }
      if (data.hasOwnProperty('accessRights')) {
        obj['accessRights'] = ApiClient.convertToType(data['accessRights'], [ProjectAccessRights]);
      }
      if (data.hasOwnProperty('processing')) {
        obj['processing'] = ApiClient.convertToType(data['processing'], 'Boolean');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
      }
      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], [Event]);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], Object);
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
      if (data.hasOwnProperty('billing')) {
        obj['billing'] = OrganisationBilling.constructFromObject(data['billing']);
      }
      if (data.hasOwnProperty('verified')) {
        obj['verified'] = ApiClient.convertToType(data['verified'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = OrganisationLimit.constructFromObject(data['limit']);
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], [ProjectRoles]);
      }
      if (data.hasOwnProperty('transfer')) {
        obj['transfer'] = OrganisationTransfer.constructFromObject(data['transfer']);
      }
      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = ApiClient.convertToType(data['bankAccount'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} services
   */
  exports.prototype['services'] = undefined;
  /**
   * @member {String} flavour
   */
  exports.prototype['flavour'] = undefined;
  /**
   * @member {Date} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {String} modifiedBy
   * @default ''
   */
  exports.prototype['modifiedBy'] = '';
  /**
   * @member {String} createdBy
   * @default ''
   */
  exports.prototype['createdBy'] = '';
  /**
   * @member {Date} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * @member {Array.<module:model/ProjectAccessRights>} accessRights
   */
  exports.prototype['accessRights'] = undefined;
  /**
   * @member {Boolean} processing
   */
  exports.prototype['processing'] = undefined;
  /**
   * @member {Boolean} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Array.<module:model/Event>} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * @member {module:model/Organisation.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Object} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {module:model/OrganisationBilling} billing
   */
  exports.prototype['billing'] = undefined;
  /**
   * @member {Number} verified
   * @default 0
   */
  exports.prototype['verified'] = 0;
  /**
   * @member {module:model/OrganisationLimit} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Array.<module:model/ProjectRoles>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {module:model/OrganisationTransfer} transfer
   */
  exports.prototype['transfer'] = undefined;
  /**
   * @member {String} bankAccount
   */
  exports.prototype['bankAccount'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",
    /**
     * value: "Limited"
     * @const
     */
    "Limited": "Limited"  };


  return exports;
}));


