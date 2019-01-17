/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
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
    instance = new HyperOneApi.VmCreate();
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

  describe('VmCreate', function() {
    it('should create an instance of VmCreate', function() {
      // uncomment below and update the code to test VmCreate
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be.a(HyperOneApi.VmCreate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property iso (base name: "iso")', function() {
      // uncomment below and update the code to test the property iso
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property sshKeys (base name: "sshKeys")', function() {
      // uncomment below and update the code to test the property sshKeys
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property userMetadata (base name: "userMetadata")', function() {
      // uncomment below and update the code to test the property userMetadata
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property disk (base name: "disk")', function() {
      // uncomment below and update the code to test the property disk
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property netadp (base name: "netadp")', function() {
      // uncomment below and update the code to test the property netadp
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property boot (base name: "boot")', function() {
      // uncomment below and update the code to test the property boot
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property cloud (base name: "cloud")', function() {
      // uncomment below and update the code to test the property cloud
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new HyperOneApi.VmCreate();
      //expect(instance).to.be();
    });

  });

}));
