# turnstyl-testing


To spin up Kafka using Docker, run the command below:

```

docker-compose up -d

```

# Testing package locally 
```
root   
│
└───"Turnstyl" (1)
│   │   index.ts // needs TypeScript compiler (2)
│   │   index.js // compiled root file (2)
│   │   package.json
│   │   README.md
│    
└───"test-folder" (4)
│   │   script.ts (4)

```
---
   1. `npm init` 
   2. `tsc <index.ts>` // Compiling Typescript file => match name with package.json "main"
   3. `npm link` // directs npm to this folder when installing in another location
   4. initiate a mock environment folder for Turnstyl & `npm init`
   5. `npm link <turnstyl-testing>` // match name with packag.json "name" 
   6. `node <script.ts>`
   
# Publishing Turnstyl 
- within Turnstyl folder 
```
   1. npm login
   2. npm publish

```