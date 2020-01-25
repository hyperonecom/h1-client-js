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
    instance = new HyperoneClient.ContainerApi();
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

  describe('ContainerApi', function() {
    describe('containerActionRestart', function() {
      it('should call containerActionRestart successfully', function(done) {
        //uncomment below and update the code to test containerActionRestart
        //instance.containerActionRestart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerActionStart', function() {
      it('should call containerActionStart successfully', function(done) {
        //uncomment below and update the code to test containerActionStart
        //instance.containerActionStart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerActionStop', function() {
      it('should call containerActionStop successfully', function(done) {
        //uncomment below and update the code to test containerActionStop
        //instance.containerActionStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerCreate', function() {
      it('should call containerCreate successfully', function(done) {
        //uncomment below and update the code to test containerCreate
        //instance.containerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerDelete', function() {
      it('should call containerDelete successfully', function(done) {
        //uncomment below and update the code to test containerDelete
        //instance.containerDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerDeleteAccessrightsIdentity', function() {
      it('should call containerDeleteAccessrightsIdentity successfully', function(done) {
        //uncomment below and update the code to test containerDeleteAccessrightsIdentity
        //instance.containerDeleteAccessrightsIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerDeleteTagKey', function() {
      it('should call containerDeleteTagKey successfully', function(done) {
        //uncomment below and update the code to test containerDeleteTagKey
        //instance.containerDeleteTagKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerGetServicesServiceId', function() {
      it('should call containerGetServicesServiceId successfully', function(done) {
        //uncomment below and update the code to test containerGetServicesServiceId
        //instance.containerGetServicesServiceId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerGetTag', function() {
      it('should call containerGetTag successfully', function(done) {
        //uncomment below and update the code to test containerGetTag
        //instance.containerGetTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerList', function() {
      it('should call containerList successfully', function(done) {
        //uncomment below and update the code to test containerList
        //instance.containerList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerListAccessrights', function() {
      it('should call containerListAccessrights successfully', function(done) {
        //uncomment below and update the code to test containerListAccessrights
        //instance.containerListAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerListProcess', function() {
      it('should call containerListProcess successfully', function(done) {
        //uncomment below and update the code to test containerListProcess
        //instance.containerListProcess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerListQueue', function() {
      it('should call containerListQueue successfully', function(done) {
        //uncomment below and update the code to test containerListQueue
        //instance.containerListQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerListServices', function() {
      it('should call containerListServices successfully', function(done) {
        //uncomment below and update the code to test containerListServices
        //instance.containerListServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerPatchTag', function() {
      it('should call containerPatchTag successfully', function(done) {
        //uncomment below and update the code to test containerPatchTag
        //instance.containerPatchTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerPostAccessrights', function() {
      it('should call containerPostAccessrights successfully', function(done) {
        //uncomment below and update the code to test containerPostAccessrights
        //instance.containerPostAccessrights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerPutTag', function() {
      it('should call containerPutTag successfully', function(done) {
        //uncomment below and update the code to test containerPutTag
        //instance.containerPutTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerShow', function() {
      it('should call containerShow successfully', function(done) {
        //uncomment below and update the code to test containerShow
        //instance.containerShow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerUpdate', function() {
      it('should call containerUpdate successfully', function(done) {
        //uncomment below and update the code to test containerUpdate
        //instance.containerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
