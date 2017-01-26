export NODE_ENV=production
export PORT=80
export POSTGRES_USER=xxx
export POSTGRES_DB=xxx
export POSTGRES_PORT_5432_TCP_ADDR=xxx
export POSTGRES_PORT_5432_TCP_PORT=xxx
export POSTGRES_PASSWORD=xxx

grunt build

pm2 kill 
pm2 start dist/server/app.js -i 0
