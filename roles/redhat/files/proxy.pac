/*
 * Endpoint Systems Proxy Auto-Configuration file
 *
 * This is a Firefox proxy auto configuration file. It is used to configure
 * associates' browsers to use specific proxies based on the tools they need.
 *
 * Stored: https://gitlab.cee.redhat.com/pac/proxy-pac/
 * Served: https://nexus.corp.redhat.com/repository/endpointsystems-raw-releases/proxy.pac/proxy.pac
 * References:
 *   http://en.wikipedia.org/wiki/Proxy_auto-config
 *   http://en.wikipedia.org/wiki/Web_Proxy_Autodiscovery_Protocol
 *   http://www.findproxyforurl.com/
 *
 * Please submit issues or pull requests for changes to this file at:
 *   https://gitlab.cee.redhat.com/pac/proxy-pac/
*/

function FindProxyForURL(url, host) {
  if (shExpMatch(url,"*.hua.hrsmart.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*internal-redhat.icims.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.adaptiveplanning.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.fxall.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.envoy.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*lwn.net/*")) {
    return "PROXY squid.rdu.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.ocr-inc.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*ci.dev.openshift.redhat.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*revstreamcloud.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "sso.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.cdn.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.cdn.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "dev.kubebyexample.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "qa.kubebyexample.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "stage.kubebyexample.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog-new-pipeline.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog-new-pipeline.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cdn.flatpaks.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "dev.redhatstatic.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "qa.redhatstatic.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "preprod.redhatstatic.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "stage.redhatstatic.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "static.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "static.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "www.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "www.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhtapps.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhtapps.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhtapps.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cloud.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cloud.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cloud.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cert.cloud.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhcert.connect.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhcert.connect.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "connect.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "developers.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "connect.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "connect.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "connect.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "developers.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "developers.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "developers.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "listman.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "listman.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "internal.cloud.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.access.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.access.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.access.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "bugzilla.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "bugzilla-attachments.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "spaces.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "bugzilla.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "bugzilla-attachments.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.enterprise.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.enterprise.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.enterprise.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.enterprise.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "dev.one.redhat.com")) {
   return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "qa.one.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "stage.one.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "issues-dc.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "console.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "console.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "issues.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cr.ops.openshift.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*dpp.openshift.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "repository.stage.jboss.org")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "repository.qa.jboss.org")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rover.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "repository.dev.jboss.org")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "fetest.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.security.dev.redhat.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.security.preprod.redhat.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "token.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "intelligence.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "intelligence.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "intelligence.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "registry.quarkus.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cdn.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cdn.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.cdn.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.cdn.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "sso.int.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "keycloak-user-service-keycloak.kc-nlb.kcfri01ugw1.i1.devshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.int.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api-admin.int.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "console.int.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "sso.stage.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "keycloak-user-service-keycloak.kc-nlb.kcfrs01ugw1.p1.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api.stage.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api-admin.stage.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "console.stage.openshiftusgov.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "graphql.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "docs.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "docs.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "docs.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "ftp.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "downloads.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "legacy.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "security.access.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "security.access.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "security.access.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cdn01.stage.quay.io")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "dev.stackrox.io")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "stage.stackrox.io")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "workyourway.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "workyourway.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "workyourway.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription.rhsm.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription.rhn.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription-legacy.rhsm.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription.rhsm.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription.rhn.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription-legacy.rhsm.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription.rhsm.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription.rhn.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "subscription-legacy.rhsm.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "mcp-preprod.dataverse.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "productpages.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "agent-preprod.dataverse.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "api-agent-preprod.dataverse.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "eap.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "eap.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  return "DIRECT";
}
