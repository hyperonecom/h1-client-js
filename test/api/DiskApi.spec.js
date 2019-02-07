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
    instance = new HyperOneApi.DiskApi();
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

  describe('DiskApi', function() {
    describe('diskActionResize', function() {
      it('should call diskActionResize successfully', function(done) {
        //uncomment below and update the code to test diskActionResize
        //instance.diskActionResize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskActionTransfer', function() {
      it('should call diskActionTransfer successfully', function(done) {
        //uncomment below and update the code to test diskActionTransfer
        //instance.diskActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskCreate', function() {
      it('should call diskCreate successfully', function(done) {
        //uncomment below and update the code to test diskCreate
        //instance.diskCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskDelete', function() {
      it('should call diskDelete successfully', function(done) {
        //uncomment below and update the code to test diskDelete
        //instance.diskDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskDeleteAccessrightsIdentity', function() {
      it('should call diskDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test diskDeleteAccessrightsIdentity
        //instance.diskDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskDeleteTagKey', function() {
      it('should call diskDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test diskDeleteTagKey
        //instance.diskDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskGetServicesServiceId', function() {
      it('should call diskGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test diskGetServicesServiceId
        //instance.diskGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskGetTag', function() {
      it('should call diskGetTag successfully', function(done) {
        //uncomment below and update the code to test diskGetTag
        //instance.diskGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskList', function() {
      it('should call diskList successfully', function(done) {
        //uncomment below and update the code to test diskList
        //instance.diskList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskListAccessrights', function() {
      it('should call diskListAccessrights successfully', function(done) {
        //uncomment below and update the code to test diskListAccessrights
        //instance.diskListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskListQueue', function() {
      it('should call diskListQueue successfully', function(done) {
        //uncomment below and update the code to test diskListQueue
        //instance.diskListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskListServices', function() {
      it('should call diskListServices successfully', function(done) {
        //uncomment below and update the code to test diskListServices
        //instance.diskListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskPatchTag', function() {
      it('should call diskPatchTag successfully', function(done) {
        //uncomment below and update the code to test diskPatchTag
        //instance.diskPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskPostAccessrights', function() {
      it('should call diskPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test diskPostAccessrights
        //instance.diskPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskShow', function() {
      it('should call diskShow successfully', function(done) {
        //uncomment below and update the code to test diskShow
        //instance.diskShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diskUpdate', function() {
      it('should call diskUpdate successfully', function(done) {
        //uncomment below and update the code to test diskUpdate
        //instance.diskUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
