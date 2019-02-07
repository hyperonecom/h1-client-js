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
 * The VmDelete model module.
 * @module model/VmDelete
 * @version 0.0.2
 */
class VmDelete {
    /**
     * Constructs a new <code>VmDelete</code>.
     * @alias module:model/VmDelete
     */
    constructor() { 
        
        VmDelete.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VmDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VmDelete} obj Optional instance to populate.
     * @return {module:model/VmDelete} The populated <code>VmDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VmDelete();

            if (data.hasOwnProperty('removeDisks')) {
                obj['removeDisks'] = ApiClient.convertToType(data['removeDisks'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} removeDisks
 */
VmDelete.prototype['removeDisks'] = undefined;






export default VmDelete;
