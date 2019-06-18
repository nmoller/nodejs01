# Learning NodeJs

```bash
docker run -it --rm -v ${PWD}:/opt/react \
-u 1000 -w /opt/react node:11.15.0-stretch\
 npm init -y
```

Pour éviter message d'erreur, j'installe `ESlint`

```bash
docker run -it --rm -v ${PWD}:/opt/react \
-u 1000 -w /opt/react node:11.15.0-stretch\
 npm install --only=dev eslint
```

Sûrement n'est pas nécessaire, mais comme ça ne fontionnait pas, en suivant:
<https://timonweb.com/tutorials/how-to-enable-ecmascript-6-imports-in-nodejs/>

```bash
npm install esm

# Executer:
 docker run -it --rm -v ${PWD}:/opt/react \
 -u 1000 -w /opt/react node:11.15.0-stretch \
 node -r  esm index.js
 ```

À regarder :

- <https://medium.com/@timoxley/named-exports-as-the-default-export-api-670b1b554f65>

- <https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/>

Pour tester:

```bash
docker run -it --rm -v ${PWD}:/opt/react -u 1000 -w /opt/react node:11.15.0-stretch npm test
```

Je vais faire une branche par example.

## Chapitre 2

```bash
 docker run -it --rm -v ${PWD}:/opt/react -u 1000 \
 -w /opt/react node:11.15.0-stretch  npm run ch02
```

## Chapitre 3

Ne pas oublier `npm install` :) .

```bash
docker run -it --rm -v ${PWD}:/opt/react  \
-u 1000 -w /opt/react node:11.15.0-stretch  \
node -r  esm src/event/tech19.js
```

Pour voir la doc:

<https://nodejs.org/api/events.html#events_event_removelistener>

et ce n'est pas marqué deprecated...

## Chapitre 4

```bash
docker run -it --rm -v ${PWD}:/opt/react  -u 1000 \
-w /opt/react node:11.15.0-stretch  \
node -r  esm src/stream/tech28.js
```

### Express examples

```bash
docker run -it --rm -v ${PWD}:/opt/react  -u 1000 \
-w /opt/react node:11.15.0-stretch  \
npm install --save express

docker run -it --rm -v ${PWD}:/opt/react  -u 1000 --name njsserv\
--network host -w /opt/react node:11.15.0-stretch \
 node -r  esm src/express/index.js
```

Dans navigateur `http://localhost:3000`. Pour finir,

```bash
# dans un autre terminal
docker rm -f njsserv
```

ES6:

<https://medium.com/ecmascript-2015/es6-classes-and-inheritance-607804080906>
