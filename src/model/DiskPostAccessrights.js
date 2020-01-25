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

/**
 * The DiskPostAccessrights model module.
 * @module model/DiskPostAccessrights
 * @version 0.0.3
 */
class DiskPostAccessrights {
    /**
     * Constructs a new <code>DiskPostAccessrights</code>.
     * @alias module:model/DiskPostAccessrights
     */
    constructor() { 
        
        DiskPostAccessrights.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiskPostAccessrights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiskPostAccessrights} obj Optional instance to populate.
     * @return {module:model/DiskPostAccessrights} The populated <code>DiskPostAccessrights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiskPostAccessrights();

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
DiskPostAccessrights.prototype['identity'] = undefined;






export default DiskPostAccessrights;

