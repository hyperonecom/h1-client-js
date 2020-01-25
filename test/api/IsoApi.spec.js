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
    instance = new HyperoneClient.IsoApi();
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

  describe('IsoApi', function() {
    describe('isoActionTransfer', function() {
      it('should call isoActionTransfer successfully', function(done) {
        //uncomment below and update the code to test isoActionTransfer
        //instance.isoActionTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoCreate', function() {
      it('should call isoCreate successfully', function(done) {
        //uncomment below and update the code to test isoCreate
        //instance.isoCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoDelete', function() {
      it('should call isoDelete successfully', function(done) {
        //uncomment below and update the code to test isoDelete
        //instance.isoDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoDeleteAccessrightsIdentity', function() {
      it('should call isoDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test isoDeleteAccessrightsIdentity
        //instance.isoDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoDeleteTagKey', function() {
      it('should call isoDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test isoDeleteTagKey
        //instance.isoDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoGetServicesServiceId', function() {
      it('should call isoGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test isoGetServicesServiceId
        //instance.isoGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoGetTag', function() {
      it('should call isoGetTag successfully', function(done) {
        //uncomment below and update the code to test isoGetTag
        //instance.isoGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoList', function() {
      it('should call isoList successfully', function(done) {
        //uncomment below and update the code to test isoList
        //instance.isoList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoListAccessrights', function() {
      it('should call isoListAccessrights successfully', function(done) {
        //uncomment below and update the code to test isoListAccessrights
        //instance.isoListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoListQueue', function() {
      it('should call isoListQueue successfully', function(done) {
        //uncomment below and update the code to test isoListQueue
        //instance.isoListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoListServices', function() {
      it('should call isoListServices successfully', function(done) {
        //uncomment below and update the code to test isoListServices
        //instance.isoListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoPatchTag', function() {
      it('should call isoPatchTag successfully', function(done) {
        //uncomment below and update the code to test isoPatchTag
        //instance.isoPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoPostAccessrights', function() {
      it('should call isoPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test isoPostAccessrights
        //instance.isoPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoPutTag', function() {
      it('should call isoPutTag successfully', function(done) {
        //uncomment below and update the code to test isoPutTag
        //instance.isoPutTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoShow', function() {
      it('should call isoShow successfully', function(done) {
        //uncomment below and update the code to test isoShow
        //instance.isoShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isoUpdate', function() {
      it('should call isoUpdate successfully', function(done) {
        //uncomment below and update the code to test isoUpdate
        //instance.isoUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
