curl 'http://localhost:3030/authentication/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "strategy": "local", "email": "test.com", "password": "testtest" }' \
  | jq -r '.accessToken'