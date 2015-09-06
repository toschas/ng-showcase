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
    var debugEnabled = true; // Extract to grunt environment variables for dev, test and prod
    $logProvider.debugEnabled(debugEnabled);
  });
