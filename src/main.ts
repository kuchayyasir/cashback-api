import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('API docs')
    .setDescription(
      'REST API that calculates the cashback for some transactions based on the rulesets provided. Award the highest available cashback for each transaction.',
    )
    .setVersion('1.0')
    .addTag('')
    .addBasicAuth()
    .addBearerAuth()
    .addOAuth2()
    .addApiKey()
    .addCookieAuth()
    .addSecurityRequirements('bearer')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const redocOptions: RedocOptions = {
    title: 'API Docs',
    logo: {
      url: 'https://www.cronycle.com/wp-content/uploads/2021/10/Cronycle-API-documentation.png',
      backgroundColor: '#F0F0F0',
      altText: 'API Docs Logo',
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    noAutoAuth: true,
    pathInMiddlePanel: true,
    auth: {
      enabled: false,
      user: 'admin',
      password: '123',
    },
    tagGroups: [
      {
        name: 'Resources',
        tags: ['Ruleset', 'Transaction', 'Cashback'],
      },
    ],
  };
  await RedocModule.setup('/', app, document, redocOptions);

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
