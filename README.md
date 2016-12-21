## Examples blog post with graphQL
Small examples, best pratices for Node.js & graphQL

## Installation

```
yarn install # or
npm install
```

## Run Dev

```
npm run dev 
# go to localhost:8080/graphql
```

## Build produciton

```
npm run build
npm run start
# go to localhost:8080/graphql
```

## Content seeder
If you want auto generator fake data, please run URL
```
http://localhost:8080/seeder
```

## Example queries
```
// Query with pagination
{
  posts(itemPerPage: 10, page: 2){
    pagination{
      page,
      itemPerPage,
      totalItem
    }
    data{
      _id,
      title
    }
  }
}
```

```
// Get post with author and comments
{
  post(_id: "5858cdeeddd10800609c917b"){
    title,
    user{
      username
    },
    comments{
      content
    }
  }
}
```

```
// Get comments list by postId
{
  comments(postId: "5858cdeeddd10800609c917b"){
    content,
    user{
      username
    }
  }
}
```

## Example mutations

```
// createUser
mutation{
  createUser(username: "thanhtungdp", password: "123456"){
    token,
    success,
    user{
      username
    }
  }
}
```

```
// loginUser
mutation{
  loginUser(username: "thanhtungdp", password: "123456"){
    token,
    success,
    user{
      username
    }
  }
}
```

```
// loginUserWithToken
mutation{
  loginUserToken(token: "token from user here"){
    token,
    success,
    user{
      username
    }
  }
}
```

```
// addPost
mutation{
  addPost(title: "Title", description: "Description", content: "Content here", userId: "5858cdeeddd10800609c9107"){
    title
  }
}
```