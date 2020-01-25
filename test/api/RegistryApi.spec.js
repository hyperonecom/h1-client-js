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
    instance = new HyperoneClient.RegistryApi();
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

  describe('RegistryApi', function() {
    describe('registryActionStart', function() {
      it('should call registryActionStart successfully', function(done) {
        //uncomment below and update the code to test registryActionStart
        //instance.registryActionStart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryActionStop', function() {
      it('should call registryActionStop successfully', function(done) {
        //uncomment below and update the code to test registryActionStop
        //instance.registryActionStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryActionTransfer', function() {
      it('should call registryActionTransfer successfully', function(done) {
        //uncomment below and update the code to test registryActionTransfer
        //instance.registryActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryActionUpdateDomain', function() {
      it('should call registryActionUpdateDomain successfully', function(done) {
        //uncomment below and update the code to test registryActionUpdateDomain
        //instance.registryActionUpdateDomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryCreate', function() {
      it('should call registryCreate successfully', function(done) {
        //uncomment below and update the code to test registryCreate
        //instance.registryCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryDelete', function() {
      it('should call registryDelete successfully', function(done) {
        //uncomment below and update the code to test registryDelete
        //instance.registryDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryDeleteAccessrightsIdentity', function() {
      it('should call registryDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test registryDeleteAccessrightsIdentity
        //instance.registryDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryDeleteCredentialId', function() {
      it('should call registryDeleteCredentialId successfully', function(done) {
        //uncomment below and update the code to test registryDeleteCredentialId
        //instance.registryDeleteCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryDeleteCredentialpasswordId', function() {
      it('should call registryDeleteCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test registryDeleteCredentialpasswordId
        //instance.registryDeleteCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryDeleteRepositoryRepositoryIdtagTagId', function() {
      it('should call registryDeleteRepositoryRepositoryIdtagTagId successfully', function(done) {
        //uncomment below and update the code to test registryDeleteRepositoryRepositoryIdtagTagId
        //instance.registryDeleteRepositoryRepositoryIdtagTagId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryDeleteTagKey', function() {
      it('should call registryDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test registryDeleteTagKey
        //instance.registryDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryGetCredentialId', function() {
      it('should call registryGetCredentialId successfully', function(done) {
        //uncomment below and update the code to test registryGetCredentialId
        //instance.registryGetCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryGetCredentialpasswordId', function() {
      it('should call registryGetCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test registryGetCredentialpasswordId
        //instance.registryGetCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryGetRepositoryRepositoryId', function() {
      it('should call registryGetRepositoryRepositoryId successfully', function(done) {
        //uncomment below and update the code to test registryGetRepositoryRepositoryId
        //instance.registryGetRepositoryRepositoryId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryGetRepositoryRepositoryIdtagTagId', function() {
      it('should call registryGetRepositoryRepositoryIdtagTagId successfully', function(done) {
        //uncomment below and update the code to test registryGetRepositoryRepositoryIdtagTagId
        //instance.registryGetRepositoryRepositoryIdtagTagId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryGetServicesServiceId', function() {
      it('should call registryGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test registryGetServicesServiceId
        //instance.registryGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryGetTag', function() {
      it('should call registryGetTag successfully', function(done) {
        //uncomment below and update the code to test registryGetTag
        //instance.registryGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryList', function() {
      it('should call registryList successfully', function(done) {
        //uncomment below and update the code to test registryList
        //instance.registryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListAccessrights', function() {
      it('should call registryListAccessrights successfully', function(done) {
        //uncomment below and update the code to test registryListAccessrights
        //instance.registryListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListCredential', function() {
      it('should call registryListCredential successfully', function(done) {
        //uncomment below and update the code to test registryListCredential
        //instance.registryListCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListCredentialpassword', function() {
      it('should call registryListCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test registryListCredentialpassword
        //instance.registryListCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListQueue', function() {
      it('should call registryListQueue successfully', function(done) {
        //uncomment below and update the code to test registryListQueue
        //instance.registryListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListRepository', function() {
      it('should call registryListRepository successfully', function(done) {
        //uncomment below and update the code to test registryListRepository
        //instance.registryListRepository(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListRepositoryRepositoryIdtag', function() {
      it('should call registryListRepositoryRepositoryIdtag successfully', function(done) {
        //uncomment below and update the code to test registryListRepositoryRepositoryIdtag
        //instance.registryListRepositoryRepositoryIdtag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryListServices', function() {
      it('should call registryListServices successfully', function(done) {
        //uncomment below and update the code to test registryListServices
        //instance.registryListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPatchCredentialId', function() {
      it('should call registryPatchCredentialId successfully', function(done) {
        //uncomment below and update the code to test registryPatchCredentialId
        //instance.registryPatchCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPatchCredentialpasswordId', function() {
      it('should call registryPatchCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test registryPatchCredentialpasswordId
        //instance.registryPatchCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPatchTag', function() {
      it('should call registryPatchTag successfully', function(done) {
        //uncomment below and update the code to test registryPatchTag
        //instance.registryPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPostAccessrights', function() {
      it('should call registryPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test registryPostAccessrights
        //instance.registryPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPostCredential', function() {
      it('should call registryPostCredential successfully', function(done) {
        //uncomment below and update the code to test registryPostCredential
        //instance.registryPostCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPostCredentialpassword', function() {
      it('should call registryPostCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test registryPostCredentialpassword
        //instance.registryPostCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryPutTag', function() {
      it('should call registryPutTag successfully', function(done) {
        //uncomment below and update the code to test registryPutTag
        //instance.registryPutTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryShow', function() {
      it('should call registryShow successfully', function(done) {
        //uncomment below and update the code to test registryShow
        //instance.registryShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registryUpdate', function() {
      it('should call registryUpdate successfully', function(done) {
        //uncomment below and update the code to test registryUpdate
        //instance.registryUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));