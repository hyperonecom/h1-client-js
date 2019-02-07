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
 * The VmSourceImage model module.
 * @module model/VmSourceImage
 * @version 0.0.2
 */
class VmSourceImage {
    /**
     * Constructs a new <code>VmSourceImage</code>.
     * @alias module:model/VmSourceImage
     */
    constructor() { 
        
        VmSourceImage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VmSourceImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VmSourceImage} obj Optional instance to populate.
     * @return {module:model/VmSourceImage} The populated <code>VmSourceImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VmSourceImage();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
VmSourceImage.prototype['name'] = undefined;

/**
 * @member {String} _id
 */
VmSourceImage.prototype['_id'] = undefined;






export default VmSourceImage;

