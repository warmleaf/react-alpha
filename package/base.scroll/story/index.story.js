import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from '../index'

storiesOf('Base Component|Container', module)
  .addAPIDoc(
    'Container',
    {
      comment: 'this is a description for Container',
      platform: 'pc|mobile',
      scope: {
        Container
      },
      code: `<Container
       h="200px" 
       bgc="#fff" 
       onScrollStart={() => console.log('start scrolling...')}
       onScrollEnd={() => console.log('end scrolling...')}
       >Almost all of the GraphQL types you define will be object types. Object types have a name, but most importantly describe their fields.

When two types need to refer to each other, or a type needs to refer to itself in a field, you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
        
Note that resolver functions are provided the source object as the first parameter. However, if a resolver function is not provided, then the default resolver is used, which looks for a method on source of the same name as the field. If found, the method is called with (args, context, info). Since it is a method on source, that value can always be referenced with this
When two types need to refer to each other, or a type needs to refer to itself in a field, you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
        
Note that resolver functions are provided the source object as the first parameter. However, if a resolver function is not provided, then the default resolver is used, which looks for a method on source of the same name as the field. If found, the method is called with (args, context, info). Since it is a method on source, that value can always be referenced with this
When two types need to refer to each other, or a type needs to refer to itself in a field, you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
        
Note that resolver functions are provided the source object as the first parameter. However, if a resolver function is not provided, then the default resolver is used, which looks for a method on source of the same name as the field. If found, the method is called with (args, context, info). Since it is a method on source, that value can always be referenced with this
When two types need to refer to each other, or a type needs to refer to itself in a field, you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
        
Note that resolver functions are provided the source object as the first parameter. However, if a resolver function is not provided, then the default resolver is used, which looks for a method on source of the same name as the field. If found, the method is called with (args, context, info). Since it is a method on source, that value can always be referenced with this
When two types need to refer to each other, or a type needs to refer to itself in a field, you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
        
Note that resolver functions are provided the source object as the first parameter. However, if a resolver function is not provided, then the default resolver is used, which looks for a method on source of the same name as the field. If found, the method is called with (args, context, info). Since it is a method on source, that value can always be referenced with this</Container>`
    }
  )
