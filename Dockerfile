FROM cypress/base:16.13.0

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install
RUN npm run e2e:cy:dashboard:tag
