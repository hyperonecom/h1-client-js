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
    instance = new HyperoneClient.WebsiteApi();
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

  describe('WebsiteApi', function() {
    describe('websiteActionRestart', function() {
      it('should call websiteActionRestart successfully', function(done) {
        //uncomment below and update the code to test websiteActionRestart
        //instance.websiteActionRestart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteActionStart', function() {
      it('should call websiteActionStart successfully', function(done) {
        //uncomment below and update the code to test websiteActionStart
        //instance.websiteActionStart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteActionStop', function() {
      it('should call websiteActionStop successfully', function(done) {
        //uncomment below and update the code to test websiteActionStop
        //instance.websiteActionStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteActionTransfer', function() {
      it('should call websiteActionTransfer successfully', function(done) {
        //uncomment below and update the code to test websiteActionTransfer
        //instance.websiteActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteActionUpdateDomain', function() {
      it('should call websiteActionUpdateDomain successfully', function(done) {
        //uncomment below and update the code to test websiteActionUpdateDomain
        //instance.websiteActionUpdateDomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteCreate', function() {
      it('should call websiteCreate successfully', function(done) {
        //uncomment below and update the code to test websiteCreate
        //instance.websiteCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDelete', function() {
      it('should call websiteDelete successfully', function(done) {
        //uncomment below and update the code to test websiteDelete
        //instance.websiteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDeleteAccessrightsIdentity', function() {
      it('should call websiteDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test websiteDeleteAccessrightsIdentity
        //instance.websiteDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDeleteCredentialId', function() {
      it('should call websiteDeleteCredentialId successfully', function(done) {
        //uncomment below and update the code to test websiteDeleteCredentialId
        //instance.websiteDeleteCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDeleteCredentialcertificateId', function() {
      it('should call websiteDeleteCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test websiteDeleteCredentialcertificateId
        //instance.websiteDeleteCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDeleteCredentialpasswordId', function() {
      it('should call websiteDeleteCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test websiteDeleteCredentialpasswordId
        //instance.websiteDeleteCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDeleteSnapshotId', function() {
      it('should call websiteDeleteSnapshotId successfully', function(done) {
        //uncomment below and update the code to test websiteDeleteSnapshotId
        //instance.websiteDeleteSnapshotId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteDeleteTagKey', function() {
      it('should call websiteDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test websiteDeleteTagKey
        //instance.websiteDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetCredentialId', function() {
      it('should call websiteGetCredentialId successfully', function(done) {
        //uncomment below and update the code to test websiteGetCredentialId
        //instance.websiteGetCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetCredentialcertificateId', function() {
      it('should call websiteGetCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test websiteGetCredentialcertificateId
        //instance.websiteGetCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetCredentialpasswordId', function() {
      it('should call websiteGetCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test websiteGetCredentialpasswordId
        //instance.websiteGetCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetServicesServiceId', function() {
      it('should call websiteGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test websiteGetServicesServiceId
        //instance.websiteGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetSnapshotId', function() {
      it('should call websiteGetSnapshotId successfully', function(done) {
        //uncomment below and update the code to test websiteGetSnapshotId
        //instance.websiteGetSnapshotId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetSnapshotIddownload', function() {
      it('should call websiteGetSnapshotIddownload successfully', function(done) {
        //uncomment below and update the code to test websiteGetSnapshotIddownload
        //instance.websiteGetSnapshotIddownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteGetTag', function() {
      it('should call websiteGetTag successfully', function(done) {
        //uncomment below and update the code to test websiteGetTag
        //instance.websiteGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteList', function() {
      it('should call websiteList successfully', function(done) {
        //uncomment below and update the code to test websiteList
        //instance.websiteList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListAccessrights', function() {
      it('should call websiteListAccessrights successfully', function(done) {
        //uncomment below and update the code to test websiteListAccessrights
        //instance.websiteListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListCredential', function() {
      it('should call websiteListCredential successfully', function(done) {
        //uncomment below and update the code to test websiteListCredential
        //instance.websiteListCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListCredentialcertificate', function() {
      it('should call websiteListCredentialcertificate successfully', function(done) {
        //uncomment below and update the code to test websiteListCredentialcertificate
        //instance.websiteListCredentialcertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListCredentialpassword', function() {
      it('should call websiteListCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test websiteListCredentialpassword
        //instance.websiteListCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListQueue', function() {
      it('should call websiteListQueue successfully', function(done) {
        //uncomment below and update the code to test websiteListQueue
        //instance.websiteListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListServices', function() {
      it('should call websiteListServices successfully', function(done) {
        //uncomment below and update the code to test websiteListServices
        //instance.websiteListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteListSnapshot', function() {
      it('should call websiteListSnapshot successfully', function(done) {
        //uncomment below and update the code to test websiteListSnapshot
        //instance.websiteListSnapshot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePatchCredentialId', function() {
      it('should call websitePatchCredentialId successfully', function(done) {
        //uncomment below and update the code to test websitePatchCredentialId
        //instance.websitePatchCredentialId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePatchCredentialcertificateId', function() {
      it('should call websitePatchCredentialcertificateId successfully', function(done) {
        //uncomment below and update the code to test websitePatchCredentialcertificateId
        //instance.websitePatchCredentialcertificateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePatchCredentialpasswordId', function() {
      it('should call websitePatchCredentialpasswordId successfully', function(done) {
        //uncomment below and update the code to test websitePatchCredentialpasswordId
        //instance.websitePatchCredentialpasswordId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePatchTag', function() {
      it('should call websitePatchTag successfully', function(done) {
        //uncomment below and update the code to test websitePatchTag
        //instance.websitePatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePostAccessrights', function() {
      it('should call websitePostAccessrights successfully', function(done) {
        //uncomment below and update the code to test websitePostAccessrights
        //instance.websitePostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePostCredential', function() {
      it('should call websitePostCredential successfully', function(done) {
        //uncomment below and update the code to test websitePostCredential
        //instance.websitePostCredential(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePostCredentialcertificate', function() {
      it('should call websitePostCredentialcertificate successfully', function(done) {
        //uncomment below and update the code to test websitePostCredentialcertificate
        //instance.websitePostCredentialcertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePostCredentialpassword', function() {
      it('should call websitePostCredentialpassword successfully', function(done) {
        //uncomment below and update the code to test websitePostCredentialpassword
        //instance.websitePostCredentialpassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePostSnapshot', function() {
      it('should call websitePostSnapshot successfully', function(done) {
        //uncomment below and update the code to test websitePostSnapshot
        //instance.websitePostSnapshot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websitePutTag', function() {
      it('should call websitePutTag successfully', function(done) {
        //uncomment below and update the code to test websitePutTag
        //instance.websitePutTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteShow', function() {
      it('should call websiteShow successfully', function(done) {
        //uncomment below and update the code to test websiteShow
        //instance.websiteShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('websiteUpdate', function() {
      it('should call websiteUpdate successfully', function(done) {
        //uncomment below and update the code to test websiteUpdate
        //instance.websiteUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
