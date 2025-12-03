# be-BOP

4 de diciembre de 2025

Descubre be-BOP, un software libre para gestionar tus ventas con total independencia. Sin comisiones, sin censura.

---

## La herramienta de venta ética e independiente

### Software libre

- No es una plataforma
- Software libre y copyleft
- Posees y controlas todo

---

## La herramienta de venta ética e independiente

- Sin comisiones
- Sin censura
- Sin dependencia de terceros

---

## ¿Para quién es be-BOP?

### Público objetivo

- Creadores
- Emprendedores
- Comunidades

---

## ¿Para quién es be-BOP?

### Herramientas integradas

- Financiar tu trabajo
- Gestionar tus ventas y suscripciones
- Organizar tus eventos
- Animar tu comunidad

---

## ¿Qué es be-BOP?

be-BOP no es una plataforma. Es un software libre y copyleft que posees y controlas completamente.

- Software libre y autoalojado
- Arquitectura abierta y modular
- Pagos en línea y en sitio
- Personalización e integración sin límites
- Sin instalación ni soporte incluido

---

[![bip-21](presentations/03-be-bop/bip-21.png)](https://bip-21.fr/)

---

[![BitcoinStore](presentations/03-be-bop/bitcoinstore.png)](https://bitcoinstore.fr/)

---

[![Suif & Praline](presentations/03-be-bop/sulinaderm.png)](https://sulinaderm.com/)

---

[![Marketplace CryptoXR](presentations/03-be-bop/cryptoxr.png)](https://market.cryptoxr.fr/)

---

## Funcionalidades

### Comercio

- **Tienda online**: Gestión completa de tus ventas
- **Suscripciones**: Gestión de suscripciones recurrentes
- **Eventos**: Creación y venta de entradas
- **Comunidad**: Herramientas para animar tu comunidad

---

## Funcionalidades

### Pagos & Libertad

- **Pagos**: En línea y en sitio, sin comisiones
- **0% de comisión**: Todos tus ingresos te pertenecen
- **Independencia total**: Tus datos, tu infraestructura

---

## ¿Por qué be-BOP?

### Control total

Despliega tu propio entorno y mantén el control total sobre tus herramientas, tus datos y tus ingresos.

---

## ¿Por qué be-BOP?

### Libertad total

**0% de comisión**
Ninguna plataforma cobra comisión por tus ventas.

**Libertad total**
Tú decides qué vendes, nadie puede bloquear.

---

## Instalación

### Prerrequisitos

1. Un servidor Linux (Debian o Ubuntu LTS)
2. Un nombre de dominio que controles
3. Acceso a la configuración DNS
4. Una dirección de correo electrónico (para Let's Encrypt)

---

## Prerrequisitos

### El servidor

**Servidor Linux** (Debian o Ubuntu LTS)

- Mínimo: 2 GB de RAM
- Espacio en disco: 40 GB
- Acceso a internet

---

## Prerrequisitos

### Dominio & DNS

**Un nombre de dominio** que controles
Ejemplo: `example.com`

**Configuración DNS requerida:**

- `example.com` → IP de tu servidor
- `s3.example.com` → IP de tu servidor

---

## Paso 1

### Obtener un servidor

Necesitarás un servidor donde ejecutar comandos:

- VPS de cualquier proveedor de hosting
- Máquina dedicada
- Máquina de repuesto en casa con Linux

---

## Paso 1

### Modos de acceso

**Cómo acceder al servidor:**

- Vía SSH (terminal o cliente SSH)
- Vía consola web del proveedor

**Para Windows:**
[Git for Windows](https://gitforwindows.org/)

---

## Paso 2

### Obtener un nombre de dominio

Registra un dominio con el proveedor de tu elección:

- Dominio raíz: `example.com`
- O subdominio: `boutique.example.com`

Configurarás el DNS en el siguiente paso.

---

## Paso 2

### Configurar el DNS (IPv4)

Crea dos registros A (IPv4):

```text
tudominio.com      → A → IPv4 de tu servidor
s3.tudominio.com   → A → IPv4 de tu servidor
```

---

## Paso 2

### Configurar el DNS (IPv6)

Añade también registros AAAA:

```text
tudominio.com      → AAAA → IPv6 de tu servidor
s3.tudominio.com   → AAAA → IPv6 de tu servidor
```

**Nota:** Espera la propagación DNS

---

## Paso 3

### Verificar el acceso al servidor

Prueba un comando simple para confirmar el acceso al servidor:

```text
ssh root@tudominio.com
```

---

## Paso 4

### Lanzar la instalación

**Modifica este comando con tu información:**

```bash
bash <(curl -fsSL https://be-bop.io/wizard/install.sh) \
  --domain "tudominio.com" \
  --email "direccion@email.com"
```

**Antes de ejecutar:**

- Reemplaza `tudominio.com` con tu dominio
- Reemplaza `direccion@email.com` con tu email

El script muestra todas las tareas previstas y solicita confirmación antes de realizar cambios.

---

## Instalación en curso

### Duración: 3 a 10 minutos

El script hace todo automáticamente:

- Instalación de dependencias
- Configuración de servicios
- Generación de certificados SSL
- Preparación de be-BOP

---

## Después de la instalación

### Visita tu dominio en un navegador

be-BOP estará listo para la configuración inicial a través de la interfaz web.

Sigue el asistente de configuración para:

- Crear tu cuenta de administrador
- Configurar tus ajustes de pago
- Personalizar tu tienda

---

## ¿Necesitas ayuda?

### En caso de problema

Contacta con el soporte con:

- Tu proveedor de hosting
- Tu nombre de dominio
- Una captura de pantalla del error

---

## Documentación

[Todos los detalles en be-bop.io](https://be-bop.io/get-started-diy)

---

## ¿Listo para empezar?

### Tu independencia digital comienza aquí

[Descubre be-BOP](https://be-bop.io/)

---

## Te toca a ti

- Añade tus productos y servicios
- Crea tus páginas CMS
- Configura BIP-84
- Configura PhoenixD
- Configura Swiss Bitcoin Pay
