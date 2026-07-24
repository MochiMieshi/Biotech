ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('bionic_synthesis:lithic_slurry', 3), [
            'kubejs:granite_slurry',
            'kubejs:stone_slurry',
            'minecraft:clay',
            'minecraft:mud'
        ]
    );
});