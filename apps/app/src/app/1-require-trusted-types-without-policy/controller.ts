import { Controller, Get, Header } from '@nestjs/common';
import * as fs from 'fs';

// http://localhost:3333/1-require-trusted-types-without-policy/index.html#%3Cimg%20onerror%3D%22alert(0)%22%20src%3D%22x%22%20%2F%3E
@Controller('1-require-trusted-types-without-policy')
export class RequireTrustedTypesWithoutPolicyController {

  @Get(['/', 'index.html'])
  @Header('Content-type', 'text/html')
  @Header('Content-Security-Policy', `require-trusted-types-for 'script';`)
  index(): string {
    return fs.readFileSync(__dirname + '/assets/index.html').toString();
  }

  @Get(['/script.js'])
  @Header('Content-type', 'text/javascript')
  script(): string {
    return fs.readFileSync(__dirname + '/assets/1-require-trusted-types-without-policy/script.js').toString();
  }

}
