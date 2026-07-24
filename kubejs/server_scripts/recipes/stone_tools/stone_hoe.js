ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:stone_hoe'),
        [
            'cc ',
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