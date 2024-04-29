#!/bin/bash
# Start the server in the background
npm run server &

# Wait for the server to output the successful start log
while ! grep -m1 "Database is connected" <(tail -f -n0 npm.log); do
  sleep 1
done
