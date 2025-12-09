# Presentación Soroban

no planificado

Soroban es un sistema de mensajería efímera descentralizado que permite intercambiar mensajes de corta duración y automatizar protocolos interactivos.

Basado en la biblioteca [libp2p](https://libp2p.io/), se comunica a través de Tor para garantizar anonimato y resistencia a la censura.

---

## Objetivos

- Comprender Soroban y su arquitectura
- Arquitectura técnica (JSON-RPC, clave/valor, GOSSIP)
- Integración con Tor
- Histórico y aplicaciones reales
- Casos de uso prácticos
- Instalación y demostración

---

## ¿Qué es Soroban?

Mensajería efímera descentralizada

- Red peer-to-peer ([libp2p](https://libp2p.io/))
- Mensajes efímeros
- Automatización de protocolos interactivos
- Comunicación vía Tor
- Anonimato y resistencia a la censura
- Código abierto AGPL 3.0

---

## Arquitectura Técnica

Servidor JSON-RPC con sistema clave/valor

- **Servidor JSON-RPC**: API estandarizada
- **Sistema clave/valor genérico**: Almacenamiento distribuido
- **Red P2P con GOSSIP**: Sincronización automática
- **Cifrado a cargo de la aplicación**: Máxima flexibilidad
- **Cliente HTTP + proxy SOCKS**: Uso sencillo con Tor

Un nodo Soroban difunde los datos en la red P2P mediante el protocolo GOSSIP.

---

## Clave / Valor

### Flexibilidad

- Estructura libre: la clave y el valor los define la aplicación
- Valores múltiples: varias entradas pueden compartir la misma clave
- Efímero: TTL configurable según las necesidades

**Modelo de datos**: Document Model No-SQL

---

## Integración con Tor

Comunicación anónima y resistente a la censura

- Enrutamiento vía Tor (hidden services)
- Generación de direcciones .onion vanity
- Protección de la identidad
- Resistencia a la vigilancia

---

## Operaciones Posibles

- **Agregar**: `directory.Add`
  - Agregar una entrada con una clave y un valor
  - Modo de vida útil configurable

---

## Operaciones Posibles

- **Listar**: `directory.List`
  - Listar todas las entradas para una clave dada
  - Si existen varias entradas, se devuelven todas

---

## Duración de los Mensajes

TTL (Time To Live) según el modo

| Modo                 | Duración      |
| -------------------- | ------------- |
| `fast`               | 15 segundos   |
| `short`              | 1 minuto      |
| `normal` / `default` | 3 minutos     |
| `long`               | 5 minutos     |

---

## Primera Aplicación: Cahoot (Samourai Wallet)

Evolución del proyecto y casos de uso reales

- Intercambio de PSBT para los payjoin Cahoot
- Sincronización entre socios de la transacción
- Protocolo interactivo automatizado

---

## Intento Whirlpool

Proyecto de descentralización

- Proyecto para descentralizar Whirlpool
- No se concretó

---

## Ashigaru Wallet

En producción

- Payjoin
- Cliente RPC integrado en el monedero

---

## Dojo PushTx

Función PushTx en Dojo

- Función PushTx en Dojo
- Envío de transacciones a través del clúster Soroban
- Selección aleatoria de un nodo para el broadcast
- Distribución de carga en la red Bitcoin para una mejor privacidad

**Sigue siendo compatible con Samourai Wallet**

---

## Mensajería Efímera

Casos de uso potenciales

- Sincronización de socios (payjoin, Ō-uzu)
- Autenticación Auth47 / [PayNym](https://paynym.rs/)
- Coordinación descentralizada

---

## Replicación de Copias de Seguridad Cifradas

Casos de uso potenciales

- Monederos (Sparrow, etc.)
- Coldcard
- BullBitcoin

**Copia de seguridad distribuida segura**

---

## Mejora de los Protocolos Interactivos

Casos de uso potenciales

- Multi-sig en Sparrow
- Coordinación de firmas
- Protocolos complejos de Bitcoin

---

## Ō-uzu (gran vórtice)

Casos de uso potenciales

- Protocolo de mezcla multiparte
- Coordinador independiente
- Descentralizado

**El coordinador puede fijar sus comisiones**

---

## Estado Actual del Proyecto

Clúster Dojo y desarrollo

- **Repositorio**: Dojo-Open-Source-Project
- **URL**: https://github.com/Dojo-Open-Source-Project/soroban
- **Clúster Dojo**: ~150 nodos activos
- **Última versión**: 0.4.2 ([Changelog](https://github.com/Dojo-Open-Source-Project/soroban/blob/v0.4.2/Changelog.md))
- **Dapps**: Permite crear aplicaciones distribuidas

---

## Instalación vía Docker

Montar un nodo Soroban local

### Prerrequisitos

- Docker
- Tor 
- Cliente HTTP (curl, etc.)

---

## Instalación vía Docker

### Comandos

```bash
# Clonar el repositorio (versión 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build de las imágenes
bash soroban.sh server_build

# Arranque del servidor
bash soroban.sh server_start
```

---

## Instalación desde el Código Fuente

Montar un nodo Soroban local

### Prerrequisitos

- Go
- Tor, Tor Browser
- Cliente HTTP (curl, etc.)

---

## Instalación desde el Código Fuente

### Comandos

```bash
# Clonar el repositorio (versión 0.4.2)
git clone https://github.com/Dojo-Open-Source-Project/soroban.git -b v0.4.2
cd soroban

# Build
make soroban

# Ejecución
go run cmd/server/main.go --hostname=0.0.0.0 --port=4242
```

---

## Configuración

Parámetros principales

- **Port**: Puerto del servidor (por defecto: 4242)
- **Seed**: Seed para generar la dirección .onion
- **Prefix**: Prefijo para la dirección vanity
- **P2P Bootstrap**: Dirección para unirse a la red
- **P2P Room**: Segregación de clústeres

---

## Demostración Práctica

Creación de un nodo e intercambio de mensajes

### Construcción y arranque del servidor

```bash
# Build de las imágenes Docker
./soroban.sh server_build

# Arranque del servidor
./soroban.sh server_start

# Verificación del estado
./soroban.sh server_status

# Consulta de logs
./soroban.sh server_logs
```

---

### Generación de una dirección .onion vanity

```bash
go run ./cmd/server --prefix=sci --genCount=1
```

---

### Arranque de un nodo Soroban local (alternativa)

```bash
go run cmd/server/main.go \
  --seed 169fc9f1925eec11b6a728044c9f4e6dd1a676a4f4e6f640c4100015644914e8 \
  --hostname=0.0.0.0 \
  --port=4242
```

---

### Configuración del endpoint

```bash
soroban_endpoint="http://sorzvujomsfbibm7yo3k52f3t2bl6roliijnm7qql43bcoe2kxwhbcyd.onion"
```

---

### Añadir una entrada

```bash
curl -s --socks5-hostname 127.0.0.1:9150 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d "{
    \"jsonrpc\": \"2.0\",
    \"id\": 42,
    \"method\": \"directory.Add\",
    \"params\": [{
      \"Name\": \"marseille.bitcoin.soroban\",
      \"Entry\": \"Marseille Bitcoin (Only) - ¯\\\\_(ツ)_/¯ - $(date -u)\",
      \"Mode\": \"short\"
    }]
  }" \
  "$soroban_endpoint/rpc" | jq .result
```

---

### Listar las entradas

```bash
curl -s --socks5-hostname 127.0.0.1:9150 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": 42,
    "method": "directory.List",
    "params": [{
      "Name": "marseille.bitcoin.soroban"
    }]
  }' \
  "$soroban_endpoint/rpc" \
  | jq -r .result
```

---

## Red Peer-to-Peer

Conexión a la red descentralizada

- **Bootstrap**: Dirección de un nodo existente
- **Descubrimiento de pares**: Vía DHT
- **Sincronización**: Propagación GOSSIP automática
- **Rooms**: Segregación de clústeres (p2pRoom)
- **Resiliencia**: Sin punto único de fallo

**Ejemplo de conexión**:
```bash
go run cmd/server/main.go \
  --p2pBootstrap /onion3/.../p2p/... \
  --withTor=true \
  --p2pRoom soroban-p2p
```

---

## Conclusión

Soroban: infraestructura para Dapps descentralizadas

- Mensajería efímera descentralizada
- Protocolos interactivos automatizados
- Infraestructura flexible y extensible
- Anonimato vía Tor
- Uso sencillo (HTTP + SOCKS)
- Clúster Dojo: ~150 nodos
- Licencia: Código abierto AGPL 3.0

---

## Recursos
- Repositorio: https://github.com/Dojo-Open-Source-Project/soroban
- libp2p: https://libp2p.io
- Paynym: https://paynym.rs
- Ashigaru: https://ashigarumobile.org/
