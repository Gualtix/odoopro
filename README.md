# odoopro

## Instalación de Odoo

### Instalación de docker

1. Desinstalar versiones anteriores

`sudo apt-get remove docker docker-engine docker.io containerd runc`

2. Configurar repositorio

`sudo apt-get update`

`sudo apt-get install \
ca-certificates \
curl \
gnupg \
lsb-release`

- Agregar clave GPG oficial de Docker

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

- Agregar repositorio estable

`echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`

3. Instalar Docker Engine

`sudo apt-get update`

`sudo apt-get install docker-ce docker-ce-cli containerd.io`

4. Configuración post instalación

- Crear el grupo `docker`

`sudo groupadd docker`

- Agregar el usuario del sistema al grupo

`sudo usermod -aG docker $USER`

- Activar los cambios en los grupos

`newgrp docker `

### Instalación de docker-compose

1. Descargar la versión estable de docker-compose

`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

2. Aplicar permisos al ejecutable binario

`sudo chmod +x /usr/local/bin/docker-compose`

3. Comprobar la versión de docker-compose

`docker-compose --version`

### Prerarar docker-compose

Archivo básico de configuración para odoo y postgresql:

```yml
version: '3.1'
services:
  web:
    image: odoo:14.0
    depends_on:
      - db
    ports:
      - "8069:8069"
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_PASSWORD=odoo
      - POSTGRES_USER=odoo
```