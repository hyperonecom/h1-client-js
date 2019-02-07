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
 * The VaultServices model module.
 * @module model/VaultServices
 * @version 0.0.2
 */
class VaultServices {
    /**
     * Constructs a new <code>VaultServices</code>.
     * @alias module:model/VaultServices
     */
    constructor() { 
        
        VaultServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultServices} obj Optional instance to populate.
     * @return {module:model/VaultServices} The populated <code>VaultServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultServices();

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
VaultServices.prototype['type'] = undefined;

/**
 * @member {String} name
 */
VaultServices.prototype['name'] = undefined;

/**
 * @member {Boolean} oneTime
 */
VaultServices.prototype['oneTime'] = undefined;

/**
 * @member {String} billing
 */
VaultServices.prototype['billing'] = undefined;

/**
 * @member {Object} data
 */
VaultServices.prototype['data'] = undefined;

/**
 * @member {String} sourceService
 */
VaultServices.prototype['sourceService'] = undefined;

/**
 * @member {Number} quantity
 */
VaultServices.prototype['quantity'] = undefined;






export default VaultServices;

