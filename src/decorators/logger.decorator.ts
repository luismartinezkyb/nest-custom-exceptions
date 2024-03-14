import { Inject, Logger } from '@nestjs/common';

export function ConsoleLogResponse() {
  const injectLogger = Inject(Logger);
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    injectLogger(target, 'tracklogger');
    const originalMethod = propertyDescriptor.value;

    propertyDescriptor.value = async function (...args: any[]) {
      const value = await originalMethod.apply(this, args);
      const logger: Logger = this.tracklogger;
      logger.log('hola');
      // this.logger.log(`${propertyKey}: ${value}`);
      // logger.log(`${propertyKey}: ${value}`);
      // console.log(`${propertyKey}: ${value}`);
      return value;
    };
    return propertyDescriptor;
  };
}
