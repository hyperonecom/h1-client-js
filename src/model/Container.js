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
    define(['ApiClient', 'model/ContainerExpose', 'model/ContainerProcess', 'model/ContainerVolumes', 'model/Event', 'model/ProjectServices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContainerExpose'), require('./ContainerProcess'), require('./ContainerVolumes'), require('./Event'), require('./ProjectServices'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.Container = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ContainerExpose, root.HyperOneApi.ContainerProcess, root.HyperOneApi.ContainerVolumes, root.HyperOneApi.Event, root.HyperOneApi.ProjectServices);
  }
}(this, function(ApiClient, ContainerExpose, ContainerProcess, ContainerVolumes, Event, ProjectServices) {
  'use strict';



  /**
   * The Container model module.
   * @module model/Container
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Container</code>.
   * @alias module:model/Container
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Container} obj Optional instance to populate.
   * @return {module:model/Container} The populated <code>Container</code> instance.
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
        obj['services'] = ApiClient.convertToType(data['services'], [ProjectServices]);
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
        obj['accessRights'] = ApiClient.convertToType(data['accessRights'], ['String']);
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
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
      if (data.hasOwnProperty('volumes')) {
        obj['volumes'] = ApiClient.convertToType(data['volumes'], [ContainerVolumes]);
      }
      if (data.hasOwnProperty('expose')) {
        obj['expose'] = ApiClient.convertToType(data['expose'], [ContainerExpose]);
      }
      if (data.hasOwnProperty('env')) {
        obj['env'] = ApiClient.convertToType(data['env'], ['String']);
      }
      if (data.hasOwnProperty('fqdn')) {
        obj['fqdn'] = ApiClient.convertToType(data['fqdn'], 'String');
      }
      if (data.hasOwnProperty('process')) {
        obj['process'] = ContainerProcess.constructFromObject(data['process']);
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
   * @member {Array.<module:model/ProjectServices>} services
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
   * @member {Array.<String>} accessRights
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
   * @member {module:model/Container.StateEnum} state
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
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {String} command
   */
  exports.prototype['command'] = undefined;
  /**
   * @member {Array.<module:model/ContainerVolumes>} volumes
   */
  exports.prototype['volumes'] = undefined;
  /**
   * @member {Array.<module:model/ContainerExpose>} expose
   */
  exports.prototype['expose'] = undefined;
  /**
   * @member {Array.<String>} env
   */
  exports.prototype['env'] = undefined;
  /**
   * @member {String} fqdn
   */
  exports.prototype['fqdn'] = undefined;
  /**
   * @member {module:model/ContainerProcess} process
   */
  exports.prototype['process'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",
    /**
     * value: "Off"
     * @const
     */
    "Off": "Off",
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"  };


  return exports;
}));


