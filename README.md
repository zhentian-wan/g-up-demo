# g-up-demo

Install.
```
npm i -g graphql-up -g
```

Run:
```
graphql-up tasks.schema
```

Simple query:
```
{
  allPersons {
    id,
    name,
    tasks {
      id,
      description
    }
  }
}
```

Simple mutation:
```
mutation {
  createTask(description: "Learn GraphQL", personId: "cj2t31akybh3g01184klolj0t") {
    id,
    description
  }
}
```
