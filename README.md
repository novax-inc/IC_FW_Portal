# download

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Release Process
### Copy DIST to root
```
cp -rf dist/* .
```

### Release to netlify
```
git add .
git commit -m 'MESSAGE'
git push
```
The intellicross.netlify.app will update accordingly


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
