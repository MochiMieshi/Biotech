ServerEvents.recipes(event => {
    event.shaped(
        Item.of('modern_industrialization:forge_hammer'),
        [
            'lll',
            ' a ',
            'aaa'
        ],
        {
            l: 'bionic_synthesis:lithic_slurry',
            a: 'bionic_synthesis:andesite_alloy'
        }
    )
})