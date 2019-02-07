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
    instance = new HyperOneApi.ProjectApi();
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

  describe('ProjectApi', function() {
    describe('projectCreate', function() {
      it('should call projectCreate successfully', function(done) {
        //uncomment below and update the code to test projectCreate
        //instance.projectCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectDeleteAccessrightsIdentity', function() {
      it('should call projectDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test projectDeleteAccessrightsIdentity
        //instance.projectDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectDeleteTagKey', function() {
      it('should call projectDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test projectDeleteTagKey
        //instance.projectDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectGetServicesServiceId', function() {
      it('should call projectGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test projectGetServicesServiceId
        //instance.projectGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectGetTag', function() {
      it('should call projectGetTag successfully', function(done) {
        //uncomment below and update the code to test projectGetTag
        //instance.projectGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectList', function() {
      it('should call projectList successfully', function(done) {
        //uncomment below and update the code to test projectList
        //instance.projectList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectListAccessrights', function() {
      it('should call projectListAccessrights successfully', function(done) {
        //uncomment below and update the code to test projectListAccessrights
        //instance.projectListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectListQueue', function() {
      it('should call projectListQueue successfully', function(done) {
        //uncomment below and update the code to test projectListQueue
        //instance.projectListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectListServices', function() {
      it('should call projectListServices successfully', function(done) {
        //uncomment below and update the code to test projectListServices
        //instance.projectListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectPatchTag', function() {
      it('should call projectPatchTag successfully', function(done) {
        //uncomment below and update the code to test projectPatchTag
        //instance.projectPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectPostAccessrights', function() {
      it('should call projectPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test projectPostAccessrights
        //instance.projectPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectShow', function() {
      it('should call projectShow successfully', function(done) {
        //uncomment below and update the code to test projectShow
        //instance.projectShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectUpdate', function() {
      it('should call projectUpdate successfully', function(done) {
        //uncomment below and update the code to test projectUpdate
        //instance.projectUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));