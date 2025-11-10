# Empezar con Sparrow

10 de noviembre de 2025

Descubre cómo usar Sparrow Wallet con una clave de software para gestionar tus bitcoins de forma segura.

---

## Objetivos

- Instalar Sparrow Wallet
- Comprender las diferentes redes Bitcoin
- Configurar la conexión a la red
- Crear y asegurar un monedero
- Comprender cuentas y direcciones
- Recibir y enviar bitcoins

---

## Descarga de Sparrow

- Ir al sitio web oficial
- Descargar la versión para tu sistema

**Recurso** : [Descarga de Sparrow](https://sparrowwallet.com/download/)

---

## Verificación de Sparrow

- Garantiza la autenticidad del software
- Protege contra malware

⚠️ **Importante** : Verificar la firma GPG del archivo descargado

**Recurso** : [Descarga de Sparrow](https://sparrowwallet.com/download/)

---

## Instalación de Sparrow

- **macOS** : Abrir el archivo .dmg y arrastrar Sparrow a Aplicaciones
- **Windows** : Ejecutar el archivo .exe
- **Linux** : Extraer el archivo y ejecutar

**Recurso** : [Guía de Inicio Rápido de Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Redes Bitcoin

### Mainnet

- Red principal
- **Bitcoins reales** con valor monetario
- Transacciones definitivas e irreversibles

⚠️ **Usar solo con bitcoins reales**

---

## Redes Bitcoin

### Testnet

- **Bitcoins de prueba** sin valor
- Para probar y aprender
- Faucets disponibles para obtener bitcoins de prueba

---

## Redes Bitcoin

### Signet

- **Bitcoins de prueba** sin valor
- Más estable que testnet
- Ideal para talleres y formación

---

## Comparación de Redes

| Característica | Mainnet     | Testnet  | Signet    |
| -------------- | ----------- | -------- | --------- |
| Valor          | Real        | Ninguno  | Ninguno   |
| Estabilidad    | Muy estable | Variable | Estable   |
| Uso            | Producción  | Prueba   | Formación |

**Para este taller** : Usaremos **Signet**

---

## Tipos de Conexión

Sparrow puede conectarse de varias formas:

- **Nodo Bitcoin Core privado**
- **Servidor Electrum público**
- **Servidor Electrum privado**

---

## Nodo Bitcoin Core

- Tu propio nodo Bitcoin
- Máxima privacidad
- Control total

---

## Servidores Electrum

**Servidor Electrum público** :
- Conexión a un servidor de terceros
- Más fácil de configurar

**Servidor Electrum privado** :
- Tu propio servidor Electrum
- Buen compromiso privacidad/facilidad

---

## Conexión de Red

### Clearnet

- Conexión a Internet estándar
- Más rápida
- Menos privacidad

---

## Conexión de Red

### Tor

- The Onion Router
- Conexión anónima a través de la red Tor
- Más privacidad
- Puede ser más lenta

**Recurso** : [The Tor Project](https://www.torproject.org/)

---

## Configuración

- Abrir **Preferencias**
- Ir a **Servidor** / **Conexiones**
- Elegir la red: Mainnet / Testnet / Signet

---

## Configuración

- Configurar la conexión:
  - **Servidor Público** : Seleccionar un servidor
  - **Servidor Privado** : Tu servidor
- Elegir **Clearnet** o **Tor**
- Verificar que el estado muestre **"Conectado"**

**Recurso** : [Guía de Inicio Rápido de Sparrow](https://sparrowwallet.com/docs/quick-start.html)

---

## Crear un Nuevo Monedero

- Menú → **Nuevo Monedero** → **Monedero Estándar**
- Elegir un nombre para tu monedero
- Seleccionar el formato: **Native SegWit (P2WPKH)**

---

## Formato Native SegWit

- Formato moderno y económico
- Direcciones que comienzan con
  - `bc1...` (mainnet)
  - `tb1...` (testnet/signet)

---

## Generar Frase Semilla

La **frase semilla** es tu clave de respaldo

- Generalmente **12 o 24 palabras**
- Generada aleatoriamente por Sparrow

⚠️ **CRÍTICO** : Guardar inmediatamente en papel

---

## Guardar la Semilla

- **Escribir en papel** (nunca en ordenador/nube)
- Verificar que todas las palabras sean correctas
- Almacenar en un lugar seguro y secreto
- Nunca compartir con nadie

⚠️ Pérdida de la semilla = **pérdida definitiva de todos los bitcoins**

---

## Monedero Sin Frase de Contraseña

- Monedero estándar solo con semilla
- Más fácil de usar
- Si la semilla se compromete, los fondos son accesibles

---

## Monedero Con Frase de Contraseña

- Protección adicional
- `semilla + frase de contraseña` = monedero diferente de `solo semilla`
- La misma semilla puede crear varios monederos diferentes

---

## Ejemplo de Frase de Contraseña

- Semilla : `palabra1 palabra2 ... palabra12`
- Sin frase de contraseña → Monedero A
- Con frase de contraseña "MiSecreto123" → Monedero B

---

## Activar Frase de Contraseña

- En la configuración del monedero
- Activar la opción **Frase de Contraseña**
- Introducir tu frase de contraseña

**memorizar o guardar por separado**

⚠️ Pérdida de la frase de contraseña = **pérdida de los fondos de este monedero**

---

## Establecer una Contraseña

La **contraseña del monedero** protege el acceso a Sparrow

- Necesaria cada vez que abres el monedero
- Diferente de la frase de contraseña

⚠️ No protege si alguien tiene tu semilla

---

## Buenas Prácticas

- Usar una contraseña fuerte
- Memorizarla o guardarla en un gestor de contraseñas seguro
- No confundirla con la frase de contraseña

---

## Concepto de Cuenta

Una **cuenta** es una separación lógica en tu monedero

- Cada cuenta tiene sus propias direcciones
- Útil para organizar tus fondos
- Ejemplo: Cuenta "Ahorros", Cuenta "Gastos"

---

## Ruta de Derivación

**Ruta de Derivación**
- Mainnet
  - Cuenta 0 : `m/84'/0'/0'`
  - Cuenta 1 : `m/84'/0'/1'`

- Signet
  - Cuenta 0 : `m/84'/1'/0'`
  - Cuenta 1 : `m/84'/1'/1'`

---

## Subcuentas

- Las subcuentas permiten una organización más fina
- Cada cuenta puede tener varias subcuentas
- Útil para separar diferentes usos

---

## Direcciones de Recepción

- Direcciones para **recibir** bitcoins
- Generadas automáticamente por el monedero
- Cada transacción debe usar una **nueva dirección**

---

## Direcciones de Cambio

- Direcciones para el **cambio** devuelto al enviar
- Generadas automáticamente por el monedero

Si envías **0.1 BTC** pero gastas 1.0 BTC

**0.9 BTC** vuelve como "cambio"

---

## Ejemplo de Dirección de Cambio

- Tienes 1 BTC
- Envías 0.3 BTC a alguien
- Comisiones : 0.0001 BTC

**Cambio** : 0.6999 BTC vuelve a tu dirección de cambio

---

## Ver Cuentas en Sparrow

- Abrir tu monedero
- Ver la lista de cuentas en la barra lateral
- Hacer clic en una cuenta para ver sus direcciones
- Pestaña **Direcciones** : ver todas las direcciones
  - recepción
  - cambio

---

## Generar Dirección de Recepción

- Seleccionar tu monedero
- Ir a la pestaña **Recibir**
- Hacer clic en "Crear nueva dirección de recepción"
  
**Se genera una nueva dirección**

---

## Mostrar Código QR

- Mostrar el **código QR** para facilitar el intercambio
- Copiar la dirección para enviarla

---

## Direcciones Pregeneradas

- Sparrow puede generar varias direcciones por adelantado
- Útil para recibir múltiples pagos
- Cada dirección permanece única y válida

---

## Reutilización de Dirección

⚠️ Reutilización de Dirección **Evitar**

- Usar la misma dirección varias veces reduce la privacidad
- Permite vincular tus transacciones

Buena práctica **una dirección = una transacción**

---

## Recibir - Demostración

- Monedero → **Recibir**
- Generar una nueva dirección
- Copiar la dirección o mostrar el código QR
- Usar un faucet Signet para recibir bitcoins de prueba

---

## Verificar Recepción

- **Confirmaciones** : Número de bloques minados desde tu transacción
- Más confirmaciones = transacción más segura
- Observar la transacción aparecer en la pestaña **Transacciones**

---

## Número de Confirmaciones

- Para cantidades pequeñas : 1 confirmación a menudo suficiente
- Para cantidades grandes : esperar 6 confirmaciones

---

## ¿Por Qué Mover Entre Cuentas?

- Organizar tus fondos
- Separar diferentes usos
- Transferir a otra cuenta en el mismo monedero

---

## Cómo Mover Entre Cuentas

- Abrir la pestaña **Enviar**
- En **Pagar a**, introducir una dirección de destino
- Introducir la cantidad a transferir
- Verificar las comisiones
- Crear, firmar y difundir la transacción

**Nota** : Es técnicamente una transacción normal, pero a tu propio monedero

---

## Creación de Transacción

- Abrir la pestaña **Enviar**
- En **Pagar a** :
  - Introducir la dirección Bitcoin del destinatario
  - O escanear un código QR
- Introducir la **cantidad** a enviar
  - En BTC o sats
- Añadir una **etiqueta** para identificar la transacción

---

### Configuración de Comisiones

- **Control deslizante de comisiones** : Ajustar las comisiones de transacción (sats/vB)
- Comisiones más altas = confirmación más rápida
- Comisiones más bajas = confirmación más lenta
- Sparrow sugiere comisiones apropiadas

---

### Opciones Avanzadas

- **Replace-By-Fee (RBF)** : Permite aumentar las comisiones después de enviar
- **Selección de monedas** : Elegir manualmente los UTXO a gastar

---

### Verificación Antes de Firmar

- **Dirección de destino** : ¿Es correcta?
- **Cantidad** : ¿Es correcta?
- **Comisiones** : ¿Aceptables?

⚠️ **PASO CRÍTICO** - Verificar antes de firmar

---

## Verificación - Dirección de Cambio

- **Dirección de cambio** : Verificar que te pertenece
  - Debe ser una dirección de tu monedero

⚠️ Si la dirección de cambio no es tuya, pierdes estos bitcoins

---

### Explicación de Dirección de Cambio

Al enviar, si gastas más que la cantidad a enviar

**Ejemplo de envío**
- Tienes un UTXO de 1 BTC
- Envías 0.3 BTC
- Comisiones : 0.0001 BTC

**Cambio** : 0.6999 BTC debe volver a tu monedero

---

### Regla de Dirección de Cambio

La dirección de cambio debe **SIEMPRE** ser una dirección que controles.

---

## Firma de Transacción

- Después de la verificación, hacer clic en **"Crear Transacción"**
- Verificar todos los detalles nuevamente
- Hacer clic en **"Firmar"**
- Introducir tu contraseña si se solicita
- La transacción se firma con tus claves privadas

---

### Difusión de Transacción

- Después de firmar, hacer clic en **"Difundir Transacción"**
- La transacción se envía a la red Bitcoin
- Esperar confirmaciones
- Seguir la transacción en la pestaña **Transacciones**

---

### Lista de Verificación Antes de Enviar

✅ **Verificaciones Finales**

- [ ] Dirección de destino correcta
- [ ] Cantidad correcta
- [ ] Comisiones aceptables
- [ ] Dirección de cambio es mía
- [ ] Todas las salidas están verificadas
- [ ] Entiendo lo que estoy haciendo

---

### Buenas Prácticas - Respaldo

- ✅ Frase semilla en papel
- ✅ Frase de contraseña guardada por separado
- ✅ Contraseña en un gestor de contraseñas seguro
- ❌ Nunca en ordenador/nube/correo electrónico

---

### Buenas Prácticas - Privacidad

- ✅ Usar tu propio nodo si es posible
- ✅ Usar Tor para más anonimato
- ✅ Una nueva dirección por transacción
- ✅ Verificar direcciones de cambio

---

### Buenas Prácticas - Verificaciones

- ✅ Siempre verificar las salidas antes de firmar
- ✅ Verificar la dirección de destino
- ✅ Comprender las comisiones
- ✅ Probar primero en Signet/Testnet

---

## Lo Que Hemos Aprendido

- ✅ Instalar Sparrow Wallet
- ✅ Comprender las redes Bitcoin
- ✅ Configurar la conexión
- ✅ Crear un monedero
- ✅ Comprender las cuentas
- ✅ Recibir bitcoins
- ✅ Mover bitcoins entre cuentas
- ✅ Enviar bitcoins

---

## Puntos Clave - Seguridad

⚠️ **Seguridad**

- Frase semilla = acceso total a los bitcoins
- Guardar en papel, nunca en línea
- Siempre verificar direcciones de cambio

---

## Puntos Clave - Privacidad

🔒 **Privacidad**

- Una dirección = una transacción
- Usar tu propio nodo si es posible
- Comprender las implicaciones de cada acción

---

### Próximos Talleres

- Multisig
- Be-BOP
- Block transaction
