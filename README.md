`Head_First_Object-Oriented_Analysis_Design_book with typeScript`
every chapter is structured within it's own directory.
the book shows the problem first, and then with some steps it tries to solve that problem.
I'm trying with the help of some notes and comments to make any obscure stuff clear.
I will keep adding to this repo as soon as I finish the chapter
that's it for now...

    ro run any test-drive u just have to setup typeScript with the help of package.json:
    run "npm i" to install ts to the dir and all the configurations are set to u so u don't have to change anything.
    then with the help of npx and ts-node-dev package, u can watch the test-drive u want to test or try ur stuff
    ex...
        npx ts-node-dev --respawn --transpile-only <Chapter1/steps-for-good-software/03-applying-patterns/FindGuitarTester.ts>
    replace the file u want to watch inside of <> charachters
    or u can add a dev script to npm scripts as well. u can do that in package.json file...
