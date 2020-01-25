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
 * The ProjectLimitRegistry model module.
 * @module model/ProjectLimitRegistry
 * @version 0.0.3
 */
class ProjectLimitRegistry {
    /**
     * Constructs a new <code>ProjectLimitRegistry</code>.
     * @alias module:model/ProjectLimitRegistry
     * @param count {Number} 
     */
    constructor(count) { 
        
        ProjectLimitRegistry.initialize(this, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count) { 
        obj['count'] = count;
    }

    /**
     * Constructs a <code>ProjectLimitRegistry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectLimitRegistry} obj Optional instance to populate.
     * @return {module:model/ProjectLimitRegistry} The populated <code>ProjectLimitRegistry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectLimitRegistry();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 * @default 5
 */
ProjectLimitRegistry.prototype['count'] = 5;






export default ProjectLimitRegistry;

