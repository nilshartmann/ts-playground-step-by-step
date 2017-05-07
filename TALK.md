# Challenges / Problems

## State

*State is a little "tricky"...*

* Should be initialized in constructor with `this.state = ...` **but nowhere else**
* All **required** members of the State should be initialized in constructor
* No **additional** members should be allowed
* Modifying the State's members directly with `this.state.xyz = ...` should not be allowed
* Should be modified via `setState`. Problem: `setState` takes (only) a subset of the State

## Properties

* Properties should not be modifiable from inside the component
* Only declared property should be accepted when calling a Component
* "Special" property `children`

## General questions

* How to avoid accessing null/undefined objects?
* How to deal with undeclared types? How to make sure everything is declared?
* How to deal with (types for) external libs?
* React Hot Loader?


## Redux

* Action types should be typesafe
* It should only be possible to access properties from actions according to their type (i.e. `UPDATE_XYZ` has other properties than `REMOVE_XYZ`) in reducers for example

# Summary

* TypeScript support for React gets better with each TS release
* Integration with webpack is very good
* Redundant(?) with React.PropTypes:
  * What happens if you implement a lib that should ship PropTypes?
* Problems might be 3rd-party libs:
  * are there existing declaration files?
  * are the declarations up-to-date
  * in case of errors: who is responsible?
  * different versions for declarations and lib might be confusing

