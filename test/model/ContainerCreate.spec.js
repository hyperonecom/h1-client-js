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
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperOneApi);
  }
}(this, function(expect, HyperOneApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperOneApi.ContainerCreate();
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

  describe('ContainerCreate', function() {
    it('should create an instance of ContainerCreate', function() {
      // uncomment below and update the code to test ContainerCreate
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be.a(HyperOneApi.ContainerCreate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property registry (base name: "registry")', function() {
      // uncomment below and update the code to test the property registry
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property expose (base name: "expose")', function() {
      // uncomment below and update the code to test the property expose
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property env (base name: "env")', function() {
      // uncomment below and update the code to test the property env
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property command (base name: "command")', function() {
      // uncomment below and update the code to test the property command
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new HyperOneApi.ContainerCreate();
      //expect(instance).to.be();
    });

  });

}));
