const os = require("os");
const fs = require("fs");
const a = os.freemem();
const b = os.homedir();
const c = os.hostname();
const d = os.endianness();
const e = os.loadavg();
const f = os.platform();
const g = os.release();
const h = os.tmpdir();
const i = os.totalmem();
const j = os.type();
const k = os.uptime();
const obj_one = os.cpus();
const l = JSON.stringify(obj_one);
const m = os.arch();
const obj = os.networkInterfaces();
const n = JSON.stringify(obj);
let all_info = `free memory:- ${a} \n home directory:- ${b} \n host name:- ${c} \n endianness:- ${d} \n load average:-  ${e} \n plateform:- ${f} \n release Info:- ${g} \n temp directory:- ${h} \n total memory:- ${i} \n os type:- ${j} \n uptime:- ${k} \n cpus:- ${l}  \n\n\n\n architecture:- ${m} \n\n\n\n\n Network Interface:- ${n} \n `;
fs.writeFile("os_module.txt", `${all_info}`, (err) => {
  if (err) {
    console.err(err);
  }
});
