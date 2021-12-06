# turnstyl-testing


To spin up Kafka using Docker, run the command below:

```

docker-compose up -d

```

# Testing package locally 
   ### Turnstyl repository
   1. `npm init` 
   2. `tsc <index.ts>` // Compiling Typescript file // match name with package.json "main"
   3. `npm link` // directs npm to this folder when installing in another location

   ### Test repository
   4. `npm init`
   5. `npm link <turnstyl-testing>` // match name with package.json "name" 
   6. `node <script.ts>` 
---
# Publishing Turnstyl 
- within Turnstyl folder 
```
   1. npm login
   2. npm publish

```
