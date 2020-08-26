#!/bin/sh
while true
do
    if `printf "GET / HTTP/1.0\n\n" | nc -w 2 localhost 80 | grep -q '200 OK'`
    then
		echo "System up."
    else 
        	printf "To: admin@work  Message: The service is down!" | nc localhost 33333
            break
	fi

	sleep 1
done