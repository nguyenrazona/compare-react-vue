# Compare comprehensively React JS and Vue JS

- Initialization steps:
```
cd 1_react-app
npm ci
cd ../2_vue-app
npm ci
cd ../3_next-app
npm ci
cd ../4_nuxt-app
npm ci
```
- Start React app:
```
cd 1_react-app
npm start
# URL: localhost:3000 (browser will be automatically opened)
```

- Start Vue app:
```
cd 2_vue-app
npm run dev
# URL: localhost:5173
```

## Experiment steps of create-react-app vs create-vue comparison
- create-react-app:
```
cd 1_react-app
// List1: uncomment line 9 of App.tsx, comment out line 10, 11
// List2: uncomment line 10 of App.tsx, comment out line 9, 11
// List3: uncomment line 11 of App.tsx, comment out line 9, 10
npm run build
// Install serve only once
npm i -g serve
// Start localhost
serve build
// Open Chrome in private mode with localhost URL provided by serve above
// Open developer tool to see the log
```

- create-vue:
```
cd 2_vue-app
// List1: uncomment line 7 of App.vue, comment out line 8, 9
// List2: uncomment line 8 of App.vue, comment out line 7, 9
// List3: uncomment line 9 of App.vue, comment out line 7, 8
npm run build
// Install serve only once
npm i -g serve
// Start localhost
serve dist
// Open Chrome in private mode with localhost URL provided by serve above
// Open developer tool to see the log
```

## Notes
- 1_react-app is created with `npx create-react-app 1_react-app` command of [create-react-app](https://github.com/facebook/create-react-app)
- 2_vue-app is created with `npm create vue@3` command of [create-vue](https://github.com/vuejs/create-vue)
