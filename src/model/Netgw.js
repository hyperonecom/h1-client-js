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
import ProjectServices from './ProjectServices';

/**
 * The Netgw model module.
 * @module model/Netgw
 * @version 0.0.2
 */
class Netgw {
    /**
     * Constructs a new <code>Netgw</code>.
     * @alias module:model/Netgw
     */
    constructor() { 
        
        Netgw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Netgw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Netgw} obj Optional instance to populate.
     * @return {module:model/Netgw} The populated <code>Netgw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Netgw();

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
            if (data.hasOwnProperty('primaryIP')) {
                obj['primaryIP'] = ApiClient.convertToType(data['primaryIP'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Netgw.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
Netgw.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ProjectServices>} services
 */
Netgw.prototype['services'] = undefined;

/**
 * @member {String} flavour
 */
Netgw.prototype['flavour'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Netgw.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Netgw.prototype['modifiedBy'] = undefined;

/**
 * @member {String} createdBy
 */
Netgw.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Netgw.prototype['createdOn'] = undefined;

/**
 * @member {Boolean} processing
 */
Netgw.prototype['processing'] = undefined;

/**
 * @member {Boolean} created
 */
Netgw.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/Event>} queue
 */
Netgw.prototype['queue'] = undefined;

/**
 * @member {module:model/Netgw.StateEnum} state
 */
Netgw.prototype['state'] = undefined;

/**
 * @member {Object} tag
 */
Netgw.prototype['tag'] = undefined;

/**
 * @member {String} project
 */
Netgw.prototype['project'] = undefined;

/**
 * @member {String} primaryIP
 */
Netgw.prototype['primaryIP'] = undefined;

/**
 * @member {String} network
 */
Netgw.prototype['network'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Netgw['StateEnum'] = {

    /**
     * value: "Attached"
     * @const
     */
    "Attached": "Attached",

    /**
     * value: "Detached"
     * @const
     */
    "Detached": "Detached",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};



export default Netgw;
