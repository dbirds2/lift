import * as angular from 'angular'
import route from "./home.route"
const name = 'home';
const template = '/client/app/home/home.html'

namespace app.home {
    export class HomeController { }

    HomeController.$inject = [];
}

export default angular.module('app.home', [])
    .component(name, {
        templateUrl: template,
        controller: app.home.HomeController,
        controllerAs: 'vm'
    })
    .config(route)

    .name;
