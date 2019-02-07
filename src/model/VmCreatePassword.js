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
 * The VmCreatePassword model module.
 * @module model/VmCreatePassword
 * @version 0.0.2
 */
class VmCreatePassword {
    /**
     * Constructs a new <code>VmCreatePassword</code>.
     * @alias module:model/VmCreatePassword
     */
    constructor() { 
        
        VmCreatePassword.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VmCreatePassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VmCreatePassword} obj Optional instance to populate.
     * @return {module:model/VmCreatePassword} The populated <code>VmCreatePassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VmCreatePassword();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VmCreatePassword.TypeEnum} type
 */
VmCreatePassword.prototype['type'] = undefined;

/**
 * @member {String} value
 */
VmCreatePassword.prototype['value'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
VmCreatePassword['TypeEnum'] = {

    /**
     * value: "plain"
     * @const
     */
    "plain": "plain",

    /**
     * value: "unix"
     * @const
     */
    "unix": "unix"
};



export default VmCreatePassword;
