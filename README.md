## Countdown Improvements

### Functional components
Change all class components (Countdown component in this case) to a functional component, this approach will let us to define a single responsibility for our component which is just to render/formatting information, also by having single-responsibility components will let us more accurate create unit tests like the onde created for Card component.

### Styled components
Change of regular CSS file for Styled components, this approach will let us growth/maintain more efficiently our CSS code, also will provide an extra layer of logic to render styles base on props, etc

### Hooks
 Implementation of hooks, this feature will let us add a new layer of logic, letting us follow the declarative programming of react, a good example of this
 is the implementation of useInterval, a hook which was created to manage intervals following this declarative intention of React, also a useCountdown was created to manage extra information of the calculation, like adding a status of the countdown to update the app state accordingly,
 also here we could add the formatting of the extra zeros to the right like in the first version of this project.

Also moving the logic layer to proper places, the old Countdown class component was handling the responsibility of date calculation, which at firs look is not that ad, but moving this calculation
to a function will provide us the ability to follow again single-responsibility function and we could add unit test only for this function.

### Refactoring directories structure

       1. Components: single responsibility components, only the ones to rednder/format information.
       Hooks
       2. Pages: Components in charge of layout, data handling and state management, in this case CountdownPage component.
       3. Utils: Utility functions like calculateCountdown inside dates.js file

   With this approach we define an scalable directory structure, also leave App.js the responsibility of implementation of Routing, Providers, etc 
   

### Improvement on desing:
A little upgrade on colors, design nad behaviour 


###Further improvements:
Since this was a timed exercise I did not have time to add everything I wanted, some of these pending improvements are:
       
1. Add CSS animations/transitions
2. Add unit tests for all functions/components
3. Refactoring calculateCountdown function
4. Code refactorization (if needed)


