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
import InvoiceSellerAddress from './InvoiceSellerAddress';

/**
 * The ProformaSeller model module.
 * @module model/ProformaSeller
 * @version 0.0.3
 */
class ProformaSeller {
    /**
     * Constructs a new <code>ProformaSeller</code>.
     * @alias module:model/ProformaSeller
     * @param company {String} 
     * @param nip {String} 
     * @param iban {String} 
     */
    constructor(company, nip, iban) { 
        
        ProformaSeller.initialize(this, company, nip, iban);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, company, nip, iban) { 
        obj['company'] = company;
        obj['nip'] = nip;
        obj['iban'] = iban;
    }

    /**
     * Constructs a <code>ProformaSeller</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProformaSeller} obj Optional instance to populate.
     * @return {module:model/ProformaSeller} The populated <code>ProformaSeller</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProformaSeller();

            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = InvoiceSellerAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('nip')) {
                obj['nip'] = ApiClient.convertToType(data['nip'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} company
 */
ProformaSeller.prototype['company'] = undefined;

/**
 * @member {module:model/InvoiceSellerAddress} address
 */
ProformaSeller.prototype['address'] = undefined;

/**
 * @member {String} nip
 */
ProformaSeller.prototype['nip'] = undefined;

/**
 * @member {String} iban
 */
ProformaSeller.prototype['iban'] = undefined;






export default ProformaSeller;

