ServerEvents.recipes(event => {
    event.shaped(
        Item.of('bionic_synthesis:diorite_alloy', 3),
        [
            'di',
            'id'
        ],
        {
            d: 'minecraft:diorite',
            i: 'minecraft:iron_ingot'
        }
    )
})