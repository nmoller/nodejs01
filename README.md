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
