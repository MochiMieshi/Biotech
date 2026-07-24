StartupEvents.registry('item', event => {
  event.create('stone_slurry')
       .displayName('Stone slurry')
       .tooltip('A mineral mixture. Very strong.')
       .maxStackSize(64);
});