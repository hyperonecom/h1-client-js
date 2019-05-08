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
    instance = new HyperOneApi.ProjectLimitDomain();
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

  describe('ProjectLimitDomain', function() {
    it('should create an instance of ProjectLimitDomain', function() {
      // uncomment below and update the code to test ProjectLimitDomain
      //var instance = new HyperOneApi.ProjectLimitDomain();
      //expect(instance).to.be.a(HyperOneApi.ProjectLimitDomain);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new HyperOneApi.ProjectLimitDomain();
      //expect(instance).to.be();
    });

    it('should have the property record (base name: "record")', function() {
      // uncomment below and update the code to test the property record
      //var instance = new HyperOneApi.ProjectLimitDomain();
      //expect(instance).to.be();
    });

  });

}));
