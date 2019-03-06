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
    instance = new HyperOneApi.ImageApi();
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

  describe('ImageApi', function() {
    describe('imageActionTransfer', function() {
      it('should call imageActionTransfer successfully', function(done) {
        //uncomment below and update the code to test imageActionTransfer
        //instance.imageActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageCreate', function() {
      it('should call imageCreate successfully', function(done) {
        //uncomment below and update the code to test imageCreate
        //instance.imageCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageDelete', function() {
      it('should call imageDelete successfully', function(done) {
        //uncomment below and update the code to test imageDelete
        //instance.imageDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageDeleteAccessrightsIdentity', function() {
      it('should call imageDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test imageDeleteAccessrightsIdentity
        //instance.imageDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageDeleteTagKey', function() {
      it('should call imageDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test imageDeleteTagKey
        //instance.imageDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageGetServicesServiceId', function() {
      it('should call imageGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test imageGetServicesServiceId
        //instance.imageGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageGetTag', function() {
      it('should call imageGetTag successfully', function(done) {
        //uncomment below and update the code to test imageGetTag
        //instance.imageGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageList', function() {
      it('should call imageList successfully', function(done) {
        //uncomment below and update the code to test imageList
        //instance.imageList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageListAccessrights', function() {
      it('should call imageListAccessrights successfully', function(done) {
        //uncomment below and update the code to test imageListAccessrights
        //instance.imageListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageListQueue', function() {
      it('should call imageListQueue successfully', function(done) {
        //uncomment below and update the code to test imageListQueue
        //instance.imageListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageListServices', function() {
      it('should call imageListServices successfully', function(done) {
        //uncomment below and update the code to test imageListServices
        //instance.imageListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imagePatchTag', function() {
      it('should call imagePatchTag successfully', function(done) {
        //uncomment below and update the code to test imagePatchTag
        //instance.imagePatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imagePostAccessrights', function() {
      it('should call imagePostAccessrights successfully', function(done) {
        //uncomment below and update the code to test imagePostAccessrights
        //instance.imagePostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageShow', function() {
      it('should call imageShow successfully', function(done) {
        //uncomment below and update the code to test imageShow
        //instance.imageShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageUpdate', function() {
      it('should call imageUpdate successfully', function(done) {
        //uncomment below and update the code to test imageUpdate
        //instance.imageUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
