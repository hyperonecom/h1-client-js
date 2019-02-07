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

/**
 * The VmServices model module.
 * @module model/VmServices
 * @version 0.0.2
 */
class VmServices {
    /**
     * Constructs a new <code>VmServices</code>.
     * @alias module:model/VmServices
     */
    constructor() { 
        
        VmServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VmServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VmServices} obj Optional instance to populate.
     * @return {module:model/VmServices} The populated <code>VmServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VmServices();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('oneTime')) {
                obj['oneTime'] = ApiClient.convertToType(data['oneTime'], 'Boolean');
            }
            if (data.hasOwnProperty('billing')) {
                obj['billing'] = ApiClient.convertToType(data['billing'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('sourceService')) {
                obj['sourceService'] = ApiClient.convertToType(data['sourceService'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
VmServices.prototype['type'] = undefined;

/**
 * @member {String} name
 */
VmServices.prototype['name'] = undefined;

/**
 * @member {Boolean} oneTime
 */
VmServices.prototype['oneTime'] = undefined;

/**
 * @member {String} billing
 */
VmServices.prototype['billing'] = undefined;

/**
 * @member {Object} data
 */
VmServices.prototype['data'] = undefined;

/**
 * @member {String} sourceService
 */
VmServices.prototype['sourceService'] = undefined;

/**
 * @member {Number} quantity
 */
VmServices.prototype['quantity'] = undefined;






export default VmServices;
