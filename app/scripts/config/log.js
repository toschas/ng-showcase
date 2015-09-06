'use strict';

/**
 * @ngdoc overview
 * @name Log
 * @description
 * # Log
 *
 * Logging configuration
 */
angular
  .module('labDay00002App')
  .config(function ($logProvider) {
    $logProvider.debugEnabled(true);
  });
