# SecondHandLibrary
simple website for Ficusdata.

Setup
-
This project requires the following:

##### To build and run tests
*	From the command-line: Docker 20.10.5 or higher (recommended)

Run
-
Run the container as the instruction below in root directory:

```
docker-compose up --build
```
You can now access the website in
    http://localhost:8080

Delete
-
Destroy the container by typing the instruction below:

```
docker-compose down
```

*   To clean up images and volume in docker

```
docker image prune
docker volume prune
```