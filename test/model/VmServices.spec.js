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
    instance = new HyperOneApi.VmServices();
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

  describe('VmServices', function() {
    it('should create an instance of VmServices', function() {
      // uncomment below and update the code to test VmServices
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be.a(HyperOneApi.VmServices);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

    it('should have the property oneTime (base name: "oneTime")', function() {
      // uncomment below and update the code to test the property oneTime
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

    it('should have the property billing (base name: "billing")', function() {
      // uncomment below and update the code to test the property billing
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

    it('should have the property sourceService (base name: "sourceService")', function() {
      // uncomment below and update the code to test the property sourceService
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new HyperOneApi.VmServices();
      //expect(instance).to.be();
    });

  });

}));
