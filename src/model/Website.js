/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Event from './Event';
import ProjectServices from './ProjectServices';

/**
 * The Website model module.
 * @module model/Website
 * @version 0.0.3
 */
class Website {
    /**
     * Constructs a new <code>Website</code>.
     * @alias module:model/Website
     */
    constructor() { 
        
        Website.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Website</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Website} obj Optional instance to populate.
     * @return {module:model/Website} The populated <code>Website</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Website();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
                obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], ['String']);
            }
            if (data.hasOwnProperty('fqdn')) {
                obj['fqdn'] = ApiClient.convertToType(data['fqdn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Website.prototype['_id'] = undefined;

/**
 * @member {String} id
 */
Website.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Website.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ProjectServices>} services
 */
Website.prototype['services'] = undefined;

/**
 * @member {String} flavour
 */
Website.prototype['flavour'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Website.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Website.prototype['modifiedBy'] = undefined;

/**
 * @member {String} createdBy
 */
Website.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Website.prototype['createdOn'] = undefined;

/**
 * @member {Array.<String>} accessRights
 */
Website.prototype['accessRights'] = undefined;

/**
 * @member {Boolean} processing
 */
Website.prototype['processing'] = undefined;

/**
 * @member {Boolean} created
 */
Website.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/Event>} queue
 */
Website.prototype['queue'] = undefined;

/**
 * @member {module:model/Website.StateEnum} state
 */
Website.prototype['state'] = undefined;

/**
 * @member {Object.<String, String>} tag
 */
Website.prototype['tag'] = undefined;

/**
 * @member {String} project
 */
Website.prototype['project'] = undefined;

/**
 * @member {String} image
 */
Website.prototype['image'] = undefined;

/**
 * @member {Array.<String>} domain
 */
Website.prototype['domain'] = undefined;

/**
 * @member {String} fqdn
 */
Website.prototype['fqdn'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Website['StateEnum'] = {

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
    "Unknown": "Unknown"
};



export default Website;

