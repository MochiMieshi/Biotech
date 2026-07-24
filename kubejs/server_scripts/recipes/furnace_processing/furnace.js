ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:furnace',
        [
            'sss',
            'scs',
            'lll'
        ],
        {
            s: 'minecraft:cobblestone',
            c: 'minecraft:coal',
            l: 'kubejs:lithic_slurry'
        }
    )
});