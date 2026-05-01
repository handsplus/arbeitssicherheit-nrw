/**
 * Startet Next.js auf Port 3007 und öffnet http://localhost:3007 im Standard-Browser.
 */
import { spawn, exec } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, '..');
const nextCli = path.join(webRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

const child = spawn(process.execPath, [nextCli, 'dev', '-p', '3007'], {
  cwd: webRoot,
  stdio: 'inherit',
});

const openBrowser = () => {
  const url = 'http://localhost:3007';
  if (process.platform === 'win32') {
    exec(`start "" "${url}"`);
  } else if (process.platform === 'darwin') {
    exec(`open "${url}"`);
  } else {
    exec(`xdg-open "${url}"`);
  }
};

setTimeout(openBrowser, 2500);

child.on('exit', (code) => process.exit(code ?? 0));
