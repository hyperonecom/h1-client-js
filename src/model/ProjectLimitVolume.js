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
 * The ProjectLimitVolume model module.
 * @module model/ProjectLimitVolume
 * @version 0.0.3
 */
class ProjectLimitVolume {
    /**
     * Constructs a new <code>ProjectLimitVolume</code>.
     * @alias module:model/ProjectLimitVolume
     * @param count {Number} 
     * @param size {Number} 
     */
    constructor(count, size) { 
        
        ProjectLimitVolume.initialize(this, count, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count, size) { 
        obj['count'] = count;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>ProjectLimitVolume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectLimitVolume} obj Optional instance to populate.
     * @return {module:model/ProjectLimitVolume} The populated <code>ProjectLimitVolume</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectLimitVolume();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 * @default 10
 */
ProjectLimitVolume.prototype['count'] = 10;

/**
 * @member {Number} size
 * @default 2048
 */
ProjectLimitVolume.prototype['size'] = 2048;






export default ProjectLimitVolume;

