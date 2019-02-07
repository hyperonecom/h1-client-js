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
 * The OrganisationCreateAccessRights model module.
 * @module model/OrganisationCreateAccessRights
 * @version 0.0.2
 */
class OrganisationCreateAccessRights {
    /**
     * Constructs a new <code>OrganisationCreateAccessRights</code>.
     * @alias module:model/OrganisationCreateAccessRights
     */
    constructor() { 
        
        OrganisationCreateAccessRights.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganisationCreateAccessRights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationCreateAccessRights} obj Optional instance to populate.
     * @return {module:model/OrganisationCreateAccessRights} The populated <code>OrganisationCreateAccessRights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganisationCreateAccessRights();

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
OrganisationCreateAccessRights.prototype['id'] = undefined;

/**
 * @member {String} role
 */
OrganisationCreateAccessRights.prototype['role'] = undefined;






export default OrganisationCreateAccessRights;
