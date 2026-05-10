# MIRegistrationEvents.registerCableTiers

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterCableTiersEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| get | String |  | CableTier | ✘ |
| register | String, String, String, long, ResourceLocation |  | CableTier | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `CableTier get(String var0)`

  Parameters:
  - var0: String

```
Gets a previously registered cable tier by name.
```

- `CableTier register(String var0, String var1, String var2, long var3, ResourceLocation var4)`

  Parameters:
  - var0: String
  - var1: String
  - var2: String
  - var3: long
  - var4: ResourceLocation

```
Registers a new cable tier.
```

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
MIRegistrationEvents.registerCableTiers((event) => {
	// This space (un)intentionally left blank
});
```

