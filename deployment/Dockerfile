FROM nginx
MAINTAINER Voratham Siriapiwattnakul voratham_sir@true-e-logistics.com

RUN rm /etc/nginx/conf.d/default.conf
COPY deployment/nginx/nginx.conf /etc/nginx/
COPY deployment/nginx/conf.d /etc/nginx/conf.d
COPY build /var/source

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
