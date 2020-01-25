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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperoneClient);
  }
}(this, function(expect, HyperoneClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperoneClient.JournalApi();
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

  describe('JournalApi', function() {
    describe('journalActionTransfer', function() {
      it('should call journalActionTransfer successfully', function(done) {
        //uncomment below and update the code to test journalActionTransfer
        //instance.journalActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalActionUpdateRetention', function() {
      it('should call journalActionUpdateRetention successfully', function(done) {
        //uncomment below and update the code to test journalActionUpdateRetention
        //instance.journalActionUpdateRetention(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalCreate', function() {
      it('should call journalCreate successfully', function(done) {
        //uncomment below and update the code to test journalCreate
        //instance.journalCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalDelete', function() {
      it('should call journalDelete successfully', function(done) {
        //uncomment below and update the code to test journalDelete
        //instance.journalDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalDeleteAccessrightsIdentity', function() {
      it('should call journalDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test journalDeleteAccessrightsIdentity
        //instance.journalDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalDeleteCredentialId', function() {
      it('should call journalDeleteCredentialId successfully', function(done) {
        //uncomment below and update the code to test journalDeleteCredentialId
        //instance.journalDeleteCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalDeleteCredentialpasswordId', function() {
      it('should call journalDeleteCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test journalDeleteCredentialpasswordId
        //instance.journalDeleteCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalDeleteTagKey', function() {
      it('should call journalDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test journalDeleteTagKey
        //instance.journalDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalGetCredentialId', function() {
      it('should call journalGetCredentialId successfully', function(done) {
        //uncomment below and update the code to test journalGetCredentialId
        //instance.journalGetCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalGetCredentialpasswordId', function() {
      it('should call journalGetCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test journalGetCredentialpasswordId
        //instance.journalGetCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalGetLog', function() {
      it('should call journalGetLog successfully', function(done) {
        //uncomment below and update the code to test journalGetLog
        //instance.journalGetLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalGetServicesServiceId', function() {
      it('should call journalGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test journalGetServicesServiceId
        //instance.journalGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalGetTag', function() {
      it('should call journalGetTag successfully', function(done) {
        //uncomment below and update the code to test journalGetTag
        //instance.journalGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalList', function() {
      it('should call journalList successfully', function(done) {
        //uncomment below and update the code to test journalList
        //instance.journalList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalListAccessrights', function() {
      it('should call journalListAccessrights successfully', function(done) {
        //uncomment below and update the code to test journalListAccessrights
        //instance.journalListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalListCredential', function() {
      it('should call journalListCredential successfully', function(done) {
        //uncomment below and update the code to test journalListCredential
        //instance.journalListCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalListCredentialpassword', function() {
      it('should call journalListCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test journalListCredentialpassword
        //instance.journalListCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalListQueue', function() {
      it('should call journalListQueue successfully', function(done) {
        //uncomment below and update the code to test journalListQueue
        //instance.journalListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalListServices', function() {
      it('should call journalListServices successfully', function(done) {
        //uncomment below and update the code to test journalListServices
        //instance.journalListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPatchCredentialId', function() {
      it('should call journalPatchCredentialId successfully', function(done) {
        //uncomment below and update the code to test journalPatchCredentialId
        //instance.journalPatchCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPatchCredentialpasswordId', function() {
      it('should call journalPatchCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test journalPatchCredentialpasswordId
        //instance.journalPatchCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPatchTag', function() {
      it('should call journalPatchTag successfully', function(done) {
        //uncomment below and update the code to test journalPatchTag
        //instance.journalPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPostAccessrights', function() {
      it('should call journalPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test journalPostAccessrights
        //instance.journalPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPostCredential', function() {
      it('should call journalPostCredential successfully', function(done) {
        //uncomment below and update the code to test journalPostCredential
        //instance.journalPostCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPostCredentialpassword', function() {
      it('should call journalPostCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test journalPostCredentialpassword
        //instance.journalPostCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalPutTag', function() {
      it('should call journalPutTag successfully', function(done) {
        //uncomment below and update the code to test journalPutTag
        //instance.journalPutTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalShow', function() {
      it('should call journalShow successfully', function(done) {
        //uncomment below and update the code to test journalShow
        //instance.journalShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('journalUpdate', function() {
      it('should call journalUpdate successfully', function(done) {
        //uncomment below and update the code to test journalUpdate
        //instance.journalUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));