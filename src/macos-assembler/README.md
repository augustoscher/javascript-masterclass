# MacOS m1 assembler example

## Running

1. Assemble:
```sh
as -o HelloWorld.o HelloWorld.s
```

2. Link:
```sh
ld -macosx_version_min 13.0.0 -o HelloWorld HelloWorld.o -lSystem -syslibroot `xcrun -sdk macosx --show-sdk-path` -e _start -arch arm64
```

3. Run:
```sh
./HelloWorld
```

It should print "Hello World!" in the console.
