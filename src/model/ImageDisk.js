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
 * The ImageDisk model module.
 * @module model/ImageDisk
 * @version 0.0.2
 */
class ImageDisk {
    /**
     * Constructs a new <code>ImageDisk</code>.
     * @alias module:model/ImageDisk
     */
    constructor() { 
        
        ImageDisk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageDisk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageDisk} obj Optional instance to populate.
     * @return {module:model/ImageDisk} The populated <code>ImageDisk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageDisk();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
ImageDisk.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
ImageDisk.prototype['name'] = undefined;






export default ImageDisk;

