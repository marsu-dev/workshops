# Billetera Multi-firma

24 de noviembre de 2025

Crea y gestiona una billetera multi-firma para asegurar tus bitcoins con múltiples claves.

---

## Objetivos

- Comprender el concepto de multi-firma
- Crear una billetera multi-firma
- Comprender las claves y las palabras de recuperación (BIP-39)
- Descubrir las configuraciones posibles
- Crear un multi-sig en Sparrow
- Recibir bitcoins en una billetera multi-sig
- Gastar desde un multi-sig con PSBT

---

## ¿Qué es multi-firma?

Un **multi-sig** = una caja fuerte Bitcoin que requiere múltiples claves para gastar

- A diferencia de una billetera estándar (1 clave)
- Múltiples claves deben firmar para autorizar un gasto

---

## Ejemplo: 2 de 3

**2-of-3** : Se necesitan **2 claves de 3** para firmar un gasto

- Tienes 3 claves en total
- Para gastar, debes usar al menos 2 de estas claves
- Una sola clave no es suficiente

---

## Ventajas del multi-sig

### Seguridad mejorada

- **Si se pierde una clave** : Los fondos siguen siendo accesibles con las otras claves
- **Una clave robada** : El atacante no puede hacer nada solo
- **Protección contra el robo** : Requiere múltiples firmas

---

## Casos de uso - Seguridad personal

- Distribuir las claves en diferentes dispositivos
- Una clave en ordenador, una en teléfono, una en hardware wallet
- Protección incluso si un dispositivo está comprometido

---

## Casos de uso - Empresa / Asociación

- Varias personas deben aprobar los gastos
- Control de los fondos de la empresa
- Gestión colaborativa de bitcoins

---

## Casos de uso - Familia

- Varios miembros de la familia deben firmar
- Protección de herencias
- Decisiones financieras compartidas

---

## Claves y palabras de recuperación

### BIP-39: Estándar de frase semilla

- Una **seed** = una frase de **12 o 24 palabras**
- Estándar BIP-39 usado por todas las billeteras Bitcoin
- A partir de esta seed, Sparrow genera todas tus claves

---

## Generación de claves

- La frase semilla genera una clave maestra
- Esta clave maestra genera todas las demás claves
- Cada clave puede firmar transacciones

⚠️ **CRÍTICO** : Nunca compartas tus palabras de recuperación

---

## Multi-sig y claves públicas

### xpub: Clave pública extendida

- El multi-sig usa solo **xpubs** (claves públicas extendidas)
- **Nunca las palabras de recuperación** (frase semilla)
- Los xpubs permiten generar direcciones sin exponer las claves privadas

---

## ¿Por qué usar xpubs?

- **Seguridad** : Los xpubs no permiten gastar
- **Flexibilidad** : Cada participante mantiene su seed privada
- **Confianza** : No es necesario compartir las palabras de recuperación

---

## Configuraciones posibles

### 2-of-3 (la más común)

- **2 firmas requeridas** de 3 claves
- Buen equilibrio entre seguridad y practicidad
- Ideal para comenzar con multi-sig

---

## Configuraciones posibles

### 3-of-5

- **3 firmas requeridas** de 5 claves
- Más seguridad
- Útil para empresas, asociaciones
- Más flexibilidad en caso de pérdida de claves

---

## Otras configuraciones

Sparrow soporta hasta **15 claves** en modo SegWit

- 2-of-3, 3-of-5, 4-of-7, etc.
- Más claves = más seguridad pero más complejo

⚠️ **Para principiantes** : Comenzar con 2-of-3

---

## Crear un multi-sig en Sparrow

### Paso 1: Abrir Sparrow

- Abrir Sparrow Wallet
- Menú → **File** → **New Wallet**

---

## Crear un multi-sig en Sparrow

### Paso 2: Elegir Multi-firma

- Seleccionar **Multi-signature Wallet**
- Elegir la red: Mainnet / Testnet / Signet

**Para este taller** : Usar **Signet**

---

## Crear un multi-sig en Sparrow

### Paso 3: Elegir el umbral

- Seleccionar el esquema: **2-of-3**, **3-of-5**, etc.
- Ejemplo: Elegir **2-of-3** para comenzar

---

## Crear un multi-sig en Sparrow

### Paso 4A: Generar keystores en Sparrow

- Sparrow genera automáticamente los keystores necesarios
- Cada keystore tiene su propia frase semilla
- Para cada keystore: generar y guardar la frase semilla

---

## Crear un multi-sig en Sparrow

### Paso 4B: Importar por xpubs

- Si ya tienes claves (hardware wallets, otras billeteras)
- Importar los **xpubs** (claves públicas extendidas) de los participantes
- Cada participante mantiene su seed privada

**Ventaja** : No es necesario generar nuevas claves

---

## Generar keystores en Sparrow

- Sparrow genera automáticamente los keystores necesarios
- Para cada keystore:
  - Generar una frase semilla
  - Guardar inmediatamente en papel
  - Nunca compartir

⚠️ **CRÍTICO** : Guardar cada frase semilla por separado

---

## Importar xpubs

- Si ya tienes claves (hardware wallets, otras billeteras)
- Importar los **xpubs** (claves públicas extendidas)
- Cada participante mantiene su seed privada

**Ventaja** : No es necesario generar nuevas claves

---

## El descriptor

### Tarjeta de identidad del multi-sig

- Sparrow muestra el **descriptor** de la billetera
- Es la "tarjeta de identidad" del multi-sig
- Contiene toda la información necesaria para reconstruir la billetera

---

## El descriptor - Ejemplo

El descriptor se ve así:

```
wsh(sortedmulti(2,xpub1...,xpub2...,xpub3...))
```

- `wsh` : Witness Script Hash (SegWit)
- `sortedmulti(2,...)` : 2 firmas requeridas entre las claves listadas
- `xpub...` : Claves públicas extendidas

---

## Billetera lista

Una vez que se agregan los keystores:

- La billetera está creada
- Lista para recibir fondos
- Las direcciones se generan automáticamente

---

## Recibir bitcoins

### Estándar BIP-48

- El multi-sig usa un estándar llamado **BIP-48**
- Sparrow genera automáticamente las direcciones
- Las direcciones multi-sig son diferentes de las direcciones estándar

---

## Direcciones multi-sig

### Formato de direcciones

- **Mainnet** : Comienzan con `bc1...`
- **Testnet/Signet** : Comienzan con `tb1...`
- Visualmente idénticas a las direcciones estándar
- Pero requieren múltiples firmas para gastar

---

## Generar una dirección de recepción

- Abrir tu billetera multi-sig
- Ir a la pestaña **Receive**
- Hacer clic en "Create new receiving address"
- Se genera automáticamente una nueva dirección

---

## Usar la dirección

- Copiar la dirección o mostrar el código QR
- Enviar bitcoins a esta dirección
- La transacción será visible en la pestaña **Transactions**

⚠️ **Importante** : Usar una nueva dirección para cada transacción

---

## PSBT: Partially Signed Bitcoin Transaction

### ¿Qué es una PSBT?

- **PSBT** = Partially Signed Bitcoin Transaction
- Formato estándar para transacciones multi-sig
- Permite firmar una transacción en múltiples pasos

---

## ¿Por qué usar PSBTs?

### Firma interactiva

- Cada participante firma por separado
- La transacción no se envía hasta que se recopilen todas las firmas
- Seguro y flexible

---

## Crear una transacción

### Paso 1: Preparar la transacción

- Abrir la pestaña **Send**
- Ingresar la dirección de destino
- Ingresar el monto a enviar
- Configurar las tarifas

---

## Crear una transacción

### Paso 2: Generar la PSBT

- Hacer clic en **"Create Transaction"**
- Sparrow genera una **PSBT**
- La transacción aún no está completamente firmada

---

## Exportar la PSBT

### Método 1: Archivo

- Guardar la PSBT como archivo
- Transferir el archivo a otros participantes
- Método simple y directo

---

## Exportar la PSBT

### Método 2: Copy PSBT

- **Copy PSBT** → Copia el PSBT Base64 al portapapeles
- Transferir el texto (correo, mensajería, etc.)
- El destinatario usa **Open Transaction → From Text**
- Práctico para transferencia rápida por texto

**Para este taller** : Usaremos el **Método 2: Copy PSBT**

---

## Exportar la PSBT

### Método 3: Código QR

- Mostrar la PSBT como código QR
- Escanear con otro dispositivo
- Práctico para transferencia rápida entre dispositivos

---

## Exportar la PSBT

### Método 4: Transferencia USB

- Copiar el archivo a una memoria USB
- Transferir físicamente
- Método seguro sin conexión de red

---

## Firmar la PSBT

### Paso 1: Abrir la PSBT

- Cada participante abre la PSBT en Sparrow
- **Para este taller** : Menú → **File** → **Open Transaction** → **From Text**
- Pegar el PSBT Base64 recibido

---

## Firmar la PSBT

### Paso 2: Agregar tu firma

- Verificar los detalles de la transacción
- Dirección de destino
- Monto
- Tarifas
- Dirección de cambio

⚠️ **CRÍTICO** : Verificar antes de firmar

---

## Firmar la PSBT

### Paso 3: Firmar

- Hacer clic en **"Sign"**
- Ingresar la contraseña si se solicita
- La firma se agrega a la PSBT
- Guardar la PSBT actualizada

---

## Recopilar firmas

### Proceso iterativo

1. Participante 1 firma → PSBT con 1 firma
2. Transferir la PSBT al Participante 2
3. Participante 2 firma → PSBT con 2 firmas
4. Si 2-of-3: suficiente para finalizar

---

## Finalizar la transacción

### Cuando se recopilan todas las firmas

- Sparrow detecta que se alcanzó el número requerido de firmas
- El botón **"Finalize"** está disponible
- Hacer clic en **"Finalize"**

---

## Difundir la transacción

### Paso final

- Después de la finalización, hacer clic en **"Broadcast Transaction"**
- La transacción se envía a la red Bitcoin
- Esperar las confirmaciones
- Seguir en la pestaña **Transactions**

---

## El corazón del multi-sig

### Principio fundamental

**Múltiples personas deben firmar antes de que el dinero pueda salir**

- Seguridad mejorada
- Protección contra el robo
- Control compartido de los fondos

---

## Verificaciones antes de firmar

### Lista de verificación para cada participante

- [ ] Dirección de destino correcta
- [ ] Monto correcto
- [ ] Tarifas aceptables
- [ ] Dirección de cambio verificada
- [ ] Todos los outputs están verificados
- [ ] Entiendo lo que estoy haciendo

---

## Buenas prácticas - Respaldo

### Para cada keystore

- ✅ Frase semilla en papel
- ✅ Almacenar en diferentes ubicaciones
- ✅ Nunca compartir frases semilla
- ❌ Nunca en ordenador/nube/correo

---

## Buenas prácticas - Seguridad

### Gestión de claves

- ✅ Distribuir claves en diferentes dispositivos
- ✅ Usar hardware wallets si es posible
- ✅ Almacenar claves en ubicaciones seguras
- ✅ Siempre verificar PSBTs antes de firmar

---

## Buenas prácticas - Coordinación

### Trabajar en equipo

- ✅ Comunicarse claramente con otros participantes
- ✅ Verificar la identidad de otros firmantes
- ✅ Usar canales seguros para transferir PSBTs
- ✅ Mantener un registro de transacciones

---

## Lo que hemos aprendido

- ✅ Comprender el concepto de multi-firma
- ✅ Comprender las claves y las palabras de recuperación (BIP-39)
- ✅ Descubrir las configuraciones posibles (2-of-3, 3-of-5, etc.)
- ✅ Crear una billetera multi-sig en Sparrow
- ✅ Recibir bitcoins en una billetera multi-sig
- ✅ Crear y firmar PSBTs
- ✅ Gastar desde un multi-sig con múltiples firmas

---

## Puntos clave - Seguridad

⚠️ **Seguridad**

- El multi-sig requiere múltiples firmas para gastar
- Si se pierde una clave, los fondos siguen siendo accesibles
- Una clave robada no puede usarse para gastar
- Siempre verificar PSBTs antes de firmar

---

## Puntos clave - Claves y xpubs

🔑 **Claves y xpubs**

- El multi-sig usa solo xpubs, nunca frases semilla
- Cada participante mantiene su seed privada
- Los xpubs permiten generar direcciones sin exponer las claves privadas

---

## Puntos clave - PSBT

📝 **PSBT**

- Formato estándar para transacciones multi-sig
- Permite firmar una transacción en múltiples pasos
- Múltiples personas deben firmar antes de que el dinero pueda salir

---

## Próximos talleres

- Be-BOP
- Block transaction
- Liana basics
- Liana advanced
