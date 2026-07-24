ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:stone_slurry', 2), [
            'minecraft:cobblestone',
            'kubejs:mortar',
            'minecraft:mud'
        ]
    );
});