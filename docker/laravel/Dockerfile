FROM php:7.4-cli

WORKDIR /var/www/

# instalacao do zip para poder rodar o laravel
RUN apt-get update && \
    apt-get install libzip-dev -y && \
    docker-php-ext-install zip

# instalação do composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

# criar projeto laravel
RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

ENTRYPOINT [ "php","laravel/artisan","serve" ]

CMD [ "--host=0.0.0.0" ]