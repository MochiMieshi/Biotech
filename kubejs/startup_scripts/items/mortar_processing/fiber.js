StartupEvents.registry('item', event => {
  event.create('bionic_synthesis:fiber')
       .displayName('Fiber')
       .tooltip('A flexible and cheap source of fuel. It\'s also can be used to craft paper.')
       .maxStackSize(64);
});