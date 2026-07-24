StartupEvents.registry('item', event => {
  event.create('granite_slurry')
       .displayName('Granite slurry')
       .tooltip('A mineral mixture. Very resistent to fire.')
       .maxStackSize(64);
});