/*
!1
Q: What is a NodeJs?
A:  It is an environment which runs run JS outside of Browser.
    It is a runtime environment which uses JavaScript language to execute functions in terminal, i.e. outside of browser environment.
    Helps at backend to provide server services and database connecting services and more to frontEnd of applications
    Built on Chrome's V8 JS engine

!2
Q: What is the difference between Browser Vs Node.JS ?
A: 
 Browser:
    We have access and work with DOM
    There is a Window Object in Browser which is native and comprises of various inbuilt methods and properties
    You can interact with applications through frontEnd functionality in Browser.
    There is No Filesystems to work with
    Fragmentations instead of Version
    ES6 Modules is used. e.g. import {<module>} from "../."  


NodeJS:
    Since the entire implementation happens in Terminal, hence there is no need for reaching browser. Hence, no DOM exists in NodeJS
    There uis no Window Object since window object comes from Browser and there in no Browser services that exists in NodeJS
    NODEJS in primarily used for Server Side Apps and services
    There is FileSystems structure that exsists
    Versions instead of Fragmentations
    CommonJS is used instead of ES6 modules e.g. const <moduleName> = require("./..")

!3
Q: What are the most used GLOBAL objects available in Node:
A: Before going further; understand that there is Global objects available and NO Windows in Node environment.

Each of the below are some commonly used GLOBAL Objects in NODE, which have thier own further properties and methods

__dirname   :   shows path to current directory
__filename  :   shows the file name
require     :   function in CommonJS to use modules

module      :   returns object containing info about current module (file). remember, all files are considered to be modules in themselves

process     :   info about environment where the program is being executed. This is very usefull in getting understanding of the systems like deployment platforms like Heroku and others 




!4
Q: Most used BUILT-IN Modules:

*   OS
*   Path
*   FS
*   HTTP



*/
