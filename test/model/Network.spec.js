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
    instance = new HyperOneApi.Network();
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

  describe('Network', function() {
    it('should create an instance of Network', function() {
      // uncomment below and update the code to test Network
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be.a(HyperOneApi.Network);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property flavour (base name: "flavour")', function() {
      // uncomment below and update the code to test the property flavour
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property accessRights (base name: "accessRights")', function() {
      // uncomment below and update the code to test the property accessRights
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property processing (base name: "processing")', function() {
      // uncomment below and update the code to test the property processing
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property broadcast (base name: "broadcast")', function() {
      // uncomment below and update the code to test the property broadcast
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property gateway (base name: "gateway")', function() {
      // uncomment below and update the code to test the property gateway
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property dns (base name: "dns")', function() {
      // uncomment below and update the code to test the property dns
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

    it('should have the property netgw (base name: "netgw")', function() {
      // uncomment below and update the code to test the property netgw
      //var instane = new HyperOneApi.Network();
      //expect(instance).to.be();
    });

  });

}));
