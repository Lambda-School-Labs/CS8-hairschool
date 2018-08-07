# CS8-hairschool

## API URL `https://aqueous-cove-88989.herokuapp.com`

## hairschool endpoints

## Logging and Authorization

### POST -- `/hairschool/rest-auth/registration`

Registers a new client.

| Property |     Type      | Required |
| -------- | ------------- | -------- |
| username | alphanumeric, *unique* | Yes      |
| password1 | String at least 8 alpha-numeric characters | Yes      |
| password2 | String at least 8 alpha-numeric characters, should equal 'password1' | Yes      |
| email | requires an `@` and a `.` as in a typical email address, *unique* | no      |


**Success**

```js
{
  key: 'a123123b321321c123123',
};
```

**Fail**

```js
{
  username: 'Reason for failure',
  email: 'Reason for failure',
  password1: 'Reason for failure',
  password2: 'Reason for failure'
}
```
### POST -- `/hairschool/rest-auth/registration/verify-email/`

### POST -- `/hairschool/rest-auth/login`
```
// params:
{
  username,
  email,     // Optional
  password,
}
```
### POST -- `/hairschool/rest-auth/logout`
```
// params:
{
  // none
}
```
### POST -- `/hairschool/rest-auth/password/reset`
```
// params:
{
  email
}
```
### POST -- `/hairschool/rest-auth/password/reset/confirm/`
```
// params:
{
  uid,
  token,
  new_password1,
  new_password2
}
```
### POST -- `/hairschool/rest-auth/password/change/`
```
// params:
{
  new_password1,
  new_password2,
  old_password
}
```



// todo
```
### GET, PUT, PATCH -- `/hairschool/rest-auth/user/`

### POST -- `/hairschool/rest-auth/rest-auth/facebook/`
### POST -- `/hairschool/rest-auth/rest-auth/twitter/`
```

## User Manipulation

### GET -- `/hairschool`

Gets all users in database.

Token must be set in Authorization headers as `'token a123123b321321c123123'`

**Success**

```js
{
  [
    {
      username: 'username',
      email: 'email'
    },
    {
      username: 'username',
      email: 'email'
    },    
    {
      username: 'username',
      email: 'email'
    },
    // ... continues to lists all users
  ]
};
```

**Fail**

```js
{
  detail: 'Failure info'
}
```

<!-- ## ```endpoint template```

### TYPE -- `/endpoint`

Description

**Success**

```js
{
};
```

**Fail**

```js
{
}
``` -->

