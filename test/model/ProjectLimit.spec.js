/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1
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
    instance = new HyperOneApi.ProjectLimit();
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

  describe('ProjectLimit', function() {
    it('should create an instance of ProjectLimit', function() {
      // uncomment below and update the code to test ProjectLimit
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be.a(HyperOneApi.ProjectLimit);
    });

    it('should have the property vm (base name: "vm")', function() {
      // uncomment below and update the code to test the property vm
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property disk (base name: "disk")', function() {
      // uncomment below and update the code to test the property disk
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property iso (base name: "iso")', function() {
      // uncomment below and update the code to test the property iso
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property firewall (base name: "firewall")', function() {
      // uncomment below and update the code to test the property firewall
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property netgw (base name: "netgw")', function() {
      // uncomment below and update the code to test the property netgw
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property vault (base name: "vault")', function() {
      // uncomment below and update the code to test the property vault
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property snapshot (base name: "snapshot")', function() {
      // uncomment below and update the code to test the property snapshot
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property logArchive (base name: "logArchive")', function() {
      // uncomment below and update the code to test the property logArchive
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

    it('should have the property reservation (base name: "reservation")', function() {
      // uncomment below and update the code to test the property reservation
      //var instance = new HyperOneApi.ProjectLimit();
      //expect(instance).to.be();
    });

  });

}));
