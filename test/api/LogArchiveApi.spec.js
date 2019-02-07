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
    instance = new HyperOneApi.LogArchiveApi();
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

  describe('LogArchiveApi', function() {
    describe('logArchiveActionTransfer', function() {
      it('should call logArchiveActionTransfer successfully', function(done) {
        //uncomment below and update the code to test logArchiveActionTransfer
        //instance.logArchiveActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveCreate', function() {
      it('should call logArchiveCreate successfully', function(done) {
        //uncomment below and update the code to test logArchiveCreate
        //instance.logArchiveCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveDelete', function() {
      it('should call logArchiveDelete successfully', function(done) {
        //uncomment below and update the code to test logArchiveDelete
        //instance.logArchiveDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveDeleteAccessrightsIdentity', function() {
      it('should call logArchiveDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test logArchiveDeleteAccessrightsIdentity
        //instance.logArchiveDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveDeleteCredentialcertificateId', function() {
      it('should call logArchiveDeleteCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test logArchiveDeleteCredentialcertificateId
        //instance.logArchiveDeleteCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveDeleteCredentialpasswordId', function() {
      it('should call logArchiveDeleteCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test logArchiveDeleteCredentialpasswordId
        //instance.logArchiveDeleteCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveDeleteTagKey', function() {
      it('should call logArchiveDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test logArchiveDeleteTagKey
        //instance.logArchiveDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveGetCredentialcertificateId', function() {
      it('should call logArchiveGetCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test logArchiveGetCredentialcertificateId
        //instance.logArchiveGetCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveGetCredentialpasswordId', function() {
      it('should call logArchiveGetCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test logArchiveGetCredentialpasswordId
        //instance.logArchiveGetCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveGetServicesServiceId', function() {
      it('should call logArchiveGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test logArchiveGetServicesServiceId
        //instance.logArchiveGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveGetTag', function() {
      it('should call logArchiveGetTag successfully', function(done) {
        //uncomment below and update the code to test logArchiveGetTag
        //instance.logArchiveGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveList', function() {
      it('should call logArchiveList successfully', function(done) {
        //uncomment below and update the code to test logArchiveList
        //instance.logArchiveList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveListAccessrights', function() {
      it('should call logArchiveListAccessrights successfully', function(done) {
        //uncomment below and update the code to test logArchiveListAccessrights
        //instance.logArchiveListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveListCredentialcertificate', function() {
      it('should call logArchiveListCredentialcertificate successfully', function(done) {
        //uncomment below and update the code to test logArchiveListCredentialcertificate
        //instance.logArchiveListCredentialcertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveListCredentialpassword', function() {
      it('should call logArchiveListCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test logArchiveListCredentialpassword
        //instance.logArchiveListCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveListQueue', function() {
      it('should call logArchiveListQueue successfully', function(done) {
        //uncomment below and update the code to test logArchiveListQueue
        //instance.logArchiveListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveListServices', function() {
      it('should call logArchiveListServices successfully', function(done) {
        //uncomment below and update the code to test logArchiveListServices
        //instance.logArchiveListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchivePatchCredentialcertificateId', function() {
      it('should call logArchivePatchCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test logArchivePatchCredentialcertificateId
        //instance.logArchivePatchCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchivePatchCredentialpasswordId', function() {
      it('should call logArchivePatchCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test logArchivePatchCredentialpasswordId
        //instance.logArchivePatchCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchivePatchTag', function() {
      it('should call logArchivePatchTag successfully', function(done) {
        //uncomment below and update the code to test logArchivePatchTag
        //instance.logArchivePatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchivePostAccessrights', function() {
      it('should call logArchivePostAccessrights successfully', function(done) {
        //uncomment below and update the code to test logArchivePostAccessrights
        //instance.logArchivePostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchivePostCredentialcertificate', function() {
      it('should call logArchivePostCredentialcertificate successfully', function(done) {
        //uncomment below and update the code to test logArchivePostCredentialcertificate
        //instance.logArchivePostCredentialcertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchivePostCredentialpassword', function() {
      it('should call logArchivePostCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test logArchivePostCredentialpassword
        //instance.logArchivePostCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveShow', function() {
      it('should call logArchiveShow successfully', function(done) {
        //uncomment below and update the code to test logArchiveShow
        //instance.logArchiveShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logArchiveUpdate', function() {
      it('should call logArchiveUpdate successfully', function(done) {
        //uncomment below and update the code to test logArchiveUpdate
        //instance.logArchiveUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
