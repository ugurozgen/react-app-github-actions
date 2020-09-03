#!/bin/sh -l

# if [ true ] 
# then
#     echo "error"
#     exit 222
# fi

echo "::debug ::Debug Message"
echo "::warning ::warning message"
echo "::error ::error message"

echo "::add-mask::$1"
echo "Hello $1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo 'some stuff'
echo 'some stuff'
echo 'some stuff'
echo "::endgroup::"

echo "::set-env name=HELLO::hello"