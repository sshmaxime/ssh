# PREMIER

[Image Demo](resources/image-demo.png)

# Introduction

This is a side project of mine I started after working for a year at Bancor.

## Architecture

The project is splitted into 4 packages:

- Frontend
- Backend
- Contracts
- Typings

### Typings

Stack: [ Typescript ]

The typing package is a fully independent package that contains all the basic typings and informations that needs to be shared accross the whole project.

### Contracts

Project Dependencies: [ Typings ]
Stack: [ Typecript, Hardhat, Ethers, IPFS ]

The contract package contains everything related to smart contracts. It includes smart-contracts, deployment scripts but also additionals scripts for the deployment of metadata to IPFS. On top of that, by taking advantages of the typechain package, typescript bindings are generated for our smart-contracts and can be used anywhere.

### Server

Dependencies: [ Typings, Contracts ]
Stack: [ Typecript, Express, Websocket ]

At the root of the backend ecosystem the server handles what the frontend needs in order to work properly. It make uses of Websocket to improve connectivity and reactivness.

### App

Dependencies: [ Typings, Contracts ]
Stack: [ Typescript, React, Vite, RTK Query, React Three Fiber (Three.js) ]

The frontend includes a lot of thing. Made in React it leverages RTK Query to improve caching and code management. The 3D is handled by React Three Fiber, it was quite a challenged at first as I've never worked with 3D before. I migrated the app from CRA to Vite.
