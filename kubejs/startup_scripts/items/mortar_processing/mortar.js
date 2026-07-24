StartupEvents.registry('item', event => {
  event.create('mortar')
       .displayName('Mortar')
       .tooltip('Used as a basic tool to grind stuffs.')
       .maxStackSize(64);
});