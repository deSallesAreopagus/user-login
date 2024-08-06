FROM node:latest
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3002
CMD ["yarn", "preview", "--host"]