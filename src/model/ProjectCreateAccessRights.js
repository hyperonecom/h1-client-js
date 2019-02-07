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
 * The ProjectCreateAccessRights model module.
 * @module model/ProjectCreateAccessRights
 * @version 0.0.2
 */
class ProjectCreateAccessRights {
    /**
     * Constructs a new <code>ProjectCreateAccessRights</code>.
     * @alias module:model/ProjectCreateAccessRights
     * @param id {String} 
     * @param role {String} 
     */
    constructor(id, role) { 
        
        ProjectCreateAccessRights.initialize(this, id, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, role) { 
        obj['id'] = id;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>ProjectCreateAccessRights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectCreateAccessRights} obj Optional instance to populate.
     * @return {module:model/ProjectCreateAccessRights} The populated <code>ProjectCreateAccessRights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectCreateAccessRights();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ProjectCreateAccessRights.prototype['id'] = undefined;

/**
 * @member {String} role
 */
ProjectCreateAccessRights.prototype['role'] = undefined;






export default ProjectCreateAccessRights;
