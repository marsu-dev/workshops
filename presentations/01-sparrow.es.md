# Sparrow Wallet

10 de noviembre de 2025

Aprende a crear una billetera, usar frases de contraseña, gestionar cuentas, recibir y enviar bitcoins, y dominar la selección de monedas.

---

## Objetivos

- Creación de billetera
- Frase de contraseña BIP39
- Gestión de cuentas
- Recibir y enviar
- Selección de monedas

**Entorno**: *Signet*

---

## ¿Por qué Signet?

Red de prueba de Bitcoin

- Sin fondos reales
- Funcionalidades idénticas a mainnet
- Faucets disponibles

---

## Instalación

Descargar desde el sitio oficial

- macOS / Windows / Linux
- Verificar la firma GPG

---

## Configuración de red

### Conexiones posibles

1. Servidor Electrum
2. Bitcoin Core (RPC)
3. Servidores Electrum públicos

---

## Configuración Signet

### En Sparrow

1. Preferencias → Servidor / Conexiones
2. Elegir red Signet
3. Agregar servidor Electrum signet
4. Verificar "Conectado"

---

## Creación de la billetera

### Tipos disponibles

- Billetera estándar de clave única (BIP39)
- Descriptores (bech32 native segwit)

---

## Creación - Pasos

1. Menú → Nueva Billetera → Billetera Estándar
2. Elegir un nombre
3. Formato: Native SegWit (P2WPKH)
4. Generar la semilla (12 palabras + Frase de contraseña)
5. Guardar en papel ⚠️

---

## Frase de contraseña BIP39

### Concepto

Frase de contraseña opcional

- `semilla + frase de contraseña` = billetera A
- `semilla sola` = billetera B

Direcciones completamente diferentes

---

## Frase de contraseña - Ventajas

- Defensa en profundidad
- Protección adicional
- Billetera separada con la misma semilla

---

## Frase de contraseña - Riesgos

⚠️ **Pérdida de la frase de contraseña = pérdida de fondos**

- Almacenar por separado de la semilla
- Gestor seguro
- Nunca mostrar públicamente

---

## Frase de contraseña - Demo

1. Activar Frase de contraseña en configuración
2. Ingresar una frase de contraseña
3. Observar direcciones diferentes
4. Probar con frase de contraseña diferente

---

## Gestión de cuentas

### Conceptos

- Cuentas: `m/84'/1'/0'`, `m/84'/1'/1'`
- Etiquetas: etiquetado de direcciones/UTXO
- Solo lectura: vía xpub/descriptor

---

## Cuentas - Demo

1. Crear una segunda cuenta
2. Etiquetar una dirección
3. Importar xpub en solo lectura
4. Filtrar por etiqueta / cuenta

---

## Recibir bitcoins

### Tipos de direcciones

- Recibir: para recibir
- Cambio: para el cambio devuelto

Usar nuevas direcciones para privacidad

---

## Recibir - Demo

1. Billetera → Recibir → generar dirección
2. Mostrar código QR
3. Usar faucet signet
4. Observar la transacción

---

## Recibir - Conceptos

- Confirmaciones: número de bloques
- Madurez: los UTXO deben estar confirmados
- Visualización: txid, vout, cantidad, confirmaciones

---

## Enviar bitcoins

### Funcionalidades

- Control deslizante de tarifas (sats/vB)
- Replace-By-Fee (RBF)
- Child-Pays-For-Parent (CPFP)
- Selección manual de monedas

---

## Enviar - Demo

1. Billetera → Enviar → dirección destino
2. Ingresar cantidad
3. Seleccionar tarifa
4. Activar RBF si es necesario
5. Firmar y transmitir

---

## Enviar - Verificaciones

⚠️ **Verificar las salidas**

- No dejar cambio hacia dirección no controlada
- Comprender el impacto de las tarifas
- Previsualizar antes de firmar

---

## Selección de monedas

### ¿Por qué controlarla?

- Privacidad: evitar la correlación
- Tarifas: optimizar los costos
- Consolidación: agrupar UTXO

---

## Selección de monedas - Demo

1. Abrir pestaña Monedas/UTXO
2. Ver txid, vout, cantidad, confirmaciones
3. En Enviar → Seleccionar Entradas
4. Elegir UTXO manualmente

---

## Congelar UTXO

Impedir que un UTXO sea seleccionado

- Útil para conservar fondos
- Evitar gasto accidental
- Bloqueo de UTXO

---

## Congelar - Demo

1. Seleccionar un UTXO
2. Clic derecho → Congelar
3. Verificar en Enviar (no seleccionado)
4. Demostrar Descongelar

---

## Buenas prácticas

✅ **Lista de verificación esencial**

- Guardar semilla + frase de contraseña (por separado)
- Nodo personal para privacidad
- Control de monedas y congelación
- Etiquetas sistemáticas
- Verificar las salidas

---

## Recursos

- Documentación Sparrow Wallet
- Faucets Signet
- Documentación Bitcoin Core signet

---

## ¿Preguntas?

**Taller BIP-21 - Parte 01: Usos de Sparrow**

*Red Signet - Sin valor real*
