# replot
Visualizations meet the virtual-dom. Coming soon!

###How to utilize ComponentContainer
If a component needs live prop changing, you can utilize the ComponentContainer
located in /docs/components/CompContainer/ComponentContainer.jsx

To use it, first define an array in your example's state, which will serve as a
template for the options of the component:

```javascript
this.state = {
  optionList: [
    //To be filled with option outlines
  ]
}
```

Next, fill the defined array with Javascript objects, each of which correspond to
exactly one prop for your component, which you would like to turn into a
variable option. Each object should have an `optionName`, which should exactly match
a prop name for your component. It should also have an `optionType`, which can
be one of 4 predetermined values:
* "hidden" - corresponds to a prop you would like to show the value of, but
  one that should not be modifiable
* "bool" - corresponds to props/options which can only take on the values true
  or false
* "field" - corresponds to props/options which take some user-typed input (such as
  a number or string)
  * In this case, you should also specify an `input` key, which can be either
    "number" or "string", and identifies what the user will be inputting
* "state" - corresponds to props/options which can take on values that are predefined,
  but not only true and false (e.g. "lin", "log", "exp" for a graph scale)
  * In this case, you should also specify a `states` key, with a value of a javascript
    array, which enumerates what the predefined states can be.

```javascript
this.state = {
  optionList: [
    {optionName: "weightKey", optionType: "hidden", initialValue: "population"},
    {optionName: "keyOrder", optionType: "hidden", initialValue: ["country", "state", "city"]},
    {optionName: "width", optionType: "field", input: "number", initialValue: 800},
    {optionName: "height", optionType: "field", input: "number", initialValue: 400},
    {optionName: "initialAnimation", optionType: "bool", initialValue: true},
    {optionName: "displayPercentages", optionType: "bool", initialValue: true},
    {optionName: "tooltip", optionType: "bool", initialValue: false}
  ]
}
```

Finally, to actually implement the container, wrap your component with a
<ComponentContainer></ComponentContainer>, and pass along an `optionList` prop to
the ComponentContainer. Your data can be passed directly to the child component.

```javascript
<ComponentContainer optionList={this.state.optionList}>
  <TreeMapManager data={this.state.treeData} />
</ComponentContainer>
```
