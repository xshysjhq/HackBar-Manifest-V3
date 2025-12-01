# HackBar (Manifest V3)

[中文版本](README.md)

## Overview

HackBar is a browser extension for penetration testing, now migrated to the Manifest V3 standard, fully compatible with Chrome and Edge browsers. This tool provides security researchers and developers with a convenient way to test the security of web applications.

## Features

### Encryption/Decryption Functions
- MD5, SHA-1, SHA-256 hash calculation
- ROT13 encoding
- Base64 encode/decode
- URL encode/decode
- Hex encode/decode

### SQL Injection Assistance
- MySQL/MSSQL/Oracle character conversion
- Basic information column construction
- UTF-8/Latin-1 encoding conversion
- UNION SELECT statement generation
- Space to inline comment conversion

### XSS Attack Assistance
- String.fromCharCode conversion
- HTML character conversion
- XSS Alert templates

### LFI (Local File Inclusion) Testing
- Basic LFI test vectors
- Null byte bypass
- Double encoding
- Path and dot truncation
- Filter bypass techniques
- Wrapper exploitation (php://filter, zip://, data://, expect://, input://)

### Other Features
- JSON formatting
- String case conversion

## Installation

1. Download or clone this repository
2. Open Chrome/Edge browser
3. Navigate to `chrome://extensions/` or `edge://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked extension"
6. Select the folder containing this project

## Usage

1. Open the HackBar panel in developer tools
2. Enter the target address in the URL field
3. Use various tools to modify the URL or POST data
4. Click "Execute" to send the request

## Notes

This tool is intended only for legitimate penetration testing and security research. Do not use it for illegal purposes.

## License

This project is modified from the original HackBar extension to comply with Manifest V3 specifications.