import * as angular from "angular"
import config from "./app.config"
import run from "./app.run"
import core from "./core/core.module"
import "angular-ui-router"

const name = "app";
const dependencies = [
  "ui.router",
  core
];

angular.module(name, dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], {strictDi: true});
