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
 * The VaultPostAccessrights model module.
 * @module model/VaultPostAccessrights
 * @version 0.0.2
 */
class VaultPostAccessrights {
    /**
     * Constructs a new <code>VaultPostAccessrights</code>.
     * @alias module:model/VaultPostAccessrights
     */
    constructor() { 
        
        VaultPostAccessrights.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultPostAccessrights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultPostAccessrights} obj Optional instance to populate.
     * @return {module:model/VaultPostAccessrights} The populated <code>VaultPostAccessrights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultPostAccessrights();

            if (data.hasOwnProperty('identity')) {
                obj['identity'] = ApiClient.convertToType(data['identity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} identity
 */
VaultPostAccessrights.prototype['identity'] = undefined;






export default VaultPostAccessrights;

