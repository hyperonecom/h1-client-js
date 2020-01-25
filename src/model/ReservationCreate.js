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
 * The ReservationCreate model module.
 * @module model/ReservationCreate
 * @version 0.0.3
 */
class ReservationCreate {
    /**
     * Constructs a new <code>ReservationCreate</code>.
     * @alias module:model/ReservationCreate
     * @param name {String} 
     * @param service {String} 
     */
    constructor(name, service) { 
        
        ReservationCreate.initialize(this, name, service);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, service) { 
        obj['name'] = name;
        obj['service'] = service;
    }

    /**
     * Constructs a <code>ReservationCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservationCreate} obj Optional instance to populate.
     * @return {module:model/ReservationCreate} The populated <code>ReservationCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReservationCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ReservationCreate.prototype['name'] = undefined;

/**
 * @member {String} service
 */
ReservationCreate.prototype['service'] = undefined;

/**
 * @member {Object.<String, String>} tag
 */
ReservationCreate.prototype['tag'] = undefined;






export default ReservationCreate;

