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
 * The ZonePostRecordsetRecord model module.
 * @module model/ZonePostRecordsetRecord
 * @version 0.0.3
 */
class ZonePostRecordsetRecord {
    /**
     * Constructs a new <code>ZonePostRecordsetRecord</code>.
     * @alias module:model/ZonePostRecordsetRecord
     * @param content {String} Template string: - {{REQUEST_IP}} is replaced by the requester ip address.
     */
    constructor(content) { 
        
        ZonePostRecordsetRecord.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>ZonePostRecordsetRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ZonePostRecordsetRecord} obj Optional instance to populate.
     * @return {module:model/ZonePostRecordsetRecord} The populated <code>ZonePostRecordsetRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ZonePostRecordsetRecord();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
ZonePostRecordsetRecord.prototype['enabled'] = undefined;

/**
 * Template string: - {{REQUEST_IP}} is replaced by the requester ip address.
 * @member {String} content
 */
ZonePostRecordsetRecord.prototype['content'] = undefined;






export default ZonePostRecordsetRecord;

