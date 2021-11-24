import { Controller, Get, Header } from '@nestjs/common';
import * as fs from 'fs';

// http://localhost:3333/3-require-trusted-types-with-untrusted-policy/index.html#%3Cimg%20onerror%3D%22alert(0)%22%20src%3D%22x%22%20%2F%3E
@Controller('3-require-trusted-types-with-untrusted-policy')
export class RequireTrustedTypesWithUntrustedPolicyController {

  @Get(['/', 'index.html'])
  @Header('Content-type', 'text/html')
  @Header('Content-Security-Policy', `require-trusted-types-for 'script'; trusted-types some-policy;`)
  index(): string {
    return fs.readFileSync(__dirname + '/assets/index.html').toString();
  }

  @Get(['/script.js'])
  @Header('Content-type', 'text/javascript')
  script(): string {
    return fs.readFileSync(__dirname + '/assets/3-require-trusted-types-with-untrusted-policy/script.js').toString();
  }

}
