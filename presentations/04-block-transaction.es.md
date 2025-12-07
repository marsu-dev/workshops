# Bloques y Transacciones

08 de diciembre de 2025

Comprende la estructura de los bloques de Bitcoin y el proceso de validación de transacciones en la blockchain.

---

## Introducción

Comprender los fundamentos de Bitcoin: estructura de los bloques y validación de transacciones

---

## Objetivos

- Entender qué es una transacción de Bitcoin
- Entender cómo se agrupan las transacciones en bloques
- Entender por qué se pagan comisiones
- Conocer los diferentes formatos (Legacy, SegWit, Taproot)
- Entender el identificador de una transacción (TXID)
- Entender el árbol de Merkle y su papel en la seguridad de los bloques

---

## ¿Qué es una transacción de Bitcoin?

Una transacción de Bitcoin es como un **cheque digital** que:

- **Toma** dinero que ya recibiste (tus monedas de Bitcoin)
- **Envía** ese dinero a otra persona (o te lo devuelve como "cambio")

---

## Las monedas de Bitcoin (UTXO)

Imagina que recibiste varias monedas de Bitcoin:

- Una moneda de 0,1 BTC
- Una moneda de 0,05 BTC
- Una moneda de 0,02 BTC

Para enviar 0,15 BTC debes usar tus monedas existentes. Es como pagar con billetes: si quieres pagar 15 € y tienes un billete de 20 €, debes usarlo y recibir 5 € de cambio.

---

## Estructura simple de una transacción

Una transacción contiene esencialmente:

**1. Las entradas (inputs)**
- Qué monedas usas (referencia a las monedas que recibiste)

**2. Las salidas (outputs)**
- A quién envías el dinero (monto + dirección)
- Tu cambio (si usaste más de lo necesario)

**3. La firma**
- Tu prueba de que eres el propietario de las monedas

---

## Ejemplo concreto

**Situación:** Alice quiere enviar 0,1 BTC a Bob

**Lo que tiene Alice:**
- Una moneda de 0,15 BTC que recibió anteriormente

---

## Ejemplo concreto

**La transacción:**
- **Entrada:** Usa la moneda de 0,15 BTC de Alice
- **Salida 1:** 0,1 BTC a Bob
- **Salida 2:** 0,0499 BTC a Alice (su cambio)
- **Comisión:** 0,0001 BTC (la diferencia)


---

## Ejemplo concreto

**Resultado:** Bob recibe 0,1 BTC, Alice recupera casi todo el resto y los mineros reciben las comisiones.

---

## Las comisiones de transacción

¿Por qué pagar comisiones?

- Los mineros deben verificar e incluir tu transacción en un bloque
- Es como pagar un servicio postal: cuanto más urgente, más caro
- Las comisiones incentivan a los mineros a procesar tu transacción rápidamente

---

## Las comisiones evitan el spam

**Las comisiones evitan el spam:** sin comisiones, cualquiera podría enviar miles de transacciones inútiles y saturar la red

---

## ¿Cómo se calculan las comisiones?

Las comisiones dependen de **dos cosas**:

**1. El tamaño de tu transacción**
- Cuantas más monedas (entradas) uses, más grande es
- Cuantos más destinatarios (salidas) haya, más grande es
- Las firmas también ocupan espacio

**2. La prioridad que quieres**
- Comisiones altas = procesamiento rápido (como correo urgente)
- Comisiones bajas = procesamiento más lento (como correo normal)

---

## Ejemplo de cálculo de comisiones

**Transacción simple:**
- 1 entrada (una moneda usada)
- 2 salidas (destinatario + cambio)
- Tamaño: unos 250 bytes

---

## Ejemplo de cálculo de comisiones

**Si eliges:**
- Comisiones rápidas: 50 satoshis por byte → 250 × 50 = 12.500 satoshis
- Comisiones normales: 10 satoshis por byte → 250 × 10 = 2.500 satoshis

**Nota:** Las transacciones modernas (SegWit) son más baratas porque las firmas ocupan menos espacio.

---

## El identificador de una transacción (TXID)

Cada transacción recibe un **identificador único**, como un número de seguimiento.

**Características:**
- Es una cadena larga de letras y números (como un código de barras)
- Es único: es imposible tener dos transacciones con el mismo identificador
- Permite encontrar tu transacción en la blockchain

---

## El TXID nunca cambia

- Nunca cambia: aunque consultes la transacción más tarde, el identificador sigue siendo el mismo

**Utilidad:**
- Verificar que se envió una transacción
- Seguir el estado de un pago
- Referenciar una transacción en el futuro

---

## Ver las transacciones en Sparrow

**Paso 1: Abrir la pestaña Transactions**
- Selecciona tu monedero en Sparrow
- Haz clic en la pestaña **Transactions** (parte inferior de la interfaz)
- Verás la lista de todas tus transacciones

---

## Consultar los detalles de una transacción

**Paso 2: Consultar los detalles de una transacción**
- Haz doble clic en una transacción de la lista
- Se abre una ventana con todos los detalles de la transacción

---

## Ver el TXID en Sparrow

**Método 1: En la lista de transacciones**
- La pestaña **Transactions** muestra el TXID de cada transacción
- Es la primera columna (cadena larga de letras y números)
- Puedes hacer clic para copiarlo

---

## Ver el TXID en Sparrow

**Método 2: En los detalles de una transacción**
- Haz doble clic en una transacción
- El TXID aparece en la parte superior de la ventana de detalles
- Puedes hacer clic para copiarlo

---

## Ver el TXID en Sparrow

**Método 3: Menú contextual**
- Clic derecho en una transacción de la lista
- Selecciona **"Copy Transaction ID"**
- El TXID se copia al portapapeles

---

## Información visible en Sparrow

**Información básica:**
- El **TXID** (identificador único)
- El **monto** enviado o recibido
- La **fecha y hora** de la transacción
- El **número de confirmaciones**

---

## Detalles técnicos en Sparrow

**Detalles técnicos:**
- Las **entradas**: qué monedas se usaron
- Las **salidas**: a quién se envió el dinero
- Las **comisiones** pagadas
- El **tamaño** de la transacción (en vBytes)

---

## Estado de una transacción en Sparrow

**Estado:**
- **Pendiente:** transacción sin confirmar
- **Confirmada:** número de bloques desde la confirmación
- **Finalizada:** transacción completamente confirmada

---

## Una transacción no puede perderse

**Garantía de Bitcoin:**

Una transacción de Bitcoin **nunca** puede perderse. Solo hay dos estados posibles:

---

## Estado 1: La transacción está minada

**1. La transacción está minada**
- Está incluida en un bloque de la blockchain
- Está confirmada e irreversible
- Tu dinero ha sido transferido

---

## Estado 2: No se realizó ninguna operación

**2. No se realizó ninguna operación**
- La transacción nunca se difundió en la red
- O fue rechazada antes de ser minada
- Tu dinero nunca salió de tu monedero

**No hay estados intermedios:**
- No existe una "transacción en tránsito" que pueda desaparecer
- No hay un "limbo" donde tu dinero quede bloqueado
- O está hecho o no está hecho

---

## Los diferentes formatos de transacciones

Bitcoin ha evolucionado y hoy ofrece varios formatos de transacción. Cada formato tiene ventajas en costo y funcionalidades.

---

## Comparación de formatos: Legacy, SegWit, Taproot

| Formato     | Nombre técnico | Año | Características                              | Costo relativo        |
| ----------- | -------------- | --- | -------------------------------------------- | --------------------- |
| **Legacy**  | P2PKH          | 2009| Formato original, firmas dentro de la tx     | El más caro           |
| **SegWit**  | P2WPKH         | 2017| Firmas separadas, 4x más barato              | Reducción importante  |
| **Taproot** | P2TR           | 2021| Formato más moderno, firmas optimizadas      | El más barato         |

**En la práctica:** ¡Los formatos modernos (SegWit y Taproot) te ahorran dinero en comisiones!

---

## Las transacciones modernas (SegWit)

**Antes (formato Legacy antiguo):**
- Las firmas estaban en la transacción principal
- Transacciones más pesadas = comisiones más altas
- Formato: P2PKH (Pay-to-Public-Key-Hash)

---

## SegWit: las ventajas

**Ahora (SegWit):**
- Las firmas están separadas (en el "witness")
- Transacciones más ligeras = comisiones más bajas
- Aproximadamente 4 veces más barato para las firmas
- Formatos: P2WPKH, P2WSH

**Ventaja:** ¡Pagas menos comisiones por la misma transacción!

---

## Costo de los diferentes formatos de entrada

Cuando usas una moneda de Bitcoin en una transacción, el costo depende del formato:

| Tipo de entrada          | Formato     | Tamaño aprox.      | Costo relativo     |
| ------------------------ | ----------- | ------------------ | ------------------ |
| **Legacy**               | P2PKH       | ~148 vBytes        | El más caro        |
| **SegWit anidado**       | P2SH-P2WPKH | ~91 vBytes         | Ahorro moderado    |
| **SegWit nativo**        | P2WPKH      | ~41 vBytes         | Muy eficiente      |
| **Taproot**              | P2TR        | ~16-57 vBytes      | Óptimo             |

---

## Ahorro con SegWit

**Ejemplo concreto:**
- Usar una moneda Legacy: cuesta unas 148 unidades
- Usar una moneda SegWit: cuesta unas 41 unidades
- **Ahorro:** ¡Un 70% menos de comisiones con SegWit!

---

## Costo de los diferentes formatos de salida

Cuando envías dinero a alguien, el formato de la dirección de destino también influye en el tamaño:

| Tipo de salida | Formato | Tamaño aprox. |
| -------------- | ------- | ------------- |
| **Legacy**     | P2PKH   | ~34 vBytes    |
| **SegWit**     | P2WPKH  | ~31 vBytes    |
| **Taproot**    | P2TR    | ~43 vBytes    |

**Nota:** La diferencia es menor en las salidas, pero SegWit sigue siendo ligeramente más eficiente.

---

## Ejemplo de comparación de comisiones

**Transacción con 1 entrada y 2 salidas:**

| Formato      | Tamaño total | Comisiones (a 20 sat/vByte) | Ahorro          |
| ------------ | ------------ | --------------------------- | --------------- |
| **Legacy**   | ~250 vBytes  | ~5.000 satoshis             | -               |
| **SegWit**   | ~117 vBytes  | ~2.340 satoshis             | 53% más barato  |
| **Taproot**  | ~100 vBytes  | ~2.000 satoshis             | 60% más barato  |

**Conclusión:** ¡Usar formatos modernos puede ahorrarte más de la mitad de las comisiones!

---

## Taproot: el formato más moderno

**Taproot (P2TR)** es el formato más reciente y avanzado:

**Ventajas:**
- **Comisiones aún más bajas:** Firmas Schnorr optimizadas
- **Más privacidad:** Todas las transacciones Taproot se parecen
- **Más flexibilidad:** Permite scripts complejos sin revelar su existencia
- **Mejor eficiencia:** Codificación optimizada

---

## ¿Cuándo usar Taproot?

**¿Cuándo usarlo?**
- Si tu monedero lo soporta (monederos modernos)
- Para obtener las comisiones más bajas
- Para más privacidad

**Nota:** No todos los monederos soportan Taproot todavía, pero es el formato del futuro.

---

## Organización del bloque

Las transacciones no se procesan una por una. Se agrupan en **bloques**, como páginas de un libro contable.

**Un bloque contiene:**
- Un encabezado (como la portada de un libro)
- Una lista de transacciones (como las líneas de un registro)

---

## Tamaño y frecuencia de los bloques

**Tamaño de un bloque:**
- Máximo alrededor de 1 MB de datos
- Puede contener varios miles de transacciones
- Se crea un nuevo bloque aproximadamente cada 10 minutos

---

## La coinbase

En cada bloque, la **primera transacción es especial**:

**La transacción coinbase:**
- Crea nuevos bitcoins (la recompensa del minero)
- Recoge todas las comisiones de las transacciones del bloque
- Es como el sueldo del minero por su trabajo

---

## Ejemplo de recompensa del minero

**Ejemplo:**
- Recompensa del bloque: 3,125 BTC (actualmente)
- Comisiones cobradas: 0,5 BTC
- **Total para el minero:** 3,625 BTC

---

## Orden de las transacciones

**Regla simple:**
1. La coinbase siempre va primero
2. Las demás transacciones pueden ir en cualquier orden
3. **Excepto:** si la transacción B gasta dinero creado en la transacción A, entonces A debe ir antes que B

---

## ¿Por qué esta regla?

**¿Por qué?**
- Es como en la vida real: ¡no puedes gastar dinero que aún no recibiste!

---

## Ejemplo de orden de transacciones

**Ejemplo:**
- Transacción A: Alice recibe 0,1 BTC
- Transacción B: Alice envía 0,05 BTC a Bob
- B debe ir **después** de A en el bloque

---

## El árbol de Merkle
**el sello de seguridad del bloque**

El árbol de Merkle es un sistema que crea una **huella única** para todas las transacciones de un bloque.


---

## El árbol de Merkle
**Analogía simple:**
Imagina un libro con 1.000 páginas. En lugar de revisar cada página, creas un "índice mágico" que resume todo el libro en una sola línea. Si alguien cambia aunque sea una letra, el índice cambia por completo.

---

## Uso del árbol de Merkle

**1. Detectar modificaciones**
- Si alguien intenta modificar una transacción del bloque, la huella cambia
- Es como un sello de cera: si se rompe, se nota de inmediato
- Imposible falsificar un bloque sin que sea evidente

---

## Verificar rápidamente una transacción

**2. Verificar rápidamente una transacción**
- Puedes probar que una transacción está en el bloque **sin descargar todas las transacciones**
- Es como comprobar si una palabra está en un diccionario sin leer todas las páginas
- Muy útil para monederos ligeros en el teléfono

---

## Ahorrar espacio y ancho de banda

**3. Ahorrar espacio y ancho de banda**
- En lugar de almacenar todas las transacciones, puedes verificar solo la huella
- Los monederos móviles pueden funcionar sin descargar toda la blockchain

---

## ¿Cómo funciona?

**Paso 1:** Cada transacción recibe una "huella" única (como un código de barras)

**Paso 2:** Agrupas las huellas de dos en dos y creas una nueva huella para cada par

**Paso 3:** Repites hasta obtener una sola huella final: la **Merkle Root**

**Resultado:** ¡Una sola huella representa todas las transacciones del bloque!

Esta huella final se almacena en el encabezado del bloque.

---

## Estructura del árbol de Merkle

<img src="presentations/04-block-tx/merkle.png" alt="Estructura del árbol de Merkle" style="height: 300px; width: auto; background-color: white; padding: 20px; border-radius: 8px;">

---

## ¿Por qué es útil en la práctica?

**Escenario 1: Verificar tu pago**
- Quieres verificar que tu transacción está en un bloque
- **Sin Merkle:** Tendrías que descargar todas las transacciones del bloque (quizá 3.000 transacciones = varios MB)
- **Con Merkle:** Descargas solo unas pocas huellas pequeñas (unos pocos KB) y puedes probar que tu transacción está ahí

---

## ¿Por qué es útil en la práctica?

**Escenario 2: Monedero en el teléfono**
- Tu teléfono no tiene espacio suficiente para almacenar toda la blockchain (cientos de GB)
- **Con Merkle:** Tu monedero puede verificar tus transacciones sin descargar todo
- Es como tener el resumen del libro en lugar del libro entero

---

## Seguridad con el árbol de Merkle

**Escenario 3: Seguridad**
- Si un atacante intenta modificar una transacción en un bloque
- La huella de Merkle cambia inmediatamente
- Todos los nodos de la red rechazan el bloque modificado
- Es imposible falsificar sin que todos se den cuenta

---

## Resumen simple

El árbol de Merkle es:
- ✅ Un **sello de seguridad**: imposible modificar un bloque sin que cambie la huella
- ✅ Un **sistema de verificación rápida**: probar que una transacción existe sin descargar todo
- ✅ Un **ahorro de espacio**: los monederos ligeros pueden funcionar sin la blockchain completa

---

## Resumen simple

**En una frase:**

Es como un índice mágico que cambia si modificas aunque sea una letra del libro, y que permite comprobar que una página existe sin leer todo el libro.

---

## Validación de un bloque

Antes de que un bloque sea aceptado, debe **validarse**:

**Comprobaciones:**
- Todas las transacciones son válidas (firmas correctas)
- Nadie ha gastado dinero que no tiene
- Ninguna transacción está duplicada
- Los montos son correctos (salidas ≤ entradas)
- La huella de Merkle es correcta

**Si todo está bien:** El bloque se añade a la blockchain
**Si algo está mal:** El bloque se rechaza

---

## Ver un bloque en mempool.space

**Paso 1: Desde los detalles de una transacción en Sparrow**
- Abre Sparrow y ve a la pestaña **Transactions**
- Haz doble clic en una transacción confirmada
- En los detalles, haz clic en el **hash del bloque** o el **número de bloque**
- Esto abre automáticamente el bloque en mempool.space

---

## Ver un bloque en mempool.space

**Paso 2: Abrir mempool.space**
- Ve a [mempool.space](https://mempool.space) en tu navegador
- O usa [mempool.space/signet](https://mempool.space/signet) para Signet

---

## Ver un bloque en mempool.space

**Paso 3: Buscar el bloque**
- Usa la barra de búsqueda en la parte superior de la página
- Introduce el número de bloque o el hash del bloque
- Haz clic en el resultado para ver todos los detalles del bloque

---

## Qué puedes ver en mempool.space

**Información del bloque:**
- El **hash del bloque** y el **número de bloque**
- El **número de transacciones** en el bloque
- El **tamaño del bloque** (en MB)
- Las **comisiones cobradas** por el minero
- La **recompensa del bloque** (coinbase)
- La **Merkle Root** (huella de todas las transacciones)

---

## Qué puedes ver en mempool.space

**Lista de transacciones:**
- Todas las transacciones del bloque en orden
- Primero la transacción coinbase
- Los detalles de cada transacción (TXID, montos, comisiones)

---

## Resumen: Una transacción de Bitcoin

Una transacción de Bitcoin es como un cheque digital que:
- Toma dinero que ya tienes
- Lo envía a otra persona (o te lo devuelve)
- Incluye tu firma para probar que eres tú

---

## Resumen: Una transacción de Bitcoin

**Contiene:**
- Las monedas que usas (entradas)
- A quién envías (salidas)
- Tu firma

---

## Resumen: Una transacción de Bitcoin

**No contiene:**
- Tu nombre o identidad
- Tu saldo total
- Tu dirección de correo electrónico

---

## Resumen: Las comisiones de transacción

Las comisiones dependen de:
- **El tamaño** de tu transacción (número de monedas usadas, número de destinatarios)
- **El formato** utilizado (Legacy, SegWit, Taproot)
- **La prioridad** que elijas (rápida = más cara, lenta = más barata)

---

## ¿Por qué comisiones?

**¿Por qué comisiones?**
- Remuneran a los mineros por su trabajo
- Evitan el spam y protegen la red
- Incentivan un procesamiento rápido de las transacciones

---

## Comparación de formatos

**Comparación de formatos:**
- **Legacy:** El más caro (~250 vBytes para una transacción simple)
- **SegWit:** Aproximadamente 2x más barato (~117 vBytes)
- **Taproot:** El más barato (~100 vBytes)

---

## Resumen: El identificador (TXID)

Cada transacción tiene un **identificador único**:
- Es como un número de seguimiento
- Permite encontrar tu transacción
- Nunca cambia
- Puedes compartirlo para demostrar un pago

**¿Dónde encontrarlo?** En tu monedero, después de enviar una transacción.

---

## Resumen: Los bloques

Las transacciones se agrupan en **bloques**:
- Un bloque = una página del libro contable de Bitcoin
- Aproximadamente 1 MB máximo
- Un nuevo bloque cada 10 minutos
- La primera transacción es siempre la coinbase (recompensa del minero)

**Orden:**
- Coinbase primero
- Otras transacciones en cualquier orden
- Excepto cuando una transacción depende de otra

---

## Resumen: El árbol de Merkle

El árbol de Merkle crea una **huella única** del bloque:
- **Seguridad:** Imposible modificar un bloque sin que cambie la huella
- **Verificación rápida:** Probar que una transacción existe sin descargar todo el bloque
- **Ahorro de espacio:** Los monederos ligeros pueden funcionar sin la blockchain completa

---

## Puntos clave para recordar

- ✅ Una transacción toma dinero que tienes y lo envía a otro lado
- ✅ Las comisiones dependen del tamaño y la prioridad
- ✅ Cada transacción tiene un identificador único (TXID)
- ✅ Las transacciones se agrupan en bloques
- ✅ La primera transacción de un bloque es siempre la coinbase
- ✅ El árbol de Merkle garantiza que nadie pueda modificar un bloque

---
