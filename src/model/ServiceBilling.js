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
import ServiceBillingPrice from './ServiceBillingPrice';
import ServiceBillingReservations from './ServiceBillingReservations';

/**
 * The ServiceBilling model module.
 * @module model/ServiceBilling
 * @version 0.0.3
 */
class ServiceBilling {
    /**
     * Constructs a new <code>ServiceBilling</code>.
     * @alias module:model/ServiceBilling
     */
    constructor() { 
        
        ServiceBilling.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceBilling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceBilling} obj Optional instance to populate.
     * @return {module:model/ServiceBilling} The populated <code>ServiceBilling</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceBilling();

            if (data.hasOwnProperty('price')) {
                obj['price'] = ServiceBillingPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('oneTime')) {
                obj['oneTime'] = ApiClient.convertToType(data['oneTime'], 'Boolean');
            }
            if (data.hasOwnProperty('reservations')) {
                obj['reservations'] = ServiceBillingReservations.constructFromObject(data['reservations']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ServiceBillingPrice} price
 */
ServiceBilling.prototype['price'] = undefined;

/**
 * @member {String} period
 */
ServiceBilling.prototype['period'] = undefined;

/**
 * @member {Number} quantity
 */
ServiceBilling.prototype['quantity'] = undefined;

/**
 * @member {Boolean} oneTime
 */
ServiceBilling.prototype['oneTime'] = undefined;

/**
 * @member {module:model/ServiceBillingReservations} reservations
 */
ServiceBilling.prototype['reservations'] = undefined;






export default ServiceBilling;

