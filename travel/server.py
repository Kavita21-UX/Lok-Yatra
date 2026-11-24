#!/usr/bin/env python3
"""
Custom Safari-Optimized Localhost Server for Lok Yatra Travel Portal
Features:
- Binds to 127.0.0.1 (IPv4) to avoid macOS Safari IPv6 localhost lookup stalls
- Enforces strict MIME types (text/css, application/javascript, text/html)
- Disables aggressive Safari caching for instant live updates
- Automatically finds an open port if 8000 is occupied
- Launches Safari directly on macOS
"""

import http.server
import socketserver
import socket
import os
import sys
import subprocess
import webbrowser

PORT = 8000
MAX_PORT_ATTEMPTS = 10

class SafariOptimizedHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        '': 'application/octet-stream',
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.ico': 'image/x-icon',
    }

    def end_headers(self):
        # Prevent Safari aggressive caching during local development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        # Add CORS header so Safari doesn't block local sub-resources
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write("[%s] %s\n" % (self.log_date_time_string(), format % args))

def find_available_port(start_port):
    port = start_port
    for _ in range(MAX_PORT_ATTEMPTS):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
        port += 1
    return start_port

def run_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    target_port = find_available_port(PORT)
    
    server_address = ('127.0.0.1', target_port)
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(server_address, SafariOptimizedHandler) as httpd:
        url_local = f"http://127.0.0.1:{target_port}"
        url_named = f"http://localhost:{target_port}"

        print("=" * 60)
        print("  SAFARI & MACOS OPTIMIZED LOCALHOST SERVER RUNNING")
        print("=" * 60)
        print(f"  • Primary URL (Fastest for Safari): {url_local}")
        print(f"  • Alternate URL:                   {url_named}")
        print("  • MIME Types: Strict text/css & application/javascript")
        print("  • Caching: Disabled for instant local changes")
        print("=" * 60)
        print("  Press Ctrl+C to stop the server\n")

        # Open in Safari on macOS
        if sys.platform == "darwin":
            try:
                subprocess.Popen(["open", "-a", "Safari", url_local])
            except Exception:
                webbrowser.open(url_local)
        else:
            webbrowser.open(url_local)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server gracefully...")
            httpd.server_close()

if __name__ == '__main__':
    run_server()

