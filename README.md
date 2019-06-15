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

Sûrement n'est pas nécessaire, mais comme ça ne fontionnait pas:

```bash
npm install esm

# Executer:
 docker run -it --rm -v ${PWD}:/opt/react \
 -u 1000 -w /opt/react node:11.15.0-stretch \
 node -r  esm index.js
 ```
