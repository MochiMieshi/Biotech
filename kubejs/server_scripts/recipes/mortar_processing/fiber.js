ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('bionic_synthesis:fiber', 1),
        [
            'kubejs:mortar',
            Ingredient.of('#c:tools/knives').damageIngredient(),
            Ingredient.of([
                '#c:seeds',
                '#c:crops',
                '#c:vegetables',
                '#c:fruits',
                '#c:berries',
                '#c:grains',
                '#minecraft:saplings',
                '#minecraft:leaves',
                '#minecraft:flowers'
            ])
        ]
    )
})