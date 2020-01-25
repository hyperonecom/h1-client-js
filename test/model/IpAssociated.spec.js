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
    instance = new HyperoneClient.IpAssociated();
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

  describe('IpAssociated', function() {
    it('should create an instance of IpAssociated', function() {
      // uncomment below and update the code to test IpAssociated
      //var instane = new HyperoneClient.IpAssociated();
      //expect(instance).to.be.a(HyperoneClient.IpAssociated);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new HyperoneClient.IpAssociated();
      //expect(instance).to.be();
    });

    it('should have the property fip (base name: "fip")', function() {
      // uncomment below and update the code to test the property fip
      //var instane = new HyperoneClient.IpAssociated();
      //expect(instance).to.be();
    });

    it('should have the property netadp (base name: "netadp")', function() {
      // uncomment below and update the code to test the property netadp
      //var instane = new HyperoneClient.IpAssociated();
      //expect(instance).to.be();
    });

  });

}));
