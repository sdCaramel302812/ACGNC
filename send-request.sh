DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR

if [[ $# < 2 ]]; then
  echo "usage: ./send-requst.sh <method> <api> (optional)<data>"
  exit 0
fi

method=$1
api=$2
data=$3

TOKEN=$(./get-token.sh)

curl -X $method "http://localhost:3030/$api" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  --data-binary "$data"