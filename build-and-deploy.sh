# This is run by github actions when pushing to main.
# Set AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY to run manually.

set -e

rm -rf public/
hugo --baseURL https://chrisjuchem.dev/ --environment production

echo
echo "Build succeeded, deploying..."

hugo deploy --verbose
