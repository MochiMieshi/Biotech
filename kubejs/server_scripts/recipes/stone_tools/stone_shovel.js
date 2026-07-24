ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:stone_shovel'),
        [
            ' c ',
            ' s ',
            ' s '
        ],
        {
            c: Ingredient.of([
                "#c:cobblestones",
                "#c:stones"
            ]),
            s: '#c:wooden_rods'
        }
    )
})