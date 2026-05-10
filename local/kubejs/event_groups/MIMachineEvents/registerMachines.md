# MIMachineEvents.registerMachines

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterMachinesEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| energyBar | int, int |  | Parameters | ✘ |
| progressBar | int, int, String |  | Parameters | ✘ |
| efficiencyBar | int, int |  | Parameters | ✘ |
| simpleElectricCraftingMultiBlock | String, String, MachineRecipeType, ShapeTemplate, Parameters, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, String, String, boolean, boolean, boolean |  | void | ✘ |
| simpleElectricCraftingMultiBlock | String, String, MachineRecipeType, ShapeTemplate, Parameters, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, String, String, boolean, boolean, boolean, Consumer<CraftingMultiBlock> |  | void | ✘ |
| simpleSteamCraftingMultiBlock | String, String, MachineRecipeType, ShapeTemplate, Parameters, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, String, String, boolean, boolean, boolean |  | void | ✘ |
| simpleSteamCraftingMultiBlock | String, String, MachineRecipeType, ShapeTemplate, Parameters, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, Consumer<Builder>, String, String, boolean, boolean, boolean, Consumer<CraftingMultiBlock> |  | void | ✘ |
| simpleGeneratorMultiBlock | String, String, ShapeTemplate, long, Consumer<FluidItemConsumerBuilder>, String, String, boolean, boolean, boolean |  | void | ✘ |
| simpleGeneratorSingleBlock | String, String, String, long, long, long, Consumer<FluidItemConsumerBuilder>, String, String, boolean, boolean, boolean |  | void | ✘ |
| simpleGeneratorSingleBlock | String, String, String, long, long, Consumer<FluidItemConsumerBuilder>, String, String, boolean, boolean, boolean |  | void | ✘ |
| craftingSingleBlock | String, String, MachineRecipeType, List<String>, int, Parameters, Parameters, Parameters, int, int, int, int, int, Consumer<Builder>, Consumer<Builder>, boolean, boolean, boolean, Consumer<CraftingSingleBlock> |  | void | ✘ |
| craftingSingleBlock | String, String, MachineRecipeType, List<String>, int, Parameters, Parameters, Parameters, int, int, int, int, int, Consumer<Builder>, Consumer<Builder>, boolean, boolean, boolean |  | void | ✘ |
| startShape | String |  | Builder | ✘ |
| memberOfBlock | String |  | SimpleMember | ✘ |
| layeredShape | String, String[][] |  | LayeredBuilder | ✘ |
| noHatch |  |  | HatchFlags | ✘ |
| hatchOf | String[] |  | HatchFlags | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
MIMachineEvents.registerMachines((event) => {
	// This space (un)intentionally left blank
});
```

