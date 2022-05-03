Three core concepts: Cake Shop

Entities
Shop (cakes on shelf)
Shopkeeper
Customer

Activities
Customer -> asks to buy a cake
Shopkeeper -> remove cake from shelf, box the cake, take payment

Three Core Concepts

1.  Store -> Holds the state of your application (Shop Inventory)
2.  Action -> Describes what happened (customer BUY_CAKE)
3.  Reducer -> Ties the store and action together (Shopkeeper)

Three Principles

1.  The state of your whole application is stored in an object tree within a single store
2.  The only way to change the state is to emit an action, an object describing what happened.
3.  Reducers specify how the state tree is transformed by actions.
    - Reducers receive two parameters: a) state, b) action.
    - Reducers determine the new state to return based on the action object.

JavaScript App

- State maintained by Redux Store.
- App can only affect state by dispatching an action
- Actions are received and processed by reducers.
- Reducers pass the revised state to the Redux store.

Now Ice Cream also

- Need another shopkeeper to handle ice cream sales
- We will need another action type
-
