#!/usr/bin/env python3
import sys
import requests
from requests_gssapi import HTTPKerberosAuth, OPTIONAL

def main():
    if len(sys.argv) < 2:
        print("Usage: netbird-extend.py <URL>", file=sys.stderr)
        sys.exit(1)

    url = sys.argv[1]

    # Initialize a session to automatically preserve cookies across requests
    session = requests.Session()

    # GSSAPI/Kerberos authentication
    auth = HTTPKerberosAuth(mutual_authentication=OPTIONAL)

    try:
        # Step 1: Initial auth request to populate session cookies
        auth_url = "https://auth.redhat.com/auth/realms/EmployeeIDP/account/"
        resp1 = session.get(auth_url, auth=auth, allow_redirects=True)
        resp1.raise_for_status()

        # Step 2: Request the target URL passed as an argument using stored
        # session cookies
        resp2 = session.get(url, allow_redirects=True)
        resp2.raise_for_status()

        # Output response body to stdout
        sys.stdout.buffer.write(resp2.content)

    except requests.RequestException as e:
        print(f"Error executing request: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
