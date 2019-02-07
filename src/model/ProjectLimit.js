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
import ProjectLimitDisk from './ProjectLimitDisk';
import ProjectLimitDomain from './ProjectLimitDomain';
import ProjectLimitIso from './ProjectLimitIso';
import ProjectLimitVm from './ProjectLimitVm';

/**
 * The ProjectLimit model module.
 * @module model/ProjectLimit
 * @version 0.0.2
 */
class ProjectLimit {
    /**
     * Constructs a new <code>ProjectLimit</code>.
     * @alias module:model/ProjectLimit
     */
    constructor() { 
        
        ProjectLimit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectLimit} obj Optional instance to populate.
     * @return {module:model/ProjectLimit} The populated <code>ProjectLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectLimit();

            if (data.hasOwnProperty('vm')) {
                obj['vm'] = ProjectLimitVm.constructFromObject(data['vm']);
            }
            if (data.hasOwnProperty('disk')) {
                obj['disk'] = ProjectLimitDisk.constructFromObject(data['disk']);
            }
            if (data.hasOwnProperty('iso')) {
                obj['iso'] = ProjectLimitIso.constructFromObject(data['iso']);
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ProjectLimitIso.constructFromObject(data['network']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ProjectLimitIso.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ProjectLimitIso.constructFromObject(data['ip']);
            }
            if (data.hasOwnProperty('firewall')) {
                obj['firewall'] = ProjectLimitIso.constructFromObject(data['firewall']);
            }
            if (data.hasOwnProperty('netgw')) {
                obj['netgw'] = ProjectLimitIso.constructFromObject(data['netgw']);
            }
            if (data.hasOwnProperty('vault')) {
                obj['vault'] = ProjectLimitDisk.constructFromObject(data['vault']);
            }
            if (data.hasOwnProperty('snapshot')) {
                obj['snapshot'] = ProjectLimitIso.constructFromObject(data['snapshot']);
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ProjectLimitDomain.constructFromObject(data['domain']);
            }
            if (data.hasOwnProperty('logArchive')) {
                obj['logArchive'] = ProjectLimitIso.constructFromObject(data['logArchive']);
            }
            if (data.hasOwnProperty('reservation')) {
                obj['reservation'] = ProjectLimitIso.constructFromObject(data['reservation']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ProjectLimitVm} vm
 */
ProjectLimit.prototype['vm'] = undefined;

/**
 * @member {module:model/ProjectLimitDisk} disk
 */
ProjectLimit.prototype['disk'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} iso
 */
ProjectLimit.prototype['iso'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} network
 */
ProjectLimit.prototype['network'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} image
 */
ProjectLimit.prototype['image'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} ip
 */
ProjectLimit.prototype['ip'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} firewall
 */
ProjectLimit.prototype['firewall'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} netgw
 */
ProjectLimit.prototype['netgw'] = undefined;

/**
 * @member {module:model/ProjectLimitDisk} vault
 */
ProjectLimit.prototype['vault'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} snapshot
 */
ProjectLimit.prototype['snapshot'] = undefined;

/**
 * @member {module:model/ProjectLimitDomain} domain
 */
ProjectLimit.prototype['domain'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} logArchive
 */
ProjectLimit.prototype['logArchive'] = undefined;

/**
 * @member {module:model/ProjectLimitIso} reservation
 */
ProjectLimit.prototype['reservation'] = undefined;






export default ProjectLimit;
