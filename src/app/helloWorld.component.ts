
export const helloWorldComponent = {
  template: `
    <h1>Hello, world!</h1>
    <button ng-click="$ctrl.sayHello()">Say hello</button>
    {{ $ctrl | json }}
  `,
  controller: ($log) => {
    this.sayHello = () => $log.debug('hi');
  }
  // controller: HelloWorldComponentController
};

// class HelloWorldComponentController {
//   logger;

//   constructor($log) {
//     this.logger = $log;
//   }

//   sayHello() {
//     this.logger.debug('Hello world');
//   }

// }
