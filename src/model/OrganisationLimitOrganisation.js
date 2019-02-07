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
import ProjectLimitIso from './ProjectLimitIso';

/**
 * The OrganisationLimitOrganisation model module.
 * @module model/OrganisationLimitOrganisation
 * @version 0.0.2
 */
class OrganisationLimitOrganisation {
    /**
     * Constructs a new <code>OrganisationLimitOrganisation</code>.
     * @alias module:model/OrganisationLimitOrganisation
     */
    constructor() { 
        
        OrganisationLimitOrganisation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganisationLimitOrganisation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationLimitOrganisation} obj Optional instance to populate.
     * @return {module:model/OrganisationLimitOrganisation} The populated <code>OrganisationLimitOrganisation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganisationLimitOrganisation();

            if (data.hasOwnProperty('project')) {
                obj['project'] = ProjectLimitIso.constructFromObject(data['project']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProjectLimitIso} project
 */
OrganisationLimitOrganisation.prototype['project'] = undefined;






export default OrganisationLimitOrganisation;

