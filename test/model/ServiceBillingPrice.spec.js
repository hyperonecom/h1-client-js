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
    instance = new HyperoneClient.ServiceBillingPrice();
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

  describe('ServiceBillingPrice', function() {
    it('should create an instance of ServiceBillingPrice', function() {
      // uncomment below and update the code to test ServiceBillingPrice
      //var instane = new HyperoneClient.ServiceBillingPrice();
      //expect(instance).to.be.a(HyperoneClient.ServiceBillingPrice);
    });

    it('should have the property PLN (base name: "PLN")', function() {
      // uncomment below and update the code to test the property PLN
      //var instane = new HyperoneClient.ServiceBillingPrice();
      //expect(instance).to.be();
    });

    it('should have the property EUR (base name: "EUR")', function() {
      // uncomment below and update the code to test the property EUR
      //var instane = new HyperoneClient.ServiceBillingPrice();
      //expect(instance).to.be();
    });

    it('should have the property USD (base name: "USD")', function() {
      // uncomment below and update the code to test the property USD
      //var instane = new HyperoneClient.ServiceBillingPrice();
      //expect(instance).to.be();
    });

    it('should have the property GBP (base name: "GBP")', function() {
      // uncomment below and update the code to test the property GBP
      //var instane = new HyperoneClient.ServiceBillingPrice();
      //expect(instance).to.be();
    });

  });

}));
