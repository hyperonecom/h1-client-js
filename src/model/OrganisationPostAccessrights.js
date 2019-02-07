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
 * The OrganisationPostAccessrights model module.
 * @module model/OrganisationPostAccessrights
 * @version 0.0.2
 */
class OrganisationPostAccessrights {
    /**
     * Constructs a new <code>OrganisationPostAccessrights</code>.
     * @alias module:model/OrganisationPostAccessrights
     */
    constructor() { 
        
        OrganisationPostAccessrights.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganisationPostAccessrights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationPostAccessrights} obj Optional instance to populate.
     * @return {module:model/OrganisationPostAccessrights} The populated <code>OrganisationPostAccessrights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganisationPostAccessrights();

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
OrganisationPostAccessrights.prototype['identity'] = undefined;






export default OrganisationPostAccessrights;

