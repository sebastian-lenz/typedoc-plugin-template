# TypeDoc plugin template

> A template for writing plugins for TypeDoc

This project is intended to be the starting point for writing new plugins for TypeDoc. Create a fork
and start coding your own plugin!

[TypeDoc](http://typedoc.io) can be easily extended using plugins. The application will load all
available modules having the keyword "typedocplugin" in their list of keywords in their package file.
The modules will be loaded using ```require``` and should return a function taking an instance of the
TypeDoc application class as their first and the TypeDoc namespace as their second argument.


## License

Copyright (c) 2015 [Sebastian Lenz](http://www.sebastian-lenz.de).<br>
Licensed under the Apache License 2.0.