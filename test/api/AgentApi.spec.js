/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperOneApi);
  }
}(this, function(expect, HyperOneApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperOneApi.AgentApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AgentApi', function() {
    describe('agentCreate', function() {
      it('should call agentCreate successfully', function(done) {
        //uncomment below and update the code to test agentCreate
        //instance.agentCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentDelete', function() {
      it('should call agentDelete successfully', function(done) {
        //uncomment below and update the code to test agentDelete
        //instance.agentDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentDeleteAccessrightsIdentity', function() {
      it('should call agentDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test agentDeleteAccessrightsIdentity
        //instance.agentDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentDeleteCredentialcertificateId', function() {
      it('should call agentDeleteCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test agentDeleteCredentialcertificateId
        //instance.agentDeleteCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentDeleteTagKey', function() {
      it('should call agentDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test agentDeleteTagKey
        //instance.agentDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentGetCredentialcertificateId', function() {
      it('should call agentGetCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test agentGetCredentialcertificateId
        //instance.agentGetCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentGetServicesServiceId', function() {
      it('should call agentGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test agentGetServicesServiceId
        //instance.agentGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentGetTag', function() {
      it('should call agentGetTag successfully', function(done) {
        //uncomment below and update the code to test agentGetTag
        //instance.agentGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentList', function() {
      it('should call agentList successfully', function(done) {
        //uncomment below and update the code to test agentList
        //instance.agentList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentListAccessrights', function() {
      it('should call agentListAccessrights successfully', function(done) {
        //uncomment below and update the code to test agentListAccessrights
        //instance.agentListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentListCredentialcertificate', function() {
      it('should call agentListCredentialcertificate successfully', function(done) {
        //uncomment below and update the code to test agentListCredentialcertificate
        //instance.agentListCredentialcertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentListEnabledServices', function() {
      it('should call agentListEnabledServices successfully', function(done) {
        //uncomment below and update the code to test agentListEnabledServices
        //instance.agentListEnabledServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentListQueue', function() {
      it('should call agentListQueue successfully', function(done) {
        //uncomment below and update the code to test agentListQueue
        //instance.agentListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentListServices', function() {
      it('should call agentListServices successfully', function(done) {
        //uncomment below and update the code to test agentListServices
        //instance.agentListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentPatchCredentialcertificateId', function() {
      it('should call agentPatchCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test agentPatchCredentialcertificateId
        //instance.agentPatchCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentPatchTag', function() {
      it('should call agentPatchTag successfully', function(done) {
        //uncomment below and update the code to test agentPatchTag
        //instance.agentPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentPostAccessrights', function() {
      it('should call agentPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test agentPostAccessrights
        //instance.agentPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentPostCredentialcertificate', function() {
      it('should call agentPostCredentialcertificate successfully', function(done) {
        //uncomment below and update the code to test agentPostCredentialcertificate
        //instance.agentPostCredentialcertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentPutEnabledServices', function() {
      it('should call agentPutEnabledServices successfully', function(done) {
        //uncomment below and update the code to test agentPutEnabledServices
        //instance.agentPutEnabledServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentShow', function() {
      it('should call agentShow successfully', function(done) {
        //uncomment below and update the code to test agentShow
        //instance.agentShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('agentUpdate', function() {
      it('should call agentUpdate successfully', function(done) {
        //uncomment below and update the code to test agentUpdate
        //instance.agentUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
