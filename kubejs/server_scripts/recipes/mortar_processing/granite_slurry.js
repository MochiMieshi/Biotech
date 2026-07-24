ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:granite_slurry', 2), [
            'minecraft:granite',
            'kubejs:mortar',
            'minecraft:mud'
        ]
    );
});