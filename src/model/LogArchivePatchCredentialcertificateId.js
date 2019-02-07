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
 * The LogArchivePatchCredentialcertificateId model module.
 * @module model/LogArchivePatchCredentialcertificateId
 * @version 0.0.2
 */
class LogArchivePatchCredentialcertificateId {
    /**
     * Constructs a new <code>LogArchivePatchCredentialcertificateId</code>.
     * @alias module:model/LogArchivePatchCredentialcertificateId
     */
    constructor() { 
        
        LogArchivePatchCredentialcertificateId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogArchivePatchCredentialcertificateId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogArchivePatchCredentialcertificateId} obj Optional instance to populate.
     * @return {module:model/LogArchivePatchCredentialcertificateId} The populated <code>LogArchivePatchCredentialcertificateId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogArchivePatchCredentialcertificateId();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
LogArchivePatchCredentialcertificateId.prototype['name'] = undefined;






export default LogArchivePatchCredentialcertificateId;

