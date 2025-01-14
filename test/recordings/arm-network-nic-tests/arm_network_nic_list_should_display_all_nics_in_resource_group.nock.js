// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-nic\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n      \"etag\": \"W/\\\"53bce8da-60fa-47d8-9f22-fa2541d78b69\\\"\",\r\n      \"location\": \"westeurope\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"71fe8880-66c0-4381-b39f-0f56dca11cf4\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"default-ip-config\",\r\n            \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n            \"etag\": \"W/\\\"53bce8da-60fa-47d8-9f22-fa2541d78b69\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.0.0.22\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n              },\r\n              \"primary\": true,\r\n              \"privateIPAddressVersion\": \"IPv4\"\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {\r\n          \"dnsServers\": [],\r\n          \"appliedDnsServers\": [],\r\n          \"internalDnsNameLabel\": \"internal-dns-bar\"\r\n        },\r\n        \"macAddress\": \"00-0D-3A-22-44-65\",\r\n        \"enableAcceleratedNetworking\": false,\r\n        \"enableIPForwarding\": true\r\n      },\r\n      \"type\": \"Microsoft.Network/networkInterfaces\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1976',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8d7c8058-cb99-45d1-a6a5-50c4b6314b88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'beca9f1e-4c2a-4a45-a905-569db6155515',
  'x-ms-routing-request-id': 'EASTASIA:20170217T032617Z:beca9f1e-4c2a-4a45-a905-569db6155515',
  date: 'Fri, 17 Feb 2017 03:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-nic\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n      \"etag\": \"W/\\\"53bce8da-60fa-47d8-9f22-fa2541d78b69\\\"\",\r\n      \"location\": \"westeurope\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"71fe8880-66c0-4381-b39f-0f56dca11cf4\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"default-ip-config\",\r\n            \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n            \"etag\": \"W/\\\"53bce8da-60fa-47d8-9f22-fa2541d78b69\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.0.0.22\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n              },\r\n              \"primary\": true,\r\n              \"privateIPAddressVersion\": \"IPv4\"\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {\r\n          \"dnsServers\": [],\r\n          \"appliedDnsServers\": [],\r\n          \"internalDnsNameLabel\": \"internal-dns-bar\"\r\n        },\r\n        \"macAddress\": \"00-0D-3A-22-44-65\",\r\n        \"enableAcceleratedNetworking\": false,\r\n        \"enableIPForwarding\": true\r\n      },\r\n      \"type\": \"Microsoft.Network/networkInterfaces\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1976',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8d7c8058-cb99-45d1-a6a5-50c4b6314b88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'beca9f1e-4c2a-4a45-a905-569db6155515',
  'x-ms-routing-request-id': 'EASTASIA:20170217T032617Z:beca9f1e-4c2a-4a45-a905-569db6155515',
  date: 'Fri, 17 Feb 2017 03:26:17 GMT',
  connection: 'close' });
 return result; }]];