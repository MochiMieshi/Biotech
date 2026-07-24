ServerEvents.recipes(event => {
    event.shaped(
        Item.of('bionic_synthesis:andesite_alloy', 3),
        [
            'ai',
            'ia'
        ],
        {
            a: 'minecraft:andesite',
            i: 'minecraft:iron_ingot'
        }
    )
})