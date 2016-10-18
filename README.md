# Check Update
Web application in express.js that shows if containers in host are updated

## Run Image
`docker run -d --name some-name -p some-port:8042 -v check-update-script:/app/script check-update`


**some-name**: container name

**some-port**: host port for you application

**check-update**: script folder from https://github.com/victorhundo/check-update-script.git

## Resume

```
git clone https://github.com/victorhundo/check-update-script.git
docker run -d --name some-name -p some-port:8042 -v check-update-script:/app/script check-update
```

