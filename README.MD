# REST API using NodeJS, Express and MongoDB

# Dockerizing

docker build -t node-rest-api .

docker run -it -p 3080:3000 --name=nodeapi node-rest-api


curl -X POST \
  http://localhost:3080/user/signup \
  -H 'authorization: Basic YWRtaW5AZ2FtaWwuY29tOmFkbWlu' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1ef80b78-21ae-13f9-c5ad-6fc8055fbfc1' \
  -d '{
	"email": "user@gmail.com",
	"password": "user"
}'




curl -X POST \
  http://localhost:3080/user/login \
  -H 'authorization: Basic Z2ljYkBnYW1pbC5jb206MTIzNA==' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 048822cb-88dc-93ba-a1e1-bf15d035b692' \
  -d '{
	"email": "user@gmail.com",
	"password": "user"
}'


"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVmZjQ0NTU2MmUwYzAzMDAxM2U0ZWNjYSIsImlhdCI6MTYwOTg0NDA5OCwiZXhwIjoxNjA5ODQ3Njk4fQ.81YS8KYPsM2g0DkVhLBkr99p4SJdO5NrVhJ_LQHbPWc"}



curl -X POST \
  http://localhost:3080/cases/ \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVmZjQ0NTU2MmUwYzAzMDAxM2U0ZWNjYSIsImlhdCI6MTYwOTg0NDA5OCwiZXhwIjoxNjA5ODQ3Njk4fQ.81YS8KYPsM2g0DkVhLBkr99p4SJdO5NrVhJ_LQHbPWc' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6619b72c-b2a8-1c49-e272-0c1aa6ee199b' \
  -d '{
 "name": "Salvini",
 "gander": "politico",
 "age": 85,
 "address": "Piazza Santa Chiara",
 "city": "Trento",
 "country": "Italy",
 "status": "V",
 "update": "11/02/2021"
}'

