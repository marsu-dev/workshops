# be-BOP

December 4, 2025

Discover be-BOP, free software to manage your sales in complete independence. No commission, no censorship.

---

## The ethical and independent sales tool

### Free software

- It's not a platform
- Free and copyleft software
- You own and control everything

---

## The ethical and independent sales tool

- No commission
- No censorship
- No dependency on third parties

---

## Who is be-BOP for?

### Target audience

- Creators
- Entrepreneurs
- Communities

---

## Who is be-BOP for?

### Integrated tools

- Fund your work
- Manage your sales and subscriptions
- Organize your events
- Engage your community

---

## What is be-BOP?

be-BOP is not a platform. It's free and copyleft software that you own and control entirely.

- Free and self-hosted software
- Open and modular architecture
- Online and on-site payments
- Unlimited customization and integration
- No installation or support included

---

[![bip-21](presentations/03-be-bop/bip-21.png)](https://bip-21.fr/)

---

[![BitcoinStore](presentations/03-be-bop/bitcoinstore.png)](https://bitcoinstore.fr/)

---

[![Suif & Praline](presentations/03-be-bop/sulinaderm.png)](https://sulinaderm.com/)

---

[![Marketplace CryptoXR](presentations/03-be-bop/cryptoxr.png)](https://market.cryptoxr.fr/)

---

## Features

### Commerce

- **Online store**: Complete sales management
- **Subscriptions**: Recurring subscription management
- **Events**: Creation and ticketing
- **Community**: Tools to engage your community

---

## Features

### Payments & Freedom

- **Payments**: Online and on-site, no commission
- **0% commission**: All your revenue belongs to you
- **Total independence**: Your data, your infrastructure

---

## Why be-BOP?

### Total control

Deploy your own environment and maintain total control over your tools, your data, and your revenue.

---

## Why be-BOP

### Total freedom

**0% commission**
No platform takes a commission on your sales.

**Total freedom**
You decide what you sell, no one can block you.

---

## Installation

### Prerequisites

1. A Linux server (Debian or Ubuntu LTS)
2. A domain name you control
3. DNS configuration access
4. An email address (for Let's Encrypt)

---

## Prerequisites

### The server

**Linux server** (Debian or Ubuntu LTS)

- Minimum: 2 GB RAM
- Disk space: 40 GB
- Internet access

---

## Prerequisites

### Domain & DNS

**A domain name** you control
Example: `example.com`

**Required DNS configuration:**

- `example.com` → Your server IP
- `s3.example.com` → Your server IP

---

## Step 1

### Get a server

You'll need a server to run commands:

- VPS from any hosting provider
- Dedicated machine
- Spare machine at home running Linux

---

## Step 1

### Access methods

**How to access the server:**

- Via SSH (terminal or SSH client)
- Via web console from the provider

**For Windows:**
[Git for Windows](https://gitforwindows.org/)

---

## Step 2

### Get a domain name

Register a domain with the provider of your choice:

- Root domain: `example.com`
- Or subdomain: `boutique.example.com`

You'll configure DNS in the next step.

---

## Step 2

### Configure DNS (IPv4)

Create two A (IPv4) records:

```text
yourdomain.com      → A → Your server IPv4
s3.yourdomain.com   → A → Your server IPv4
```

---

## Step 2

### Configure DNS (IPv6)

Also add AAAA records:

```text
yourdomain.com      → AAAA → Your server IPv6
s3.yourdomain.com   → AAAA → Your server IPv6
```

**Note:** Wait for DNS propagation

---

## Step 3

### Verify server access

Try a simple command to confirm server access:

```text
ssh root@yourdomain.com
```

---

## Step 4

### Launch installation

**Modify this command with your information:**

```bash
bash <(curl -fsSL https://be-bop.io/wizard/install.sh) \
  --domain "yourdomain.com" \
  --email "address@email.com"
```

**Before executing:**

- Replace `yourdomain.com` with your domain
- Replace `address@email.com` with your email

The script displays all planned tasks and asks for confirmation before making changes.

---

## Installation in progress

### Duration: 3 to 10 minutes

The script does everything automatically:

- Install dependencies
- Configure services
- Generate SSL certificates
- Prepare be-BOP

---

## After installation

### Visit your domain in a browser

be-BOP will be ready for initial configuration via the web interface.

Follow the setup wizard to:

- Create your administrator account
- Configure your payment settings
- Customize your store

---

## Need help?

### If you encounter a problem

Contact support with:

- Your hosting provider
- Your domain name
- A screenshot of the error

---

## Documentation

[All details on be-bop.io](https://be-bop.io/get-started-diy)

---

## Ready to get started?

### Your digital independence starts here

[Discover be-BOP](https://be-bop.io/)

---

## It's your turn

- Add your products & services
- Create your CMS pages
- Configure BIP-84
- Configure PhoenixD
- Configure Swiss Bitcoin Pay
