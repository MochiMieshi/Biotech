ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:packed_mud', 2),
        [
            'dd',
            'dd'
        ],
        {
            d: 'minecraft:dirt'
        }
    )
})