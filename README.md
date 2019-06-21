# Learning NodeJs

Je lis le livre `Node.js in Practice` sur <https://safaribooksonline.com>.

Ce dépôt contient l'implementation en ES6 du code. J'utilise un container pour rouler nodejs.

## Chapitre 1

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

Ce qui a été le plus difficile à comprendre c'était la manière d'utiliser les imports et ce qui était exporté dans chaque module.

ES6:

<https://medium.com/ecmascript-2015/es6-classes-and-inheritance-607804080906>

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

## Chapitre 4 - EventEmitter

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

## Chapitre 5 - Streams

- Readable
- Writable
- Duplex
- Transform

### Hériter d'un stream

#### Technique 31

```bash
docker run -it --rm -v ${PWD}:/opt/react  -u 1000 --name njsserv \
-w /opt/react node:11.15.0-stretch \
node -r  esm src/stream/tech31/index.js
```

<https://nodejs.org/api/util.html#util_util_inspect_object_options>

<https://dustinpfister.github.io/2018/08/18/nodejs-filesystem-create-read-stream/>

Pour être en mesure de relancer la requête autant de fois qu'on veux sur express, il a fallu introduire la
classe `rewindable`. Sinon, le stream finisait après la première lecture.

Si l'on fait la création du filestream à l'intérieur du get.... ça ne fonctionne pas.

```bash
docker run -it --rm -v ${PWD}:/opt/react  -u 1000 \
--network host --name njsserv -w /opt/react node:11.15.0-stretch \
node -r  esm src/stream/tech31/index2.js
```

#### Technique 34

Je laisse les emit pour me souvenir comment je dois penser à `length`. Ça aide au débogage.

```bash
docker run -it --rm -v ${PWD}:/opt/react  -u 1000 \
--network host --name njsserv \
-w /opt/react node:11.15.0-stretch \
node -r  esm src/stream/tec
h34/index.js
```

#### Technique 39

```bash
docker run -it --rm -v ${PWD}:/opt/react  -u 1000 \
 --network host --name njsserv -w /opt/react \
 node:11.15.0-stretch \
 node -r  esm src/fs/tech39/index.js
 ```

Voir <https://nodejs.org/api/errors.html#errors_errors> pour la propagation des erreurs.
