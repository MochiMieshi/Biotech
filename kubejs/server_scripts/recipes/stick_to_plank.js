ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:oak_planks', 2),
        [
            'ss',
            'ss'
        ],
        {
            s: '#c:wooden_rods'
        }
    )
})