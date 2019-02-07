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
import OrganisationUpdateBilling from './OrganisationUpdateBilling';

/**
 * The OrganisationUpdate model module.
 * @module model/OrganisationUpdate
 * @version 0.0.2
 */
class OrganisationUpdate {
    /**
     * Constructs a new <code>OrganisationUpdate</code>.
     * @alias module:model/OrganisationUpdate
     */
    constructor() { 
        
        OrganisationUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganisationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationUpdate} obj Optional instance to populate.
     * @return {module:model/OrganisationUpdate} The populated <code>OrganisationUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganisationUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('billing')) {
                obj['billing'] = OrganisationUpdateBilling.constructFromObject(data['billing']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
OrganisationUpdate.prototype['name'] = undefined;

/**
 * @member {module:model/OrganisationUpdateBilling} billing
 */
OrganisationUpdate.prototype['billing'] = undefined;






export default OrganisationUpdate;

