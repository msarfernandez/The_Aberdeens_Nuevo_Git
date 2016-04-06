(function() {
    'use strict';
    var dialogButton = document.querySelector('#btnMundo');
    var dialogButton1 = document.querySelector('#btnAnios');
    var dialog = document.querySelector('#dialog');
    var dialog2 = document.querySelector('#dialog2');
    if (! dialog2.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton1.addEventListener('click', function() {
       dialog2.showModal();
    });
    dialog2.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog2.close();
    });

    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
       dialog.showModal();
    });

    dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });

  }());
