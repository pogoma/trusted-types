import { Module } from '@nestjs/common';
import { RawController } from './0-raw/controller';
import { RequireTrustedTypesWithoutPolicyController } from './1-require-trusted-types-without-policy/controller';
import { RequireTrustedTypesWithPolicyController } from './2-require-trusted-types-with-policy/controller';
import { RequireTrustedTypesWithUntrustedPolicyController } from './3-require-trusted-types-with-untrusted-policy/controller';
import { RequireTrustedTypesWithTrustedPolicyController } from './4-require-trusted-types-with-trusted-policy/controller';


@Module({
  imports: [],
  controllers: [
    RawController,
    RequireTrustedTypesWithoutPolicyController,
    RequireTrustedTypesWithPolicyController,
    RequireTrustedTypesWithUntrustedPolicyController,
    RequireTrustedTypesWithTrustedPolicyController
  ],
  providers: []
})
export class AppModule {
}
