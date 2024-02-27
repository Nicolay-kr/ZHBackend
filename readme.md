# Data Collector Service

This Node.js application periodically fetches data from a specified source URL and sends it to a Firestore database. It uses `axios` for HTTP requests, `node-cron` for scheduling these requests, and interacts with Firebase for data storage. Environment variables are used to manage sensitive information securely.

## Features

- Fetches data at a scheduled interval (configurable).
- Uses Basic Authentication to securely access the source URL.
- Stores fetched data to a Firestore database with a unique UUID for each entry.
- Configurable via environment variables.

## Prerequisites

- Node.js (version 14.x or higher recommended)
- npm (usually comes with Node.js)
- Access to a Firebase project and its associated credentials

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project directory. Define the necessary environment variables as per your Firebase project and source URL credentials.

    Example `.env` file:
    ```
    # Source API Credentials
    USER_NAME=<Your Source Username>
    PASSWORD=<Your Source Password>
    SOURCE_URL=<Your Source URL>
    
    # Firebase Service Account Credentials
    TYPE=service_account
    PROJECT_ID=<Your Project ID>
    PRIVATE_KEY_ID=<Your Private Key ID>
    PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
    CLIENT_EMAIL=<Your Firebase Client Email>
    CLIENT_ID=<Your Client ID>
    AUTH_URI=https://accounts.google.com/o/oauth2/auth
    TOKEN_URI=https://oauth2.googleapis.com/token
    AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
    CLIENT_X509_CERT_URL=<Your Client x509 Cert URL>
    ```

    **Note:** Do not include sensitive information such as private keys and passwords directly in the readme.

## Building and Running

To compile TypeScript to JavaScript and start the service, run:

```bash
npm run build
