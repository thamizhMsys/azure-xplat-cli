// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways?api-version=2015-06-15')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vpn-gateway\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n      \"etag\": \"W/\\\"3ba4a0fd-6bd0-486d-851d-63416fac3422\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n      \"location\": \"westeurope\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"54ba7543-35b8-4886-b9e6-e295af378ba5\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"ip-config\",\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n            \"etag\": \"W/\\\"3ba4a0fd-6bd0-486d-851d-63416fac3422\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.1.0.12\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"sku\": {\r\n          \"name\": \"Basic\",\r\n          \"tier\": \"Basic\",\r\n          \"capacity\": 2\r\n        },\r\n        \"gatewayType\": \"Vpn\",\r\n        \"vpnType\": \"RouteBased\",\r\n        \"enableBgp\": false,\r\n        \"vpnClientConfiguration\": {\r\n          \"vpnClientRootCertificates\": [],\r\n          \"vpnClientRevokedCertificates\": []\r\n        },\r\n        \"bgpSettings\": {\r\n          \"asn\": 65515,\r\n          \"bgpPeeringAddress\": \"10.1.0.14\",\r\n          \"peerWeight\": 0\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2145',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c39e7b46-27bd-41e8-82a3-5730da582f2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '20c044ad-d976-4d8e-85b4-c10ed9f4d8d5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160318T133716Z:20c044ad-d976-4d8e-85b4-c10ed9f4d8d5',
  date: 'Fri, 18 Mar 2016 13:37:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways?api-version=2015-06-15')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vpn-gateway\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n      \"etag\": \"W/\\\"3ba4a0fd-6bd0-486d-851d-63416fac3422\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n      \"location\": \"westeurope\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"54ba7543-35b8-4886-b9e6-e295af378ba5\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"ip-config\",\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n            \"etag\": \"W/\\\"3ba4a0fd-6bd0-486d-851d-63416fac3422\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.1.0.12\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"sku\": {\r\n          \"name\": \"Basic\",\r\n          \"tier\": \"Basic\",\r\n          \"capacity\": 2\r\n        },\r\n        \"gatewayType\": \"Vpn\",\r\n        \"vpnType\": \"RouteBased\",\r\n        \"enableBgp\": false,\r\n        \"vpnClientConfiguration\": {\r\n          \"vpnClientRootCertificates\": [],\r\n          \"vpnClientRevokedCertificates\": []\r\n        },\r\n        \"bgpSettings\": {\r\n          \"asn\": 65515,\r\n          \"bgpPeeringAddress\": \"10.1.0.14\",\r\n          \"peerWeight\": 0\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2145',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c39e7b46-27bd-41e8-82a3-5730da582f2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '20c044ad-d976-4d8e-85b4-c10ed9f4d8d5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160318T133716Z:20c044ad-d976-4d8e-85b4-c10ed9f4d8d5',
  date: 'Fri, 18 Mar 2016 13:37:16 GMT',
  connection: 'close' });
 return result; }]];