#!/bin/bash

EMAIL=
PASSWORD=

BASE_URL="http://tic-tac-toe.wdibos.com/"
URL=

json() {

    CONTENT_TYPE=

    curl ${URL} \
    --include \
    --request POST \
    --header "Content-Type: ${CONTENT_TYPE}" \
    --data-urlencoded "credentials[email]=${EMAIL}" \
    --data-urlencoded "credentials[password]=${PASSWORD}"

}

json
