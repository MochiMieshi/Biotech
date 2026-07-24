ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:stone_sword'),
        [
            ' c ',
            ' c ',
            'csc'
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