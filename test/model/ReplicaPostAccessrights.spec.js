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
    instance = new HyperOneApi.ReplicaPostAccessrights();
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

  describe('ReplicaPostAccessrights', function() {
    it('should create an instance of ReplicaPostAccessrights', function() {
      // uncomment below and update the code to test ReplicaPostAccessrights
      //var instane = new HyperOneApi.ReplicaPostAccessrights();
      //expect(instance).to.be.a(HyperOneApi.ReplicaPostAccessrights);
    });

    it('should have the property identity (base name: "identity")', function() {
      // uncomment below and update the code to test the property identity
      //var instane = new HyperOneApi.ReplicaPostAccessrights();
      //expect(instance).to.be();
    });

  });

}));
