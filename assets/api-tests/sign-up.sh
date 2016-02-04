#!/bin/bash

EMAIL=whyme@you.com
PASSWORD=you

BASE_URL="http://tic-tac-toe.wdibos.com/"
URL="${BASE_URL}/sign-up"

json() {

  CONTENT_TYPE="application/json"

  curl ${URL} \
  --include \
  --request POST \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\"
    }
  }"

}

json

echo
