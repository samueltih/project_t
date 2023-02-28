FROM alpine:3.16

COPY ./dist /app/sentechnicien

EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]