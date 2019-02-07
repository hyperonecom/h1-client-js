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
 * The VmActionFlavour model module.
 * @module model/VmActionFlavour
 * @version 0.0.2
 */
class VmActionFlavour {
    /**
     * Constructs a new <code>VmActionFlavour</code>.
     * @alias module:model/VmActionFlavour
     * @param service {String} 
     */
    constructor(service) { 
        
        VmActionFlavour.initialize(this, service);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, service) { 
        obj['service'] = service;
    }

    /**
     * Constructs a <code>VmActionFlavour</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VmActionFlavour} obj Optional instance to populate.
     * @return {module:model/VmActionFlavour} The populated <code>VmActionFlavour</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VmActionFlavour();

            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service
 */
VmActionFlavour.prototype['service'] = undefined;






export default VmActionFlavour;

