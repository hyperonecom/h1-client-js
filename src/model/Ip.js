/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Event from './Event';
import IpAssociated from './IpAssociated';
import ProjectServices from './ProjectServices';

/**
 * The Ip model module.
 * @module model/Ip
 * @version 0.0.2
 */
class Ip {
    /**
     * Constructs a new <code>Ip</code>.
     * @alias module:model/Ip
     */
    constructor() { 
        
        Ip.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Ip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ip} obj Optional instance to populate.
     * @return {module:model/Ip} The populated <code>Ip</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ip();

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
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('ptrRecord')) {
                obj['ptrRecord'] = ApiClient.convertToType(data['ptrRecord'], 'String');
            }
            if (data.hasOwnProperty('persistent')) {
                obj['persistent'] = ApiClient.convertToType(data['persistent'], 'Boolean');
            }
            if (data.hasOwnProperty('associated')) {
                obj['associated'] = IpAssociated.constructFromObject(data['associated']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Ip.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
Ip.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ProjectServices>} services
 */
Ip.prototype['services'] = undefined;

/**
 * @member {String} flavour
 */
Ip.prototype['flavour'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Ip.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Ip.prototype['modifiedBy'] = undefined;

/**
 * @member {String} createdBy
 */
Ip.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Ip.prototype['createdOn'] = undefined;

/**
 * @member {Array.<String>} accessRights
 */
Ip.prototype['accessRights'] = undefined;

/**
 * @member {Boolean} processing
 */
Ip.prototype['processing'] = undefined;

/**
 * @member {Boolean} created
 */
Ip.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/Event>} queue
 */
Ip.prototype['queue'] = undefined;

/**
 * @member {module:model/Ip.StateEnum} state
 */
Ip.prototype['state'] = undefined;

/**
 * @member {Object} tag
 */
Ip.prototype['tag'] = undefined;

/**
 * @member {String} project
 */
Ip.prototype['project'] = undefined;

/**
 * @member {String} address
 */
Ip.prototype['address'] = undefined;

/**
 * @member {String} network
 */
Ip.prototype['network'] = undefined;

/**
 * @member {String} ptrRecord
 */
Ip.prototype['ptrRecord'] = undefined;

/**
 * @member {Boolean} persistent
 */
Ip.prototype['persistent'] = undefined;

/**
 * @member {module:model/IpAssociated} associated
 */
Ip.prototype['associated'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Ip['StateEnum'] = {

    /**
     * value: "Associated"
     * @const
     */
    "Associated": "Associated",

    /**
     * value: "Allocated"
     * @const
     */
    "Allocated": "Allocated",

    /**
     * value: "Unallocated"
     * @const
     */
    "Unallocated": "Unallocated"
};



export default Ip;
